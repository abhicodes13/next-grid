import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex p-10 flex-col bg-[#202020] h-screen items-center gap-10 text-white w-fit">
      <Link href="/" className="">
        Home
      </Link>
      <Link href="/about" className="">
        About
      </Link>
      <Link href="/careers" className="">
        Careers
      </Link>
    </div>
  );
};

export default Nav;
