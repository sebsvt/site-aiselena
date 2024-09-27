import { Button } from "@/components/ui/button";
import React from "react";

const ProductDetailPage = ({
  params,
}: {
  params: { product_slug: string };
}) => {
  return (
    <main className="container mx-auto p-4">
      {/* Product Section */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://cdn.discordapp.com/attachments/1206612571336212521/1288537583021985802/Screenshot_2024-09-12-16-32-06-927_com.instagram.android.png?ex=66f63463&is=66f4e2e3&hm=d72b7f960d4086f0908b9304d3a73437ddf2bfed3501e167ede6584394074006&"
            alt="Product Image"
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <article>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Product Name {params.product_slug}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              This is a detailed description of the product. It highlights all
              the key features and explains the benefits of using this product.
              Great for attracting potential customers and giving them the
              information they need.
            </p>
          </article>

          {/* Pricing */}
          <div className="text-2xl font-semibold mb-6">$49.99</div>

          {/* Call to Action Buttons */}
          <div className="flex gap-4">
            <Button className="">Add to Cart</Button>
            <Button className="bg-gray-200 text-black rounded hover:bg-gray-300">
              Buy Now
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Product Features</h2>
        <ul className="list-disc ml-5 space-y-2 text-gray-600">
          <li>Feature 1: High-quality material</li>
          <li>Feature 2: Lightweight and durable</li>
          <li>Feature 3: Available in multiple colors</li>
          <li>Feature 4: 1-year warranty included</li>
        </ul>
      </section>
    </main>
  );
};

export default ProductDetailPage;
