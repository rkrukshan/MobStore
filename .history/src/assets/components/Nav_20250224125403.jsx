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
    <section className="py-11">
      <div className="container flex items-center justify-between mx-auto">
        <div>
          <p className="font-bold text-4xl uppercase">
            Mob
            <span className="font-bold text-4xl uppercase text-blue-700">
              Store
            </span>
          </p>
        </div>
        <button id="btnmenu" className="text-3xl mx-auto lg:hidden" onClick={toggleBtn}>
            <GiHamburgerMenu />
          </button>
        <div>
          <ul className="hidden lg:block lg:flex gap-11">
            <li className="uppercase font-bold hover:border-b-2 border-blue-400">
              Home
              link
            </li>
            <li className="uppercase font-bold hover:border-b-2 border-blue-400">
              About
            </li>
            <li className="uppercase font-bold hover:border-b-2 border-blue-400">
              Service
            </li>
            <li className="uppercase font-bold hover:border-b-2 border-blue-400">
              Product
            </li>
            <li className="uppercase font-bold hover:border-b-2 border-blue-400">
              Contact-Us
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-1">
          <img
            src="/image/1.png"
            alt="login"
            className="rounded-full w-16 h-16"
          />
          <IoMdArrowDropdown />
        </div>

        
      </div>
    </section>
  );
}
