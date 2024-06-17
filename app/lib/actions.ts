"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string(),
});

export type State = {
  errors?: {
    customerconfirmPassword?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

// CREATE INVOICE
const CreateUser = FormSchema.omit({ confirmPassword: true });

export async function createUser(formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { email, password } = validatedFields.data;
  const name = "memo";

  try {
    await sql`
    INSERT INTO users (name ,email, password)
    VALUES (${name},${email}, ${password})
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
