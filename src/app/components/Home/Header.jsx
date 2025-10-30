import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const openHamenu = () => {};

  return (
    <>
      <header className="py-[20px] md:px-[25px] px-[15px] flex justify-between items-center pt-[12px] w-full ">
        <img src="/assets/gtf-logo.png" className="h-[50px]" alt="logo" />
        <RxHamburgerMenu className="text-[26px]" onClick={() => openHamenu()} />
      </header>
 
    </>
  );
};

export default Header;