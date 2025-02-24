export default function Mobilemenu() {
  return (
    <div
      id="mobilemenu"
      className="hidden w-1/2 mx-auto bg-gray-200 px-25 py-11 rounded-2xl justify-end lg:hidden">
      <ul className="grid grid-cols-1 gap-3 text-2xl text-center w-1/2 mx-auto ">
        <li className="uppercase font-bold hover:border-b-2 border-blue-400">
          <a href="#hero">Home</a>
        </li>
        <li className="uppercase font-bold hover:border-b-2 border-blue-400">
          <a href="#banner">About Us</a>
        </li>
        <li className="uppercase font-bold hover:border-b-2 border-blue-400">
          <a href="#service">Services</a>
        </li>
        <li className="uppercase font-bold hover:border-b-2 border-blue-400">
          <a href="#toplist">Products</a>
        </li>
        <li className="uppercase font-bold hover:border-b-2 border-blue-400">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}
