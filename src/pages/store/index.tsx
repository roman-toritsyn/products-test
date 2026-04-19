import type { GetServerSideProps } from "next";
import Head from "next/head";
import type { ThemeConfig } from "@/types/shared";

type Props = {
 theme: ThemeConfig;
};

export default function StorePage({ theme }: Props) {
 return (
  <>
   <Head>
    <title>{theme.name}</title>
    <meta name="description" content={`Welcome to ${theme.name}`} />
   </Head>
   <main className="bg-background min-h-screen flex items-center justify-center">
    <h1>{theme.name}</h1>
   </main>
  </>
 );
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const getServerSideProps: GetServerSideProps<Props> = async () => {
 const res = await fetch(`${BASE_URL}/api/theme-config`);

 if (!res.ok) {
  return {
   props: {
    theme: {
     name: "Fallback Theme",
     colors: {
      background: "#FFFFFF",
     },
    },
   },
  };
 }

 const theme = await res.json();

 return {
  props: {
   theme,
  },
 };
};
