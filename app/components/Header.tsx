import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header
      className="flex items-center 
    justify-between 
    space-x-2 font-bold 
    px-10 py-5"
    >
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            width={50}
            height={50}
            alt={"logo"}
            src="https://www.okta.com/sites/default/files/Dev_Logo-02_White_Large.png"
          />
        </Link>
        <h1>DEVSQUAD</h1>
      </div>
      <div>
        <Link
          href={"/"}
          className="px-5 py-3 
            text-sm md:text-base
             bg-gray-900
              text-[#F7AB0A] 
              flex items-center 
              rounded-full text-center"
        >
          Contact DEVSQUAD if you want to build something.
        </Link>
      </div>
    </header>
  );
}

export default Header;
