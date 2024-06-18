"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

// CREATE USER
const CreateUser = FormSchema;

export async function createUser(formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { name, email, password } = validatedFields.data;

  // Check if user already exists
  const existingUser = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;

  if (existingUser.rows[0]) {
    return { error: "A user with this email already exists." };
  }

  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await sql`
    INSERT INTO users (name ,email, password)
    VALUES (${name},${email}, ${hashedPassword})
  `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/");
  redirect("/");
}

// LOGIN AUTH

export async function authenticate(formData: FormData) {
  const email: any = formData.get("email");

  // Check if user already exists
  const existingUser = await sql`
   SELECT * FROM users WHERE email = ${email}
 `;

  if (!existingUser.rows[0]) {
    return { error: "A user with this email not exists" };
  }

  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Password is incorrect" };
      }
    }
    throw error;
  }
}

// LOGOUT

export async function signOutAction() {
  await signOut();
}
