import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import type { TProduct } from "@/lib/products/products.types";

type TProductCardProps = {
  product: TProduct;
  index: number;
};

const ProductCard = ({ product, index }: TProductCardProps) => {
  const { thumbnail, title, rating, price, reviews } = product;

  return (
    <div className="flex flex-col gap-6 group relative">
      <div className="relative w-full aspect-[272/340]">
        <Image
          priority={index < 8}
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 272px) 100vw,
       (max-width: 1024px) 50vw,
       33vw"
        />
      </div>

      <div className="flex flex-col">
        <p className="line-clamp-1 text-primary font-plus-jakarta font-medium text-[14px] leading-[20px] tracking-[-0.35px]">
          {title}
        </p>
        <p className="text-secondary font-plus-jakarta font-normal text-[13px] leading-[19.5px] tracking-normal">
          ${price} • {rating} ({reviews.length && reviews.length})
        </p>
      </div>

      <Button
        name="ad to cart"
        customStyles="opacity-0 group-hover:opacity-100 transition-all duration-300 xl:group-hover:flex w-max absolute top-0 right-0 lg:top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
        icon={<CartIcon />}
      />
    </div>
  );
};

export default ProductCard;
