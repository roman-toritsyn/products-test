import React from "react";
import ProductCard from "@/components/modern-theme/ProductCard";
import type { TProduct } from "@/lib/products/products.types";

type TModernLayoutProps = {
  products: TProduct[];
};

const ModernLayout = ({ products }: TModernLayoutProps) => {
  return (
    <div className="min-h-screen py-24 px-12 flex flex-col gap-20 max-w-[1280px] mx-auto bg-primary">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-primary font-bold text-[36px] uppercase tracking-[6px]">
          NEW ARRIVALS
        </h1>
        <div style={{ width: 48, height: 1, background: "var(--accent)" }} />
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ModernLayout;
