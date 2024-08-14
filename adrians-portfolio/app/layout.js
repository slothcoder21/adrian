import { Inter } from "next/font/google";
import "./globals.css";
import ScreenTransition from "@/components/transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adrian's Portfolio",
  description: "What's going on in my life...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScreenTransition>
          {children}
        </ScreenTransition>
      </body>
    </html>
  );
}
