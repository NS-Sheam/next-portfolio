import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { GlovalContextProvider } from "./Provider/GlovalContext";

import "aos/dist/aos.css";
import { generateMetaDatas } from "@/components/utils";
import Head from "next/head";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = await generateMetaDatas();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${roboto.className} `}>
        <GlovalContextProvider>{children}</GlovalContextProvider>
      </body>
    </html>
  );
}
