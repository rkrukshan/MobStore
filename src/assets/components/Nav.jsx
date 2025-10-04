import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Nav() {
  function toggleBtn() {
    const menu = document.getElementById("mobilemenu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  }
  return (
    <section className="py-6 lg:py-11 px-4">
      <div className="container flex items-center justify-between mx-auto">
        <div>
          <a href="#hero">
            <p className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase">
              Mob
              <span className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-blue-700">
                Store
              </span>
            </p>
          </a>
        </div>
        
        <button id="btnmenu" className="text-2xl sm:text-3xl mx-auto lg:hidden" onClick={toggleBtn}>
          <GiHamburgerMenu />
        </button>
        
        <div>
          <ul className="hidden lg:flex gap-6 xl:gap-11">
            <li className="uppercase font-bold hover:border-b-2 border-blue-400 text-sm xl:text-base">
              <a href="#hero">Home</a>
            </li>
            <li className="uppercase font-bold hover:border-b-2 border-blue-400 text-sm xl:text-base">
              <a href="#banner">About Us</a>
            </li>
            <li className="uppercase font-bold hover:border-b-2 border-blue-400 text-sm xl:text-base">
              <a href="#service">Services</a>
            </li>
            <li className="uppercase font-bold hover:border-b-2 border-blue-400 text-sm xl:text-base">
              <a href="#toplist">Products</a>
            </li>
            <li className="uppercase font-bold hover:border-b-2 border-blue-400 text-sm xl:text-base">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-1">
          <img
            src="/image/1.png"
            alt="login"
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
          />
          <IoMdArrowDropdown className="text-lg sm:text-xl" />
        </div>
      </div>
    </section>
  );
}