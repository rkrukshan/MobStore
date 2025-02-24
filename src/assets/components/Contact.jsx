export default function Contact() {
  return (
    <section className="py-11" id="contact">
      <h3 className="text-5xl font-bold text-center py-11">Contact Us</h3>
      <div className="container p-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-1/2 mx-auto">
          <img
            src="/image/contact.png"
            alt="Contact"
            className="w-full h-full"
          />
        </div>
        <div className="w-1/2 mx-auto">
          <form action="" className="mx-auto">
            <div className="py-9">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-b-2 border-blue-600 bg-transparent w-full"
              />
            </div>
            <div className="py-9">
              <label htmlFor="">Mail</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-b-2 border-blue-600 bg-transparent w-full"
              />
            </div>
            <div className="py-9">
              <label htmlFor="">Query</label>
              <textarea
                name="name"
                id="name"
                cols={10}
                rows={5}
                className="border-b-2 border-blue-600 bg-transparent w-full"
              />
            </div>
            <button className="bg-blue-700 text-white rounded-2xl p-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
