import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Add your Instagram photos here - just import and add to the array
// Example: import photo1 from "@/assets/gallery/photo1.jpg";
const galleryImages = [
  {
    id: 1,
    alt: "Fresh fade haircut",
    placeholder: true,
  },
  {
    id: 2,
    alt: "Classic taper cut",
    placeholder: true,
  },
  {
    id: 3,
    alt: "Beard trim and shape",
    placeholder: true,
  },
  {
    id: 4,
    alt: "Low fade with design",
    placeholder: true,
  },
  {
    id: 5,
    alt: "Slick back style",
    placeholder: true,
  },
  {
    id: 6,
    alt: "Skin fade",
    placeholder: true,
  },
];

const Gallery = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex-1 px-4 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-body">Back</span>
        </Link>

        {/* Content */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold tracking-wider text-foreground md:text-4xl">
              Our Work
            </h1>
            <div className="mx-auto mt-2 h-1 w-16 bg-primary" />
            <p className="mt-4 font-body text-muted-foreground">
              Check out our latest cuts and styles
            </p>
          </div>

          {/* Photo Grid */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg bg-card"
              >
                {image.placeholder ? (
                  <div className="flex h-full w-full items-center justify-center bg-muted">
                    <Instagram className="h-8 w-8 text-muted-foreground/50" />
                  </div>
                ) : (
                  <img
                    src={(image as any).src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Follow CTA */}
          <div className="mt-12 text-center">
            <p className="mb-4 font-body text-muted-foreground">
              See more of our work on Instagram
            </p>
            <Button asChild variant="outline" size="lg" className="gap-2 font-body">
              <a
                href="https://www.instagram.com/the_groomsmen_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                Follow @the_groomsmen_
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
