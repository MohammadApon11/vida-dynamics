import React from "react";
import overlay from "../../assets/lading-page/circle-overly.png";
import Image from "next/image";
import man from "../../assets/lading-page/man.png";
import BigSectionWrapper from "@/components/wrapper's/BigSectionWrapper";
import PrimaryBtn from "@/components/btn's/PrimaryBtn";

const Completion = () => {
  return (
    <div className="bg-white py-[50px]">
      <BigSectionWrapper>
        <div className="flex justify-between relative">
          <div className="relative bg-cover w-[60%]">
            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-90 bg-cover bg-center z-10 w-[1200px] -left-[5%] -top-[35%] "
              style={{ backgroundImage: `url(${overlay.src})` }}
            ></div>

            {/* Content Image */}
            <Image
              className="w-[850px] z-30"
              src={man}
              width={1000}
              height={500}
            />
          </div>

          <div className="w-[40%] mt-[30px] text-primary">
            <h6 className="text-[24px] text-[#1daf2b]">Our Mission</h6>
            <h1 className="text-[48px] mt-[36px] font-bold">
              From Inception to Completion
            </h1>
            <p className="mt-[40px] mb-[30px] w-[620px] text-[20px] font-medium text-secondary">
              At Vida Projects, our goal goes beyond just offering tools, it's
              about creating a world where construction project management is
              intuitive, streamlined, and aligned with the unique challenges of
              the industry. We're dedicated to empowering teams, enhancing
              collaboration, and ensuring that every project becomes a success
              story.
            </p>
            <PrimaryBtn to={"login"}>Start Work</PrimaryBtn>
          </div>
        </div>
      </BigSectionWrapper>
    </div>
  );
};

export default Completion;
