import { Nunito } from "next/font/google";
import "./globals.css";

import SearchModal from "./components/models/searchmodel";
import Navbar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/models/RegisterModal";
import LoginrModal from "./components/models/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
export const metadata = {
  title: "Rec-Rent",
  description: "Peer to peer recreational rentals!",
};

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <LoginrModal />
          <Navbar currentUser={currentUser}/> 
          <SearchModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
