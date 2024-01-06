import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { GlovalContextProvider } from "./Provider/GlovalContext";

import "aos/dist/aos.css";
import { generateMetaDatas } from "@/components/utils";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = await generateMetaDatas();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} max-w-screen-2xl mx-auto`}>
        <GlovalContextProvider>{children}</GlovalContextProvider>
      </body>
    </html>
  );
}
