export default function Banner() {
  return (
    <section className="py-11" id="banner">
      <div className="container p-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
        <img src="/image/5.png" alt="" className="w-auto h-auto" />

        <div>
          <h3 className="font-bold text-5xl text-center pb-9">
            Get into Mobilize
          </h3>
          <p className="text-xl font bold text-justify">
            Get the latest smartphones, accessories, and top deals at MobStore!
            Enjoy discounts, free accessories, flexible payments, and trade-in
            offers. Visit us for expert advice and quick repairs—upgrade today!
          </p>
        </div>
      </div>
    </section>
  );
}
