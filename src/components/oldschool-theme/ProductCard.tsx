import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import StarIcon from "@/components/icons/StarIcon";
import type { TProduct } from "@/lib/products/products.types";

type TProductCardProps = {
  product: TProduct;
  index: number;
};

const ProductCard = ({ product, index }: TProductCardProps) => {
  const { thumbnail, title, rating, description, price } = product;

  return (
    <div className="bg-white border-4 border-primary w-full flex flex-col shadow-[8px_8px_0px_0px_#1E1C10] transition-all hover:shadow-[10px_10px_0px_0px_#1E1C10]">
      <div className="relative w-full aspect-[376/372]">
        <Image
          priority={index < 6}
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw,
       (max-width: 1024px) 50vw,
       33vw"
        />
      </div>

      <div className="p-6 flex flex-col border-t-4 border-t-primary">
        <div className="flex justify-between gap-2">
          <h2 className="line-clamp-1 font-black font-space-grotesk text-primary text-2xl leading-8 tracking-tighter uppercase">
            {title}
          </h2>

          <div className="border-2 border-primary flex gap-1 py-0.5 px-2 bg-accent items-center h-min">
            <StarIcon />
            <p className="text-primary font-work-sans font-bold text-[12px] leading-[16px]">
              {rating}
            </p>
          </div>
        </div>

        <p className="line-clamp-3 mt-2 mb-6 text-secondary font-work-sans text-[14px] leading-[22.75px]">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <p className="font-space-grotesk font-black text-primary text-[30px] leading-[36px]">
            ${price}
          </p>

          <Button name="add to cart" icon={<CartIcon />} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
