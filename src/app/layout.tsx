import { Inter } from "next/font/google";
import "./globals.css";
import PayPalProvider from "@/components/PayPalProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PayPalProvider>
          {children}
          <Toaster position="bottom-right" />
        </PayPalProvider>
      </body>
    </html>
  );
}
