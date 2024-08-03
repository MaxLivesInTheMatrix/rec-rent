import { Nunito } from "next/font/google";
import "./globals.css";

import SearchModal from "./components/models/searchmodel";
import Navbar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/models/RegisterModal";

export const metadata = {
  title: "Rec-Rent",
  description: "Peer to peer recreational rentals!",
};

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
          <SearchModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
