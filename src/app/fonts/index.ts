import localFont from "next/font/local";

export const goli = localFont({
  src: [
    {
      path: "./goli/GoliVF.ttf",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--font-goli",
  display: "swap",
});

