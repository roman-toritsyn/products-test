import "@/styles/globals.css";
import type { AppProps } from "next/app";
import App from "next/app";
import { ThemeContext } from "@/context/ThemeContext";
import { plusJakarta, spaceGrotesk, workSans } from "@/lib/fonts";
import type { ThemeConfig } from "@/types/shared";

export default function MyApp({
  Component,
  pageProps,
}: AppProps & { theme: ThemeConfig }) {
  return (
    <ThemeContext.Provider value={{ theme: pageProps.theme }}>
      <div
        className={`${spaceGrotesk.variable} ${workSans.variable} ${plusJakarta.variable}`}
        style={
          {
            "--pageBackground": pageProps.theme.colors.pageBackground,
            "--primary": pageProps.theme.colors.primary,
            "--secondary": pageProps.theme.colors.secondary,
            "--accent": pageProps.theme.colors.accent,
          } as React.CSSProperties
        }
      >
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${BASE_URL}/api/theme-config`);
  const theme = await res.json();

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      theme,
    },
  };
};
