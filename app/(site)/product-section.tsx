// import React from "react";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function ProductSection() {
  return (
    <section className="pb-10">
      <h1 className="my-10 text-2xl md:text-3xl font-semibold py-2">
        Our Products
      </h1>
      <BentoGrid className="max-w-7xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Aiselena Hotel",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <img
        height="100"
        width="100"
        className="w-full min-h-[6rem] object-cover rounded-lg"
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
        alt=""
      />
    ),
  },
  {
    title: "Aiselena Order",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
  },
];
