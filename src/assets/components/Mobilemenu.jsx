export default function Mobilemenu() {
  return (
    <div
      id="mobilemenu"
      className="hidden w-full sm:w-3/4 md:w-1/2 mx-auto bg-gray-200 px-4 sm:px-8 lg:px-25 py-6 sm:py-8 lg:py-11 rounded-2xl justify-end lg:hidden mt-4">
      <ul className="grid grid-cols-1 gap-3 text-lg sm:text-xl lg:text-2xl text-center w-full">
        <li className="uppercase font-bold hover:border-b-2 border-blue-400 py-2">
          <a href="#hero">Home</a>
        </li>
        <li className="uppercase font-bold hover:border-b-2 border-blue-400 py-2">
          <a href="#banner">About Us</a>
        </li>
        <li className="uppercase font-bold hover:border-b-2 border-blue-400 py-2">
          <a href="#service">Services</a>
        </li>
        <li className="uppercase font-bold hover:border-b-2 border-blue-400 py-2">
          <a href="#toplist">Products</a>
        </li>
        <li className="uppercase font-bold hover:border-b-2 border-blue-400 py-2">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}