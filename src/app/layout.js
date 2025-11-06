// app/layout.js
"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother,ScrollTrigger );

export default function RootLayout({ children }) {
  useEffect(() => {

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      normalizeScroll:true
    });

    
    // Refresh on resize
    
  }, []);

  return (
    <html lang="en">
      <body>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}