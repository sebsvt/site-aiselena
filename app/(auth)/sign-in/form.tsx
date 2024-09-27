"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Schema with enhanced validation
const SignInformSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Email must be at least 3 characters long." })
    .max(50, { message: "Email must not exceed 50 characters." })
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(7, { message: "Password must be at least 7 characters long." })
    .max(250, { message: "Password must not exceed 250 characters." })
    .regex(/[A-Z]/, "Password must include at least one uppercase letter.")
    .regex(/[a-z]/, "Password must include at least one lowercase letter.")
    .regex(/[0-9]/, "Password must include at least one number.")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must include at least one special character."
    ),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInformSchema>>({
    resolver: zodResolver(SignInformSchema),
  });

  const onSubmit = (values: z.infer<typeof SignInformSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="user@example.com" {...field} />
              </FormControl>
              <FormDescription>This is your email address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
                Must include uppercase, lowercase, number, and special
                character.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Sign in
        </Button>

        {/* Links for Reset Password and Sign-Up */}
        <div className="text-center space-y-2">
          <Link
            href="/reset-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot your password? Reset here
          </Link>
          <div>
            <span className="text-sm">Don’t have an account?</span>
            <Link
              href="/sign-up"
              className="text-sm text-blue-600 hover:underline ml-1"
            >
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
