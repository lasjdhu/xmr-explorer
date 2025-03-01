import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "@/styles/global.css";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Monero Blockchain Explorer",
  description: "Explore the Monero blockchain - view blocks, transactions, and addresses with complete privacy.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
