import heroImg from "@/assets/hero-machine.jpg";

const HeroSection = () => (
  <section className="py-16 md:py-24 bg-cotton-pink-light">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Robot-made cotton candy in{" "}
            <span className="text-primary">Bozeman, Montana</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Big Sky Amusements brings a fully automated Sweet Robo cotton candy
            machine to Gallatin Crossing Mall – bright colors, fun shapes, zero
            hassle.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#location"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Visit us at the mall
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Book for an event
            </a>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Thousands of cotton candies served to kids and kids-at-heart.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Sweet Robo cotton candy vending machine in a modern mall"
            className="rounded-2xl shadow-xl max-w-full w-full md:max-w-md animate-float"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
