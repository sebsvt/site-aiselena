"use client";

import React, { useEffect } from "react";
import SignUpForm from "./form";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";

const SignUpPage = () => {
  const { user, loading, error } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [loading, user, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-80 space-y-8">
        <h2 className="font-semibold text-3xl">Sign Up</h2>
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUpPage;
