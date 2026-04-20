import dynamic from "next/dynamic";

export const LAYOUTS = {
  oldschool: dynamic(
    () => import("@/components/oldschool-theme/OldSchoolLayout"),
  ),
  modern: dynamic(() => import("@/components/modern-theme/ModernLayout")),
};
