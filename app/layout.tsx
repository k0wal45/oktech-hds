import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Transport HDS i Wynajem Zwyżek - Katowice | Oktech",
  description:
    "Profesjonalny transport HDS oraz wynajem zwyżek w Katowicach i na Śląsku. Zapewniamy kompleksowe usługi, doświadczenie i konkurencyjne ceny. Skontaktuj się z nami!",
  keywords:
    "transport HDS, HDS Katowice, zwyżka Katowice, zwyżka Śląsk, wynajem HDS, wynajem zwyżki, usługi HDS, transport maszyn, transport materiałów budowlanych",
  author: "Lunarisweb.pl - Daniel Kowalski",
  openGraph: {
    title: "Transport HDS i Wynajem Zwyżek - Katowice | Oktech",
    description:
      "Profesjonalny transport HDS oraz wynajem zwyżek w Katowicach i na Śląsku. Zapewniamy kompleksowe usługi, doświadczenie i konkurencyjne ceny. Skontaktuj się z nami!",
    url: "https://hds-zwyzka.pl/",
    type: "website",
    images: [
      {
        url: "https://hds-zwyzka.pl/_next/image?url=%2Fimg%2FPhotos%2Foktech%20(19).jpg&w=828&q=75",
        width: 800,
        height: 600,
        alt: "Transport HDS i Wynajem Zwyżek",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
