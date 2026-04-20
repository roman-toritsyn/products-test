import Head from "next/head";
import { useTheme } from "@/context/ThemeContext";

export default function NotFoundPage() {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>404 - {theme?.name}</title>
      </Head>

      <div className="bg-background min-h-screen flex items-center justify-center">
        <h1 className="text-primary text-3xl">404 - Not Found</h1>
      </div>
    </>
  );
}
