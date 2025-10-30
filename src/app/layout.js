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
import LoaderOverlay from "./components/LoaderOverlay";

const FIRST_VISIT_KEY = "gtf_loader_shown";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  //has this tab seen the loader before?
  const firstVisitInThisTab = ()=>{
    if(typeof window === 'undefined') return true;
    return !sessionStorage.getItem(FIRST_VISIT_KEY);
  }

  const isHome = pathname === "/";

  // We only consider the loader on the very first visit in this tab.
  const [showLoader, setShowLoader] = useState(firstVisitInThisTab);
  const [windowLoaded, setWindowLoaded] = useState(!firstVisitInThisTab ? true : false);
  const [heroReady, setHeroReady] = useState(!firstVisitInThisTab ? true : false);

  //mark window loaded
  useEffect(()=>{
    if(!firstVisitInThisTab) return;

    const onLoad = ()=>setWindowLoaded(true);
    if(document.readyState === 'complete') setWindowLoaded(true);
    else window.addEventListener('load', onLoad);
    return ()=>window.removeEventListener('load', onLoad);
  }, [firstVisitInThisTab]);

  // Listen for HERO_READY only on first visit AND only if we landed on "/"
  useEffect(()=>{
    if(!firstVisitInThisTab) return;
    if(!isHome) return;

    return onLoaderEvent(LOADER_EVENTS.HERO_READY, ()=>setHeroReady(true));
  }, [firstVisitInThisTab, isHome]);

  // Decide when to hide the loader (only once)
  useEffect(() => {
    if (!firstVisitInThisTab) return;
    const ready = isHome ? (windowLoaded && heroReady) : windowLoaded;
    if (ready && showLoader) {
      setShowLoader(false);
      try { sessionStorage.setItem(FIRST_VISIT_KEY, "1"); } catch {}
      // tell hero it can animate/play now
      sendLoaderEvent(LOADER_EVENTS.PLAY_NOW);
    }
  }, [firstVisitInThisTab, isHome, windowLoaded, heroReady, showLoader]);

  // Optional: lock scroll while loader is up
  useEffect(() => {
    if (showLoader) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [showLoader]);


  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <html lang="en" className={oswald.variable}>
      <body className="overflow-x-hidden ">
      <LoaderOverlay visible={showLoader} />

        <div id="smooth-wrapper">
          <div id="smooth-content">
          <SparkleBackground />
          </div>
        </div>

        <div>
          {isHome && <Header />}
          {children}
          <Footer />
        </div>
        {/* <Sidemenu/> */}
      </body>
    </html>
  );
}
