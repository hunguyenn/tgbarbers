import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BarberGallery = () => {
  const { name } = useParams<{ name: string }>();
  const displayName = name?.replace(/-/g, " ") || "";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex-1 px-4 py-8">
        {/* Back Button */}
        <Link
          to="/choose-barber"
          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-body">Back</span>
        </Link>

        {/* Content */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h1 className="font-heading text-3xl font-bold capitalize tracking-wider text-foreground md:text-4xl">
            {displayName}
          </h1>
          <div className="mx-auto mt-2 h-1 w-16 bg-primary" />

          <p className="mt-8 text-muted-foreground">
            Gallery coming soon...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BarberGallery;
