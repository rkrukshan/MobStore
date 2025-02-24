import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <section className="pt-11" id="footer">
      <footer className="  p-5 bg-slate-900">
        <div className="  p-5 mx-auto grid grid-cols-1 lg:grid-cols-3  gap-3 w-full">
          <div className="w-1/3">
            <p className="text-white font-bold text-4xl uppercase">
              Mob
              <span className="font-bold text-4xl uppercase text-blue-700">
                Store
              </span>
            </p>
            <p className="text-white text-justify font-light py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              beatae corporis quasi labore ipsum inventore.
            </p>
          </div>

          <div className="w-1/3">
            <ul className="p-3">
              <li className="text-white py-3">Home</li>
              <li className="text-white py-3">About</li>
              <li className="text-white py-3">Product</li>
              <li className="text-white py-3">Service</li>
              <li className="text-white py-3">Contact-Us</li>
            </ul>
          </div>

          <div className="w-1/3">
            <ul className="flex gap-3">
              <li className="text-white text-4xl">
                <TiSocialLinkedin />
              </li>
              <li className="text-white text-4xl">
                <FaGithub />
              </li>
              <li className="text-white text-4xl">
                <TiSocialFacebook />
              </li>

              <li className="text-white text-4xl">
                <FaWhatsapp />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <hr className="w-full bg-white" />
          <p className="text-white text-center font-bold py-3">
            All rights reserved @Rukmanghan 2025
          </p>
        </div>
      </footer>
    </section>
  );
}
