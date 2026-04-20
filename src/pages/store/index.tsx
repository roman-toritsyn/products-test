import type { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext } from "react";
import { LAYOUTS } from "@/components/layouts";
import { ThemeContext } from "@/context/ThemeContext";
import { productsRepository } from "@/lib/products/products.repository";
import type { TProduct } from "@/lib/products/products.types";

type TStorePageProps = {
  products: TProduct[];
  error?: string;
};

export default function StorePage({ products, error }: TStorePageProps) {
  const { theme } = useContext(ThemeContext);

  const Layout = theme?.key ? LAYOUTS[theme.key] : LAYOUTS.oldschool;

  return (
    <>
      <Head>
        <title>{theme?.name}</title>
        <meta name="description" content={`Welcome to ${theme?.name}`} />
      </Head>

      <main className="min-h-screen bg-background">
        {error ? (
          <div className="text-center">
            <h1 className="text-2xl text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600">{error}</p>
          </div>
        ) : (
          <Layout products={products} />
        )}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const productsData = await productsRepository.getProducts(12);

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
