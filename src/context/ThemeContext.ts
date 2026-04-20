import { createContext, useContext } from "react";
import type { ThemeConfig } from "@/types/shared";

type ThemeContextType = {
  theme?: ThemeConfig;
};

export const ThemeContext = createContext<ThemeContextType>({});

export const useTheme = () => useContext(ThemeContext);
