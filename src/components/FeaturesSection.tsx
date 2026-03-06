import { Bot, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Robot Crafted",
    description:
      "Our automated robot spins cotton candy with precision and flair — a mesmerizing show every time.",
  },
  {
    icon: Sparkles,
    title: "Fun Flavors",
    description:
      "Choose from classic pink vanilla, blue raspberry, and rotating seasonal specials.",
  },
  {
    icon: Clock,
    title: "Ready in Seconds",
    description:
      "Fresh cotton candy spun on the spot in under 60 seconds. No waiting, just sweetness.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        What We Do
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
        A next-level cotton candy experience powered by robotics and a love for
        sweets.
      </p>
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
