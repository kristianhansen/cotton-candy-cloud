import heroImg from "@/assets/hero-robot.jpg";

const HeroSection = () => (
  <section className="py-16 md:py-24 bg-cotton-pink-light">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Robot-Made Cotton Candy,{" "}
            <span className="text-primary">Pure Magic</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Watch a robot spin fresh cotton candy right before your eyes at
            Gallatin Crossing Mall in Bozeman, Montana. Fun, futuristic, and
            absolutely delicious.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#visit"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Find Us
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Robot cotton candy vending machine in a modern mall"
            className="rounded-2xl shadow-xl max-w-full w-full md:max-w-md animate-float"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
