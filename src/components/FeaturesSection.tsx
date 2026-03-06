import { Bot, Palette, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Robot cotton candy vending",
    description:
      "Our Sweet Robo machine spins fluffy cotton candy 100% automatically – no staff required, just press, pay, and watch the show.",
  },
  {
    icon: Palette,
    title: "Fun shapes & colors",
    description:
      "Choose from multiple whimsical shapes and up to six bright colors for an eye-catching treat people love to photograph.",
  },
  {
    icon: Users,
    title: "Perfect for family venues",
    description:
      "Ideal for malls, cinemas, family fun centers, and events looking for a low-maintenance attraction that delights all ages.",
  },
];

const FeaturesSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
        What we do
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-cotton-blue-light rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground">
              <f.icon size={28} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
