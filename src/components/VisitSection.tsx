const VisitSection = () => (
  <section id="location" className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Visit us
      </h2>
      <div className="text-center text-muted-foreground mb-14 max-w-lg mx-auto space-y-1">
        <p className="font-medium text-foreground">
          Where: Gallatin Crossing Mall, Bozeman, Montana
        </p>
        <p className="text-sm">
          Find the machine: Inside the mall common area (near [store/landmark – fill in]).
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-foreground mb-1">Hours</h3>
            <p className="text-muted-foreground text-sm">
              Open during regular mall hours.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Hours may vary on holidays – check Gallatin Crossing's schedule.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Big Sky Amusements location at Gallatin Crossing Mall"
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
