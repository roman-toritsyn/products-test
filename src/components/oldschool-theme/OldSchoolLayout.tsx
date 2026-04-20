import React from "react";
import ProductCard from "@/components/oldschool-theme/ProductCard";
import type { TProduct } from "@/lib/products/products.types";

type TOldSchoolLayoutProps = {
  products: TProduct[];
};

const OldSchoolLayout = ({ products }: TOldSchoolLayoutProps) => {
  return (
    <div className="min-h-screen py-10 px-6 flex flex-col gap-12 max-w-[1280px] mx-auto bg-primary">
      <h1 className="text-primary font-space-grotesk font-bold text-[60px] leading-[60px] tracking-[-3px] uppercase">
        URBAN <br />
        ESSENTIALS
      </h1>

      <div className="grid  gap-y-11 gap-x-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default OldSchoolLayout;
