export default function Service() {
  return (
    <section className="py-11" id="servi">
      <h3 className="text-5xl font-bold text-center pb-11">services</h3>
      <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="p-5 rounded-xl mx-auto hover:shadow-3xl hover:scale-110 bg-white">
          <div className="rounded-full mx-auto">
            <img
              src="image/service/1.png"
              alt="Mobile Repair"
              className="w-36 h-36 mx-auto"
            />
          </div>
          <h3 className="text-2xl font bold text-center py-5">
            Mobile Repairs and Servicing
          </h3>
          <p className="font-light text-justify">
            Mobile stores offer repair services for common device issues,
            including screen repairs, battery replacements, water damage fixes,
            and internal component replacements like cameras and buttons. They
            also provide software updates and system reinstallations to improve
            performance and resolve bugs.
          </p>
        </div>

        <div className="p-5 rounded-xl mx-auto hover:shadow-3xl hover:scale-110 bg-white">
          <div className="rounded-full mx-auto">
            <img
              src="image/service/2.png"
              alt="Mobile Repair"
              className="w-36 h-36 mx-auto"
            />
          </div>
          <h3 className="text-2xl font bold text-center py-5">
            Technical Support
          </h3>
          <p className="font-light text-justify">
            Mobile stores offer technical support to help customers with
            troubleshooting, device setup, software issues, configurations, and
            new features. They provide guidance on problems like slow
            performance, connectivity issues, and mobile app questions.
          </p>
        </div>

        <div className="p-5 rounded-xl mx-auto hover:shadow-3xl hover:scale-110 bg-white">
          <div className="rounded-full mx-auto">
            <img
              src="image/service/4.png"
              alt="Mobile Repair"
              className="w-36 h-36 mx-auto"
            />
          </div>
          <h3 className="text-2xl font bold text-center py-5">
            Backup and Transfer
          </h3>
          <p className="font-light text-justify">
            Mobile stores assist with data backup and transfer, including
            contacts, photos, and apps, especially during device upgrades or
            troubleshooting. They also help set up cloud backup services like
            Google Drive or iCloud for seamless data storage.
          </p>
        </div>
        <div className="p-5 rounded-xl mx-auto hover:shadow-3xl hover:scale-110 bg-white">
          <div className="rounded-full mx-auto">
            <img
              src="image/service/3.png"
              alt="Mobile Repair"
              className="w-36 h-36 mx-auto"
            />
          </div>
          <h3 className="text-2xl font bold text-center py-5">
            Device Customization
          </h3>
          <p className="font-light text-justify">
            Mobile stores offer device customization services, including
            engraving, custom phone cases, and unique skins, allowing customers
            to personalize their devices and reflect their individual style.
          </p>
        </div>
      </div>
    </section>
  );
}
