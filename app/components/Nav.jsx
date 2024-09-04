import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex p-8 justify-center flex-col h-screen bg-[#080f1b] items-center gap-10 text-purple-50 ">
      <Link href="/" className="p-4 bg-slate-800">
        Home
      </Link>
      <Link href="/about" className="p-4 bg-slate-800">
        About
      </Link>
      <Link href="/careers" className="p-3 py-4 bg-slate-800">
        Careers
      </Link>
    </div>
  );
};

export default Nav;
