import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    <div className="container sm:mx-auto px-6 py-8 flex justify-between items-center">
      <Link href="">
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="Logo"
          className="w-20 md:w-24"
        />
      </Link>
      <div
        className={`${
          toggle
            ? "flex flex-col md:flex-row gap-5 md:gap-14 bg-white/50 backdrop-blur-lg fixed inset-0 justify-center items-center animate__animated animate__bounceInDown z-10"
            : "hidden md:flex flex-col md:flex-row md:gap-14 "
        }`}
      >
        <Link href="">About Us</Link>
        <Link href="">What We Do</Link>
        <Link href="">Our Work</Link>
        <Link href="">Blog</Link>
        <Link href="">Say hi</Link>
        <HiOutlineXMark
          className="text-xl cursor-pointer block md:hidden"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <HiBars3CenterLeft
        className="text-xl cursor-pointer block md:hidden"
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
};

export default Header;
