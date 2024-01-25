import React from "react";
import bg from "../../assets/lading-page/aboutBg.png";
import SectionGap from "@/components/gap's/SectionGap";
import Image from "next/image";
import earth1 from "../../assets/lading-page/earth1.svg";
import earth2 from "../../assets/lading-page/earth2.svg";
import earth3 from "../../assets/lading-page/earth3.svg";
import earth4 from "../../assets/lading-page/earth4.svg";
import earth5 from "../../assets/lading-page/earth5.svg";
import aboutuslogo from "../../assets/lading-page/about-us-logo.png";
import BigSectionWrapper from "@/components/wrapper's/BigSectionWrapper";
import PrimaryBtn from "@/components/btn's/PrimaryBtn";

const About = () => {
  return (
    <div className="relative">
      <SectionGap />
      <Image
        className="absolute right-0 top-0"
        src={bg}
        width={1000}
        height={700}
      />
      <BigSectionWrapper>
        <div className="grid grid-cols-2 gap-x-[250px]">
          <div>
            <div className="relative w-[600px] h-[600px]">
              <div className="border border-dashed w-[250px] h-[250px] absolute top-[50%] left-[50%] rounded-[50%]">
                <div className="bg-greeny absolute top-[20%] -left-[1%] w-[20px] h-[20px] rounded-[50%]"></div>
                <div className="bg-[#246BFD] absolute top-[2%] left-[90%] w-[10px] h-[10px] rounded-[50%]"></div>
                <div className="bg-[#E9203B] absolute -top-[13%] left-[97%] w-[30px] h-[30px] rounded-[50%]"></div>
                <div className="bg-[#246BFD] absolute -bottom-[40%] left-[90%] w-[10px] h-[10px] rounded-[50%]"></div>
                <div className="bg-[#500043] absolute -bottom-[43%] left-[99%] w-[20px] h-[20px] rounded-[50%]"></div>
                <Image
                  className="orbit2 absolute -bottom-[33%] left-[49%]"
                  src={earth1}
                  width={80}
                  height={80}
                />
                <Image
                  className="orbit2 absolute -top-[55%] left-[50%]"
                  src={earth2}
                  width={80}
                  height={80}
                />
                <Image
                  className="orbit2 absolute -bottom-[5%] left-[100%]"
                  src={earth3}
                  width={80}
                  height={80}
                />
                <Image
                  className="orbit2 absolute bottom-[5%] -left-[40%]"
                  src={earth4}
                  width={80}
                  height={80}
                />
                <Image
                  className="orbit2 absolute bottom-[63%] -left-[29%]"
                  src={earth5}
                  width={80}
                  height={80}
                />
              </div>
              <div className="orbit border border-dashed w-[339px] h-[339px] absolute top-[43%] left-[43%] rounded-[50%]"></div>
              <div className="orbit border border-dashed w-[437px] h-[437px] absolute top-[35%] left-[35%] rounded-[50%]"></div>
              <div className="orbit border border-dashed w-[595px] h-[595px] absolute top-[22%] left-[22%] rounded-[50%]"></div>
              <div className="absolute top-[54%] left-[54%]">
                <div className="w-[200px] h-[200px] relative">
                  <svg
                    fill="none"
                    height="200"
                    viewBox="0 0 251 251"
                    width="200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="125.5"
                      cy="125.5"
                      fill="url(#paint0_linear_12951_197280)"
                      opacity="0.2"
                      r="125.5"
                    ></circle>{" "}
                    <defs>
                      <linearGradient
                        id="paint0_linear_12951_197280"
                        gradientUnits="userSpaceOnUse"
                        x1="125.5"
                        x2="125.5"
                        y1="0"
                        y2="251"
                      >
                        <stop stop-color="#256CFD"></stop>{" "}
                        <stop
                          offset="1"
                          stopColor="#D6E2FF"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="proton-icon">
                    <svg
                      fill="none"
                      height="48"
                      viewBox="0 0 94 77"
                      width="60"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M26.2891 75.3981C28.0027 76.41 30.0145 77 32.2055 77H55.5018C76.7648 77 94.0018 59.763 94.0018 38.5C94.0018 17.237 76.7648 0 55.5018 0H50.6259L26.2891 75.3981Z"
                        fill="#FFBA49"
                        fillRule="evenodd"
                      ></path>{" "}
                      <path
                        clipRule="evenodd"
                        d="M36.0487 0.0195312H0L18.3972 54.8112L36.0487 0.0195312Z"
                        fill="white"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[150px]">
            <h6 className="text-greeny text-[22px] font-medium">About Us</h6>
            <Image
              className="mt-[24px]"
              src={aboutuslogo}
              width={500}
              height={50}
            />
            <p className="text-[22px] text-white mt-[24px] w-[550px] pb-[40px]">
              Our software company specializes in the development of
              cutting-edge web application software solutions. Our primary focus
              at present is an innovative software project designed specifically
              for the construction industry, called "VidaProjects." This
              comprehensive project management tool streamlines various aspects
              of construction business operations, enhancing efficiency and
              productivity for all stakeholders involved.
            </p>
            <PrimaryBtn to={"login"}>Explore</PrimaryBtn>
          </div>
        </div>
      </BigSectionWrapper>
    </div>
  );
};

export default About;
