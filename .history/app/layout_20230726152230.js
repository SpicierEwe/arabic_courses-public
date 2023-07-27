import { VideoPlayerProvider } from "@/Context/global_context_provider";
import "./globals.css";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/nav_bar/nav_bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, showNavbar = true }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VideoPlayerProvider>
          {showNavbar && <NavbarComponent />}
          {children}
        </VideoPlayerProvider>
      </body>
    </html>
  );
}
