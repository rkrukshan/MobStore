export default function Toplist() {
  const toplist = [
    {
      image: "/image/phones/1.png",
      rating: "⭐⭐⭐⭐⭐",
      price: "Rs 150000.00",
      brand: "Samsung S24 Ultra",
    },
    {
      image: "/image/phones/2.png",
      rating: "⭐⭐⭐⭐⭐",
      price: "Rs 175000.00",
      brand: "Iphone 16",
    },
    {
      image: "/image/phones/3.png",
      rating: "⭐⭐⭐⭐⭐⭐",
      price: "Rs 150000.00",
      brand: "Google Pixel 9",
    },
    {
      image: "/image/phones/4.png",
      rating: "⭐⭐⭐⭐",
      price: "Rs 85000.00",
      brand: "One Plus 12",
    },
    {
      image: "/image/phones/5.png",
      rating: "⭐⭐⭐⭐⭐",
      price: "Rs 35000.00",
      brand: "Samsung A05",
    },
    {
      image: "/image/phones/6.png",
      rating: "⭐⭐⭐⭐⭐",
      price: "Rs 33000.00",
      brand: "Samsung M11",
    },
    {
      image: "/image/phones/7.png",
      rating: "⭐⭐⭐⭐⭐",
      price: "Rs 125000.00",
      brand: "Iphone X",
    },
    {
      image: "/image/phones/8.png",
      rating: "⭐⭐⭐⭐⭐",
      price: "Rs 100000.00",
      brand: "Iphone 8",
    },
  ];

  return (
    <section className="py-8 lg:py-11" id="toplist">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Top Brands</h3>
        <p className="text-center font-light py-4 lg:py-5 text-lg sm:text-xl lg:text-2xl">
          Our Top selling Brands
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {toplist.map((list, index) => (
            <div
              key={index}
              className="bg-slate-100 p-4 lg:p-5 mx-auto rounded-xl mt-6 lg:mt-9 hover:scale-105 lg:hover:scale-150 hover:shadow-2xl transition-all delay-75 w-full max-w-xs">
              <img
                src={list.image}
                alt={list.brand}
                className="h-32 sm:h-36 lg:h-46 w-24 sm:w-28 lg:w-36 mx-auto"
              />
              <p className="py-1 text-center">{list.rating}</p>
              <p className="font-bold py-1 text-center">{list.brand}</p>
              <p className="font-bold py-1 text-center">{list.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}