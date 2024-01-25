"use client";
import BorderBlackBtn from "@/components/btn's/BorderBlackBtn";
import PrimaryBtn from "@/components/btn's/PrimaryBtn";
import ContentGap from "@/components/gap's/ContentGap";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import { featuresData } from "@/data/featuresData";
import Image from "next/image";
import React, { useState } from "react";
import play from "../../assets/lading-page/play.png";

const Features = () => {
  const [activeTitle, setActiveTitle] = useState("Project Management");

  const filteredData = featuresData.find((item) => item.title === activeTitle);
  const { title, icon, image, description, features } = filteredData;
  return (
    <SectionWrapper>
      <h1 className="heading">FEATURES</h1>
      <ContentGap />
      <p className="text-center text-secondary text-[20px] w-[1086px] mx-auto">
        Discover a suite of powerful features designed to streamline your work.
        From Project Management to Time Logging, integrated Calendars to
        detailed Reporting, and seamless Collaboration with integrated Chat.
        Dive deeper below to see how each feature can transform your workflow.
      </p>
      <div className="mt-[30px] flex items-center justify-between gap-[24px]">
        {featuresData.map(
          (item, index) =>
            index < 5 && (
              <div
                onClick={() => setActiveTitle(item?.title)}
                key={index}
                className={`text-center py-[24px] w-full cursor-pointer rounded-[12px] ${
                  activeTitle === item.title ? "bg-[#d6e2ff]" : "bg-white"
                }`}
              >
                <Image
                  className="mx-auto"
                  src={item?.icon.src}
                  width={35}
                  height={40}
                />
                <h5 className="mt-[20px] text-[18px] font-medium">
                  {item?.title}
                </h5>
              </div>
            )
        )}
      </div>
      <div className="mt-[30px] bg-white rounded-[12px] p-[24px] grid grid-cols-2 gap-x-[40px]">
        <div>
          <h1 className="text-[30px] font-semibold">{title}</h1>
          <p className="text-secondary mt-[20px]">{description}</p>
          <ul className="mt-[24px] flex flex-col gap-[12px] justify-center">
            {features.map((item, index) => (
              <li
                className="flex items-center gap-[20px] text-[18px] text-secondary"
                key={index}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    y="5"
                    width="20"
                    height="20"
                    rx="10"
                    fill="#D6E2FF"
                  ></rect>{" "}
                  <rect
                    x="5"
                    y="5"
                    width="20"
                    height="20"
                    rx="10"
                    stroke="#D6E2FF"
                    strokeWidth="2"
                  ></rect>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 13.2003L15.2608 16.8L14.0144 18L12.768 16.8L12.7749 16.7933L11 15.0661L12.2467 13.8661L14.0213 15.5936L17.7536 12L19 13.2003Z"
                    fill="#246BFD"
                  ></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-[30px] flex items-center gap-[24px]">
            <PrimaryBtn to={"login"}>Get Started</PrimaryBtn>
            <BorderBlackBtn
              bg={false}
              border={"black"}
              to={"details/company-management"}
            >
              Get Started
            </BorderBlackBtn>
          </div>
        </div>
        <div className="relative">
          <Image
            className="mt-[25px] rounded-[16px]"
            src={image}
            width={800}
            height={300}
            alt="Features Image"
          />
          <Image className="absolute left-[40%] top-[35%] cursor-pointer" src={play} width={120} height={70} />
        </div>
      </div>
      <div className="mt-[30px] flex items-center justify-between gap-[24px]">
        {featuresData.map(
          (item, index) =>
            index > 4 && (
              <div
                onClick={() => setActiveTitle(item?.title)}
                key={index}
                className={`text-center py-[24px] w-full cursor-pointer rounded-[12px] ${
                  activeTitle === item.title ? "bg-[#d6e2ff]" : "bg-white"
                }`}
              >
                <Image
                  className="mx-auto"
                  src={item?.icon.src}
                  width={35}
                  height={40}
                />
                <h5 className="mt-[20px] text-[18px] font-medium">
                  {item?.title}
                </h5>
              </div>
            )
        )}
      </div>
    </SectionWrapper>
  );
};

export default Features;
