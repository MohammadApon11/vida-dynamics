"use client";
import SectionWrapper from "@/components/wrapper's/SectionWrapper";
import heroImg from "../../assets/lading-page/homeHero.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import desktop1 from "../../assets/lading-page/desktop-slider-1.png";
import desktop2 from "../../assets/lading-page/desktop-slider-2.png";
import desktop3 from "../../assets/lading-page/desktop-slider-3.png";
import desktop4 from "../../assets/lading-page/desktop-slider-4.png";
import desktop5 from "../../assets/lading-page/desktop-slider-5.png";
import phone1 from "../../assets/lading-page/phone-slider-1.png";
import phone2 from "../../assets/lading-page/phone-slider-2.png";
import phone3 from "../../assets/lading-page/phone-slider-3.png";
import phone4 from "../../assets/lading-page/phone-slider-4.png";
import phone5 from "../../assets/lading-page/phone-slider-5.png";
import Image from "next/image";
// import Image2 from 'next/future/image'

const desktopSlider = [desktop1, desktop2, desktop3, desktop4, desktop5];
const phoneSlider = [phone1, phone2, phone3, phone4, phone5];

const HomeHero = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  let slider1 = null;
  let slider2 = null;
  const settings1 = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // cssEase: "linear",
  };
  const settings2 = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // cssEase: "linear",
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[100vh] bg-white"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <SectionWrapper>
        <h3 className="text-center text-[28px] font-bold pt-[20px]">
          Vida Projects Crafting the Future of <br /> Construction Management
        </h3>
        <p className="text-[18px] text-center">
          A Platform Designed for Contractors Seeking to Streamline Project
          Management
        </p>
        <div className="mt-[30px] relative z-20">
          <div className=" bg-white pt-[30px] pb-[40px] px-[30px] w-[900px] overflow-hidden rounded-[25px] h-[690px] shadow-2xl">
            <Slider
              asNavFor={nav2}
              ref={(slider) => (slider1 = slider)}
              {...settings1}
            >
              {desktopSlider.map((item, index) => (
                <Image
                  className="rounded-[25px]"
                  src={item}
                  key={index}
                  alt="desktop Slider"
                  width="700"
                  height="600"
                />
              ))}
            </Slider>
          </div>
          <div className="w-[315px] p-[15px] bg-white border-4 rounded-[25px] absolute right-[18%] -bottom-[10%]">
            <Slider
              asNavFor={nav1}
              ref={(slider) => (slider2 = slider)}
              {...settings2}
            >
              {phoneSlider.map((item, index) => (
                <Image
                  src={item}
                  alt="Phone Slider"
                  key={index}
                  width="400"
                  height="500"
                />
              ))}
            </Slider>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HomeHero;
