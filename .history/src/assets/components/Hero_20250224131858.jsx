export default function Hero() {
  return (
    <section className="py-11" id="hero">
      <div className="container grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <div className="text-center font-bold">
          <p className="w-full text-5xl lg:text-7xl py-28">
            Redefining Mobility, Empowering Possibilities.
          </p>
          <p className="w-full text-justify lg:text-justify font-bold">
            Welcome to our mobile store, where innovation meets affordability.
            We offer the latest smartphones, tablets, and accessories to keep
            you connected and empowered. Our mission is to deliver high-quality
            products at unbeatable prices, ensuring you experience cutting-edge
            technology without breaking the bank. Whether are upgrading to a new
            device, looking for smart gadgets, or need expert advice, our
            friendly team is here to assist you. We prioritize customer
            satisfaction, reliability, and seamless service. Explore our wide
            range of mobile solutions designed to match your lifestyle and
            needs. Stay connected, stay ahead—discover the future of mobile
            technology with us today!
          </p>
        </div>
        <div className="w-full mx-auto pl-56 py-16 mt-9">
          <img
            src="/image/4.png"
            alt="mobile"
            className=" animate-pulse lg:animate-bounce mt-11"
          />
        </div>

        <div className="mx-auto lg:flex gap-3 px-1">
          <button className="rounded-2xl mr-3 lg:rounded-2xl p-3 text-white bg-blue-500 font-bold">
            Learn More
          </button>
          <button className="rounded-2xl mr-3 lg:rounded-2xl p-3 text-white bg-slate-500 font-bold">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
