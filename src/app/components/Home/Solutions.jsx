"use client";
import { useState, useRef } from "react";
import Line from "../Line";
import { MdArrowOutward } from "react-icons/md";

const services = [
  "Brand Strategy",
  "Communication",
  "Annual Maintenance of Website",
  "Paid Ads",
  "YouTube Marketing",
  "Social Media Marketing",
  "Creative",
  "Website Design and Development",
  "Search Engine Optimization",
  "Display Marketing",
  "Social Media Optimization",
  "Online Reputation Management Marketing",
];
const Solutions = () => {
  const [data, setData] = useState([
    {
      heading: "Brand Catalyst",
      show: false,
      description:
        "We don't just tell. We weave, launching a refined brand identity across online and offline platforms, leading to improved online presence, enhanced customer engagement, and increased market competitiveness",
    },
    {
      heading: "Great Story Tellers",
      show: true,
      description:
        "We don't just tell. We weave, launching a refined brand identity across online and offline platforms, leading to improved online presence, enhanced customer engagement, and increased market competitiveness",
    },
    {
      heading: "One-stop Solution",
      show: false,
      description:
        "We don't just tell. We weave, launching a refined brand identity across online and offline platforms, leading to improved online presence, enhanced customer engagement, and increased market competitiveness",
    },
  ]);
  const coloredLineRef = useRef(null);

  const handleMouseEnter = (index) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, show: true } : { ...item, show: false }
      )
    );
  };

  return (
    <section className="mix-blend-multiply">
      <div className=" z-[2] relative py-10 after:bg-[#FDE93D] after:content-[''] after:absolute after:inset-0 after:z-[-1]">
        <div className="md:py-[50px] md:px-[25px] px-[15px]">
          <ul>
            {data.map((info, index) => {
              return (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  style={{
                    borderBottom:
                      index === data.length - 1 ? "none" : "6px solid black",
                    opacity: info.show ? 1 : 0.3,
                    transition:
                      "opacity 0.6s ease-in-out, margin-bottom 0.6s ease-in-out, padding-bottom 1.5s ease-in-out",
                  }}
                  className=" cursor-pointer py-[30px]"
                >
                  <p className="2xl:text-[60px] xl:leading-[50px] lg:text-[50px] text-[30px] uppercase font-[600] font-[Oswald]">
                    {info.heading}
                  </p>
                  <div
                    className={`overflow-hidden transition-all duration-[1.5s] ease-in-out   ${
                      info.show
                        ? "max-h-[300px] opacity-100 "
                        : "max-h-0 opacity-0 mb-0 pb-0"
                    }`}
                  >
                    <p className="text-[16px] mt-[15px]   ">
                      {info.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="md:pt-[90px] md:pb-[50px] py-[60px] md:text-start text-center md:px-[35px] px-[15px]">
        <h3 className="uppercase relative md:text-start md:text-start text-center inline-block md:leading-[70px] leading-[normal]">
          <span className="bartino-outline tracking-[2px] lg:text-[60px] 2xl:text-[72px]  md:text-[50px] text-[32px] block">
            the solutions you need
          </span>
          <span className="font-[Oswald] md:pl-[7.5rem] block font-medium xl:text-[60px] 2xl:text-[65px] md:text-[50px] text-[32px]">
            tailored for success.
          </span>
          <Line
            ref={coloredLineRef}
            bgColor="bg-gtf-blue"
            left="left-[48%] lg:left-[61%]"
          />{" "}
        </h3>
        <ul className="border-t-[2px] flex justify-between items-center flex-wrap md:mt-[90px] mt-[25px] pt-[30px] border-dotted border-black">
          {services.map((serv) => {
            return (
              <li
                key={serv}
                className="md:pb-[15px] py-[12px] md:basis-[48%] basis-[100%] flex justify-between border-b-[1px] border-black border-b-bottom border-solid md:mb-[20px] items-center"
              >
                <span className="font-medium uppercase font-[Oswald] md:text-[20px] text-[18px]">
                  {serv}
                </span>
                <span>
                  <MdArrowOutward className="text-[26px] font-[300]" />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Solutions;
