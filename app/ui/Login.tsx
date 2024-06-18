"use client";

import BouncingCircles from "@/public/assets/svg/BouncingCircles";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { authenticate } from "../lib/actions";
import InputError from "./InputError";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format email@domain.com " }),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormFields = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    await authenticate(formData).then((result) => {
      if (result?.error) {
        console.log(result.error);
        setError("email", { message: result.error });
      }
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-full flex-col  max-w-80">
      <h1 className="font-semibold text-lg">Login to your account</h1>
      <p className="text-sm text-gray-4 mb-2">
        Enter your email to get acces the app
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full gap-3 mt-3"
      >
        <input
          {...register("email")}
          type="email"
          placeholder="email@domain.com"
          className={`bg-gray-2 rounded-lg px-2 py-1 w-full text-gray-4 ${
            errors.email && "outline-red-400"
          }`}
        />
        {errors.email && <InputError error={errors.email.message} />}

        <input
          {...register("password")}
          type="password"
          placeholder="*******"
          className={`bg-gray-2 rounded-lg px-2 py-1 w-full text-gray-4 ${
            errors.password && "outline-red-400"
          }`}
        />
        {errors.password && <InputError error={errors.password.message} />}
        <button
          disabled={isSubmitting}
          type="submit"
          className={`text-sm bg-black rounded-lg flex items-center justify-center text-white py-2 w-full hover:bg-black/85 ${
            isSubmitting && "cursor-progress"
          }`}
        >
          {isSubmitting ? <BouncingCircles /> : "Login"}
        </button>
        <span className="text-sm text-gray-4">or continue with</span>
        <button
          type="button"
          className="text-sm 3 border  rounded-lg  py-2 w-full hover:bg-gray-2/85 relative"
        >
          <Image
            src="/google.png"
            alt="google logo"
            width={20}
            height={20}
            className="absolute left-2  "
          />
          Google
        </button>
        <p className="text-sm text-center text-gray-4">
          New to Messenger?{" "}
          <Link href="/signup">
            <b> Create an account</b>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
