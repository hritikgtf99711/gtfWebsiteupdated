"use client"
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const openHamenu = () => {};

  return (
    <>
      <header className="py-[25px] md:px-[50px] px-[15px] flex justify-between items-center w-full ">
        <img src="/assets/logo.svg" className="h-[50px]" alt="logo" />
        <RxHamburgerMenu className="text-[26px]" onClick={() => openHamenu()} />
      </header>
 
    </>
  );
};

export default Header;