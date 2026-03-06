const VisitSection = () => (
  <section id="visit" className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Visit Us
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
        Find us inside Gallatin Crossing Mall, right off Huffine Lane in
        Bozeman, Montana. Look for the pink and blue glow — you can't miss it!
      </p>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-foreground mb-1">Address</h3>
            <p className="text-muted-foreground text-sm">
              Gallatin Crossing Mall<br />
              2825 W Main St, Bozeman, MT 59718
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Hours</h3>
            <p className="text-muted-foreground text-sm">
              Monday – Saturday: 10 AM – 9 PM<br />
              Sunday: 11 AM – 6 PM
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Parking</h3>
            <p className="text-muted-foreground text-sm">
              Free parking available in the Gallatin Crossing lot.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Big Sky Amusements location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.4!2d-111.06!3d45.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5345444c4ba8813d%3A0x63c78cfcb6fa469a!2sGallatin%20Valley%20Mall!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default VisitSection;
