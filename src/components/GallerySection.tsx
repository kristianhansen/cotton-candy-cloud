import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Robot arm spinning pink cotton candy" },
  { src: gallery2, alt: "Child watching blue cotton candy being made" },
  { src: gallery3, alt: "Fluffy pink and blue cotton candy" },
  { src: gallery4, alt: "Modern cotton candy vending machine" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28 bg-cotton-pink-light">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        See the Magic
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
        A glimpse into the sweetest show at the mall.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-2xl">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
