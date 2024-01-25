import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ border = null, to, bg = true, children }) => {
  return (
    <Link href={to}>
      <button className={`${bg ? "btn-primary" : "btn-secondary"}`}>
        {children}
      </button>
    </Link>
  );
};

export default PrimaryBtn;
