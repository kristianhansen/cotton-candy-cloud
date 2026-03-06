import gallery1 from "@/assets/gallery-cotton-candy.jpg";
import gallery2 from "@/assets/gallery-kid-yellow.jpg";
import gallery3 from "@/assets/gallery-full-machine.jpg";
import gallery4 from "@/assets/gallery-kid-pink.jpg";

const images = [
  { src: gallery1, alt: "Colorful cotton candy from the machine" },
  { src: gallery2, alt: "Kid enjoying yellow-green cotton candy" },
  { src: gallery3, alt: "Sweet Robo cotton candy machine with neon signage" },
  { src: gallery4, alt: "Child holding fresh pink cotton candy" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28 bg-cotton-pink-light">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        See the magic
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
        A peek at the machine, the designs it creates, and the happy customers
        who enjoy it.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <figure key={i} className="overflow-hidden rounded-2xl group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <figcaption className="text-xs text-muted-foreground text-center py-2">
              {img.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
