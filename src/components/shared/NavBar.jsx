import React from "react";
import SectionWrapper from "../wrapper's/SectionWrapper";
import Image from "next/image";
import logo from "../../assets/lading-page/logo.svg";
import { navData } from "@/data/navData";
import Link from "next/link";
import PrimaryBtn from "../btn's/PrimaryBtn";

const NavBar = () => {
  return (
    <SectionWrapper>
      <div className="flex justify-between w-full py-[20px]">
        <Image src={logo} width={200} height={50} />
        <ul className="text-white font-semibold flex items-center gap-[40px]">
          {navData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex items-center gap-[30px]">
          <PrimaryBtn to={"login"} bg={false}>Login</PrimaryBtn>
          <PrimaryBtn to={"register"}>Register</PrimaryBtn>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NavBar;
