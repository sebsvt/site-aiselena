import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Build seamless software solutions <br /> and connect with customers in
          just a few clicks.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Launch your business with confidence using our user-friendly software
          solutions designed for SMEs and aspiring entrepreneurs. Whether
          starting fresh or enhancing operations, our platform empowers you to
          effortlessly connect with your customers.
        </p>
      </BackgroundLines>
    </section>
  );
};

export default HeroSection;
