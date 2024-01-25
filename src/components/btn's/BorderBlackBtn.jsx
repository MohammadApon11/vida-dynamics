import Link from "next/link";
import React from "react";

const BorderBlackBtn = ({ border = null, to, children }) => {
  return (
    <Link href={to}>
      <button
        className={`text-secondary font-medium px-[40px] rounded-[30px] py-[12px] border-black border`}
      >
        {children}
      </button>
    </Link>
  );
};

export default BorderBlackBtn;
