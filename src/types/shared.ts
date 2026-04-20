import type { LAYOUTS } from "@/components/layouts";

export type TThemeKey = keyof typeof LAYOUTS;

export type ThemeConfig = {
  key: TThemeKey;
  name: string;
  colors: {
    pageBackground: string;
    primary: string;
    secondary: string;
    accent?: string;
  };
};
