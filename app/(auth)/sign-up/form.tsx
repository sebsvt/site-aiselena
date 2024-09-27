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

// Schema for sign-up form validation
const SignUpFormSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "Firstname must be at least 2 characters." })
    .regex(/^[a-zA-Z]+$/, "Firstname must contain only alphabetic characters."),
  surname: z
    .string()
    .min(2, { message: "Surname must be at least 2 characters." })
    .regex(/^[a-zA-Z]+$/, "Surname must contain only alphabetic characters."),
  email: z
    .string()
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(50, { message: "Email must not exceed 50 characters." })
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[A-Z]/, "Password must include at least one uppercase letter.")
    .regex(/[a-z]/, "Password must include at least one lowercase letter.")
    .regex(/[0-9]/, "Password must include at least one number.")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must include at least one special character."
    ),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = (values: z.infer<typeof SignUpFormSchema>) => {
    console.log(values);
    // Handle form submission logic here
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Firstname and Lastname in the same row */}
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Surname</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
                <Input type="password" placeholder="********" {...field} />
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
          Sign Up
        </Button>

        {/* Link to Sign In if the user already has an account */}
        <div className="text-center space-y-2">
          <span className="text-sm">Already have an account?</span>
          <Link
            href="/sign-in"
            className="text-sm text-blue-600 hover:underline ml-1"
          >
            Sign in
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
