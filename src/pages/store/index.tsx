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
