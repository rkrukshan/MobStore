export default function Contact() {
  return (
    <section className="py-8 lg:py-11 px-4" id="contact">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center py-6 lg:py-11">Contact Us</h3>
      <div className="container p-4 lg:p-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5">
        <div className="w-full lg:w-1/2 mx-auto flex justify-center">
          <img
            src="/image/contact.png"
            alt="Contact"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 mx-auto">
          <form action="" className="mx-auto w-full max-w-md">
            <div className="py-4 lg:py-6">
              <label htmlFor="name" className="block text-sm sm:text-base">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-b-2 border-blue-600 bg-transparent w-full p-2 text-sm sm:text-base"
              />
            </div>
            <div className="py-4 lg:py-6">
              <label htmlFor="email" className="block text-sm sm:text-base">Mail</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-b-2 border-blue-600 bg-transparent w-full p-2 text-sm sm:text-base"
              />
            </div>
            <div className="py-4 lg:py-6">
              <label htmlFor="query" className="block text-sm sm:text-base">Query</label>
              <textarea
                name="query"
                id="query"
                cols={10}
                rows={4}
                className="border-b-2 border-blue-600 bg-transparent w-full p-2 text-sm sm:text-base"
              />
            </div>
            <button className="bg-blue-700 text-white rounded-2xl p-3 w-full sm:w-auto text-sm sm:text-base">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}