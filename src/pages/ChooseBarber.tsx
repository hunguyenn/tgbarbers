import { Link } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import barber images
import michaelImg from "@/assets/barbers/michael.jpg";
import joeImg from "@/assets/barbers/joe.jpg";
import alexImg from "@/assets/barbers/alex.webp";
import joseImg from "@/assets/barbers/jose.jpg";
import jonathanImg from "@/assets/barbers/jonathan.jpg";
import nicholasImg from "@/assets/barbers/nicholas.jpg";
import juanImg from "@/assets/barbers/juan.jpeg";
import allanImg from "@/assets/barbers/allan.jpg";
import eddyImg from "@/assets/barbers/eddy.jpeg";
import ivanImg from "@/assets/barbers/ivan.jpg";

type Barber = {
  name: string;
  image?: string;
};

const firstFloorBarbers: Barber[] = [
  { name: "Michael", image: michaelImg },
  { name: "Joe", image: joeImg },
  { name: "Jea'n" }, // No photo on Vagaro
  { name: "Alex", image: alexImg },
  { name: "Jose", image: joseImg },
  { name: "Jonathan", image: jonathanImg },
];

const secondFloorBarbers: Barber[] = [
  { name: "Nicholas", image: nicholasImg },
  { name: "Juan", image: juanImg },
  { name: "Allan", image: allanImg },
  { name: "Eddy", image: eddyImg },
  { name: "Ivan", image: ivanImg },
];

const BarberThumbnail = ({ name, image }: Barber) => {
  const vagaroUrl = "https://www.vagaro.com/tglpmb";
  
  return (
    <a
      href={vagaroUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
    >
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-primary bg-card transition-colors group-hover:border-primary/80">
        {image ? (
          <img
            src={image}
            alt={`${name} - Barber at The Groomsmen`}
            className="h-full w-full object-cover"
          />
        ) : (
          <User className="h-10 w-10 text-muted-foreground" />
        )}
      </div>
      <span className="font-body text-sm font-medium text-foreground">{name}</span>
    </a>
  );
};

const ChooseBarber = () => {
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
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold tracking-wider text-foreground md:text-4xl">
            Choose Your Barber
          </h1>
          <div className="mx-auto mt-2 h-1 w-16 bg-primary" />
        </div>

        {/* First Floor */}
        <div className="mt-12">
          <h2 className="text-center font-heading text-xl font-semibold uppercase tracking-wider text-foreground">
            First Floor
          </h2>
          <div className="mx-auto mt-1 h-0.5 w-12 bg-primary/50" />
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {firstFloorBarbers.map((barber) => (
              <BarberThumbnail key={barber.name} {...barber} />
            ))}
          </div>
        </div>

        {/* Second Floor */}
        <div className="mt-12">
          <h2 className="text-center font-heading text-xl font-semibold uppercase tracking-wider text-foreground">
            Second Floor
          </h2>
          <div className="mx-auto mt-1 h-0.5 w-12 bg-primary/50" />
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {secondFloorBarbers.map((barber) => (
              <BarberThumbnail key={barber.name} {...barber} />
            ))}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseBarber;