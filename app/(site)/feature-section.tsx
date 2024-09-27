import { WobbleCard } from "@/components/ui/wobble-card";
// import Image from "next/image";
import React from "react";

const SiteFeatureSection = () => {
  return (
    <section className="">
      {/* <h1 className="text-2xl md:text-3xl font-semibold py-2">Features</h1> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Serverless, No Server Cost, No Infrastructure Cost
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              You can use any software that available without you being charged
              later.
            </p>
          </div>
          <img
            src="https://pngimg.com/d/server_PNG54.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Effortless Development and Deployment.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Our platform simplifies the development and deployment processes,
            enabling you to focus on driving innovation and business growth with
            minimal technical barriers.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Accessible to All Users
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Tailored for users of all skill levels, our solution eliminates
              the need for IT expertise, empowering you to create and manage
              software effortlessly.
            </p>
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/1216782885189849278/1281583750169497693/image.png?ex=66f5f4a0&is=66f4a320&hm=a21dff765920f21ed07c466f58d95bd2c41c1665ab54a432409452b1d5266d04&"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

export default SiteFeatureSection;
