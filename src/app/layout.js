"use client";
import { createPortal } from "react-dom"; // Import createPortal
import SparkleBackground from "./components/SparkleBackground";
import "./globals.css";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import { oswald } from "./utils/font";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidemenu from "./components/Sidemenu/Sidemenu";
export default function RootLayout({ children }) {
  const location = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <html lang="en" className={oswald.variable}>
      <body className="overflow-x-hidden ">
        <div id="smooth-wrapper">
      <div id="smooth-content">
        {mounted && <SparkleBackground />}
        </div>
        </div>

        <div>
          {location == "/" && <Header />} {children}
          <Footer />
        </div>
        {/* <Sidemenu/> */}
      </body>
    </html>
  );
}
