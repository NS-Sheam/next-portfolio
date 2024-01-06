import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { GlovalContextProvider } from "./Provider/GlovalContext";
import myimg from "../../public/skill-icon/css-3.png";
import "aos/dist/aos.css";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Nazmus Sakib",
  description: "Welcome to the sky of Nazmus Sakib",
  image: myimg,
  url: "https://nazmus-sakib.me/",
  type: "website",
  siteName: "Nazmus Sakib",
  facebook: "https://www.facebook.com/nazmus.sakib.sheam/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} max-w-screen-2xl mx-auto`}>
        <GlovalContextProvider>{children}</GlovalContextProvider>
      </body>
    </html>
  );
}
