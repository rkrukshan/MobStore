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
    <section className="py-11" id="toplist">
      <div className="container mx-auto">
        <h3 className="text-5xl font-bold text-center">Top Brands</h3>
        <p className="text-center font-light py-5 text-2xl">
          Our Top selling Brands
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {toplist.map((list, index) => (
            <div
              key={index}
              className="bg-slate-100 p-5 mx-auto rounded-xl mt-9 hover:scale-150 hover:shadow-2xl transition-all delay-75">
              <img
                src={list.image}
                alt={list.brand}
                className="h-46 w-36 mx-auto"
              />
              <p className=" py-1">{list.rating}</p>
              <p className="font-bold py-1">{list.brand}</p>
              <p className="font-bold py-1">{list.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
