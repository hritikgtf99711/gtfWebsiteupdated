
"use client";
import SparkleBackground from "./components/SparkleBackground";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import { oswald } from "./utils/font";
import MainLoader from "./components/Loader/Index";
import { useEffect } from "react";
// import Sidemenu from "./components/Sidemenu/Sidemenu";
import "./globals.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function RootLayout({ children }) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
  
      // Let ScrollTrigger work with ScrollSmoother
      ScrollTrigger.scrollerProxy("#smooth-wrapper", {
        scrollTop(value) {
          if (arguments.length) {
            ScrollSmoother.get().scrollTop(value);
          }
          return ScrollSmoother.get().scrollTop();
        },
        // getBoundingClientRect() {
        //   return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        // },
        // pinType: "transform",
      });
  
      // Create smoother
      if (!ScrollSmoother.get()) {
        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2,
          effects: true,
          smoothTouch: 0.1,
          
        });
      }
  
      // Refresh on resize
      const refresh = () => ScrollTrigger.refresh();
  window.addEventListener("resize", refresh);
  
      return () => {
        window.removeEventListener("resize", refresh);
    ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, []);

  return (
    <html lang="en" className={oswald.variable}>
      <body className="overflow-x-hidden ">
        <MainLoader />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* <SparkleBackground /> */}

            <div>
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </div>

        {/* <Sidemenu/> */}
      </body>
    </html>
  );
}
