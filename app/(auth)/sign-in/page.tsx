"use client";

import React, { useEffect } from "react";
import SignInForm from "./form";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";

const SignInPage = () => {
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
        <h2 className="font-semibold text-3xl">Sign In</h2>
        <SignInForm />
      </div>
    </main>
  );
};

export default SignInPage;
