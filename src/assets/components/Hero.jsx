export default function Hero() {
  return (
    <section className="py-8 lg:py-11 px-4" id="hero">
      <div className="container grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6 lg:gap-0">
        <div className="text-center lg:text-left">
          <p className="w-full text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl py-8 sm:py-12 lg:py-20 xl:py-28">
            Redefining Mobility, Empowering Possibilities.
          </p>
          <p className="w-full text-justify lg:text-justify font-bold text-sm sm:text-base lg:text-lg">
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
        
        <div className="w-full mx-auto lg:pl-8 xl:pl-56 py-8 lg:py-16 mt-6 lg:mt-9 flex justify-center lg:justify-start">
          <img
            src="/image/4.png"
            alt="mobile"
            className="animate-pulse h-full w-90 lg:animate-bounce max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg"
          />
        </div>

        <div className="mx-auto lg:mx-0 lg:flex gap-3 px-1 mt-6 lg:mt-0">
          <button className="rounded-2xl mr-3 lg:rounded-2xl p-3 text-white bg-blue-500 font-bold text-sm sm:text-base w-full sm:w-auto mb-3 lg:mb-0">
            Learn More
          </button>
          <button className="rounded-2xl mr-3 lg:rounded-2xl p-3 text-white bg-slate-500 font-bold text-sm sm:text-base w-full sm:w-auto">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}