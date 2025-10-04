export default function Banner() {
  return (
    <section className="py-8 lg:py-11" id="banner">
      <div className="container p-4 lg:p-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-3 items-center">
        <img src="/image/5.png" alt="" className="w-full max-w-md lg:max-w-full h-auto mx-auto" />

        <div className="text-center lg:text-left">
          <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left pb-6 lg:pb-9">
            Get into Mobilize
          </h3>
          <p className="text-lg sm:text-xl font-bold text-justify lg:text-left">
            Get the latest smartphones, accessories, and top deals at MobStore!
            Enjoy discounts, free accessories, flexible payments, and trade-in
            offers. Visit us for expert advice and quick repairs—upgrade today!
          </p>
        </div>
      </div>
    </section>
  );
}