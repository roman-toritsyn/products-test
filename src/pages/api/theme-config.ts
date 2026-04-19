import type { NextApiRequest, NextApiResponse } from "next";
import { MODERN_THEME, OLD_SCHOOL_THEME } from "@/constants/themes";
import type { ThemeConfig } from "@/types/shared";

export default function handler(
 _: NextApiRequest,
 res: NextApiResponse<ThemeConfig>,
) {
 const themes: ThemeConfig[] = [OLD_SCHOOL_THEME, MODERN_THEME];

 const randomIndex = Math.floor(Math.random() * themes.length);
 const selectedTheme = themes[randomIndex];

 res.status(200).json(selectedTheme);
}
