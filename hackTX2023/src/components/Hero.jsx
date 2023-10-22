import React, { useEffect, useRef } from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.classList.add("fade-in");
    }
  }, []);

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <div className="connect font-poppins font-semibold ss:text-[68px] text-[52px] text-secondary ss:leading-[100.8px] leading-[75px] w-full overflow-hidden">
              <span className="block h-full animate-spin_words">
                Generation
              </span>
              <span className="block h-full animate-spin_words">Wave</span>
              <span className="block h-full animate-spin_words">Evolution</span>
              <span className="block h-full animate-spin_words">Phase</span>
              <span className="block h-full animate-spin_words">
                Generation
              </span>
            </div>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          of Mentalcare.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Revolutionize how you monitor emotions, understand patterns, and
          promote self-awareness, all while ensuring utmost privacy and security
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          ref={imageRef}
          src={robot}
          alt="billing"
          className="w-[90%] h-[90%] relative z-[5] mr-20"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
