import type { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { productsRepository } from "@/lib/products/products.repository";
import type { TProduct } from "@/lib/products/products.types";

type TStorePageProps = {
 products: TProduct[];
 error?: string;
};

export default function StorePage({ products, error }: TStorePageProps) {
 const { theme } = useContext(ThemeContext);

 if (error) {
  return (
   <>
    <Head>
     <title>Error | Store</title>
    </Head>
    <main className="bg-background min-h-screen p-10">
     <div className="text-center">
      <h1 className="text-2xl text-red-600 mb-4">Something went wrong</h1>
      <p className="text-gray-600">{error}</p>
     </div>
    </main>
   </>
  );
 }

 return (
  <>
   <Head>
    <title>{theme?.name}</title>
    <meta name="description" content={`Welcome to ${theme?.name}`} />
   </Head>

   <main className="bg-background min-h-screen p-10">
    <h1 className="text-2xl mb-6">{theme?.name}</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {products?.map((p) => (
      <div key={p.id} className="border p-4 rounded">
       <img
        src={p.thumbnail}
        alt={p.title}
        className="w-full h-40 object-cover"
       />
       <h2 className="mt-2 font-bold">{p.title}</h2>
       <p>${p.price}</p>
       <p>reviews: {p.reviews?.length || 0}</p>
       <p>rating: {p.rating}</p>
      </div>
     ))}
    </div>
   </main>
  </>
 );
}

export const getServerSideProps: GetServerSideProps = async () => {
 try {
  const productsData = await productsRepository.getProducts(40);

  return {
   props: {
    products: productsData.products,
   },
  };
 } catch (error) {
  console.error("Failed to fetch products:", error);

  return {
   props: {
    products: [],
    error: "Failed to load products. Please try again later.",
   },
  };
 }
};
