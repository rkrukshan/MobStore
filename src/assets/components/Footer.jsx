import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <section className="pt-8 lg:pt-11" id="footer">
      <footer className="p-4 lg:p-5 bg-slate-900">
        <div className="p-4 lg:p-5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-3 w-full">
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <p className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl uppercase">
              Mob
              <span className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-blue-700">
                Store
              </span>
            </p>
            <p className="text-white text-justify lg:text-left font-light py-4 lg:py-5 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              beatae corporis quasi labore ipsum inventore.
            </p>
          </div>

          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <ul className="p-3">
              <li className="text-white py-2 lg:py-3 text-sm sm:text-base">Home</li>
              <li className="text-white py-2 lg:py-3 text-sm sm:text-base">About</li>
              <li className="text-white py-2 lg:py-3 text-sm sm:text-base">Product</li>
              <li className="text-white py-2 lg:py-3 text-sm sm:text-base">Service</li>
              <li className="text-white py-2 lg:py-3 text-sm sm:text-base">Contact-Us</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <ul className="flex gap-3 justify-center lg:justify-start">
              <li className="text-white text-2xl sm:text-3xl lg:text-4xl">
                <TiSocialLinkedin />
              </li>
              <li className="text-white text-2xl sm:text-3xl lg:text-4xl">
                <FaGithub />
              </li>
              <li className="text-white text-2xl sm:text-3xl lg:text-4xl">
                <TiSocialFacebook />
              </li>
              <li className="text-white text-2xl sm:text-3xl lg:text-4xl">
                <FaWhatsapp />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <hr className="w-full bg-white" />
          <p className="text-white text-center font-bold py-3 text-sm sm:text-base">
            All rights reserved @Rukmanghan 2025
          </p>
        </div>
      </footer>
    </section>
  );
}