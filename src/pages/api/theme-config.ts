import type { NextApiRequest, NextApiResponse } from "next";
import type { ThemeConfig } from "@/types/shared";

export default function handler(
 _: NextApiRequest,
 res: NextApiResponse<ThemeConfig>,
) {
 const themes: ThemeConfig[] = [
  {
   name: "OldSchool White",
   colors: {
    background: "#FFF9E8",
   },
  },
  {
   name: "Modern Blue",
   colors: {
    background: "#041109",
   },
  },
 ];

 const randomIndex = Math.floor(Math.random() * themes.length);
 const selectedTheme = themes[randomIndex];

 res.status(200).json(selectedTheme);
}
