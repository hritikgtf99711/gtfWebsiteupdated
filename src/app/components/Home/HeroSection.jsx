"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Mousewheel,
  Pagination,
  FreeMode,
  Virtual,
  Keyboard,
} from "swiper/modules";
import { createPortal } from "react-dom";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import SparkleBackground from "../SparkleBackground";
import { HERO_DATA } from "./hero/heroData";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { robotoCondensed } from "@/app/utils/font";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [swiperReady, setSwiperReady] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);
  const [activeIndexes, setActiveIndexes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const swiperInstance = useRef(null);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const mediaRefs = useRef([]);
  const modalRef = useRef(null);
  const sectionRef = useRef(null);
  const introPinRef = useRef(null);


  // SCROLLSMOOTHER + SCROLLTRIGGER PIN SETUP
  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end:"bottom top",
      pin: true,
      // anticipatePin: 1,
      markers:true,
      // scroller: "#smooth-wrapper",
      // onEnter: () => {
      //   if (!videoRef.current) return;

      //   videoRef.current.style.display = "block";
      //   videoRef.current.muted = true;
      //   videoRef.current.playsInline = true;
      //   videoRef.current.play?.().catch(() => {});
      // },
    });

    // introPinRef.current = trigger;

    // return () => {
    //   trigger.kill();
    //   introPinRef.current = null;
    // };
  }, []);



  return (
    <section
      className={`relative hero_section pt-[300px]`}
    >


        

        <div ref={sectionRef} >
            <div className="relative top-0 left-0 w-full z-[9999]">
              <video
                ref={videoRef}
                src="/assets/home/hero/main_video.mp4"
                className="w-full h-full object-cover transition-opacity duration-500"
                playsInline
                muted
              />
              <button
                className="absolute right-[100px] bottom-[50px] text-white uppercase tracking-[1px] text-[14px]"
              >
                Skip Video
              </button>
            </div>

        </div>

    </section>
  );
};

export default HeroSection;