
import HeaderOne from "../components/HeaderOne";
import FooterAreaOne from "../components/FooterAreaOne";
import { Inter } from "next/font/google";
import '../app/globals.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IberAuto - Avtomobil Hissələri",
  description:
    "IberAuto ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body className={inter.className}>
        <HeaderOne />
        <main>{children}</main>
        <FooterAreaOne />
      </body>
    </html>
  );
}
