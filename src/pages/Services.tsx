import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Service = {
  name: string;
  price: string;
  description: string;
};

const fullServices: Service[] = [
  {
    name: "Basic Haircut",
    price: "$55",
    description: "Basic haircut and line up. No facial hair included. No shear work included.",
  },
  {
    name: "Hair and Face",
    price: "$65",
    description: "Basic haircut and facial grooming; mustache, beard, full shave.",
  },
  {
    name: "Hair and Face w/ Hot Towel",
    price: "$70",
    description: "Basic haircut and facial grooming with hot steam towel applied prior to face shave.",
  },
  {
    name: "Specialty Cut",
    price: "$65+",
    description: "Designs and special requests. Price varies based on difficulty or time spent.",
  },
  {
    name: "Kid's Cut",
    price: "$40",
    description: "Basic simple cut for children 12 years and under. Designs not included.",
  },
  {
    name: "Hair & Face Line Up",
    price: "$35",
    description: "Basic line up of the forehead, neck, sideburns, and beard. Haircut not included.",
  },
  {
    name: "Beard Service",
    price: "$40",
    description: "Beard trim to desired length and/or blended, finished with a razor line. Haircut not included.",
  },
  {
    name: "Beard Service w/ Hair Lineup",
    price: "$45",
    description: "Beard trim with hair lineup around forehead, ears, and neck. Haircut not included.",
  },
];

const addOnServices: Service[] = [
  {
    name: "Eyebrows",
    price: "$5",
    description: "Eyebrows trimmed and shaped with clippers, finished with straight razor.",
  },
  {
    name: "Hair Wash",
    price: "$10",
    description: "Hair shampoo and rinse. Please show up with clean dry hair to avoid this charge.",
  },
  {
    name: "Hot Towel Treatment",
    price: "$5",
    description: "Hot steam towel applied before shave for coarse facial hair or sensitive skin.",
  },
  {
    name: "Black Mask",
    price: "$15",
    description: "Hot towel followed by liquid charcoal mask to remove impurities from pores.",
  },
];

const ServiceCard = ({ name, price, description }: Service) => (
  <div className="rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md">
    <div className="flex items-start justify-between gap-4">
      <h3 className="font-heading text-lg font-semibold text-foreground">{name}</h3>
      <span className="shrink-0 font-heading text-lg font-bold text-primary">{price}</span>
    </div>
    <p className="mt-2 font-body text-sm text-muted-foreground">{description}</p>
  </div>
);

const Services = () => {
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
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold tracking-wider text-foreground md:text-4xl">
              Our Services
            </h1>
            <div className="mx-auto mt-2 h-1 w-16 bg-primary" />
            <p className="mt-4 font-body text-muted-foreground">
              Quality cuts and grooming at The Groomsmen
            </p>
          </div>

          {/* Full Services */}
          <div className="mt-12">
            <h2 className="text-center font-heading text-xl font-semibold uppercase tracking-wider text-foreground">
              Full Services
            </h2>
            <div className="mx-auto mt-1 h-0.5 w-12 bg-primary/50" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {fullServices.map((service) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </div>
          </div>

          {/* Add-On Services */}
          <div className="mt-12">
            <h2 className="text-center font-heading text-xl font-semibold uppercase tracking-wider text-foreground">
              Add-On Services
            </h2>
            <div className="mx-auto mt-1 h-0.5 w-12 bg-primary/50" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {addOnServices.map((service) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="font-body text-sm text-muted-foreground">
              Prices pulled from our Vagaro booking system
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;