import { Link } from "react-router-dom";
import logo from "@/assets/logo-new.jpeg";
import storefrontNight from "@/assets/storefront-night.jpeg";
import barberAction from "@/assets/barber-action.jpeg";
import { MapPin, Phone, Star, Clock, Navigation, CreditCard, Globe, Baby, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Full Navigation Menu */}
      <nav className="fixed left-0 right-0 top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <div className="hidden sm:flex items-center gap-1">
              <Link
                to="/services"
                className="rounded-md px-3 py-2 font-heading text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Services
              </Link>
            </div>
          </div>
          {/* Mobile nav links */}
          <div className="flex sm:hidden items-center gap-2 mr-2">
            <Link
              to="/services"
              className="rounded-md px-2 py-1 font-heading text-xs font-medium tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              Services
            </Link>
          </div>
          {/* Book Now Button - integrated into nav */}
          <a
            href="https://www.vagaro.com/tglpmb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary px-4 py-2 sm:px-6 sm:py-3 font-heading text-sm sm:text-base font-semibold uppercase tracking-wider text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 rounded-md"
          >
            Book Now
          </a>
        </div>
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-16 sm:h-20" />
      
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4">
        {/* Background overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${storefrontNight})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <img
            src={logo}
            alt="The Groomsmen Barbershop Logo"
            className="fade-in-logo mb-8 h-64 w-64 rounded-full object-cover md:h-80 md:w-80 lg:h-96 lg:w-96"
          />

          <h1 className="fade-in-up font-heading text-4xl font-bold tracking-wider text-foreground md:text-5xl lg:text-6xl">
            THE GROOMSMEN
          </h1>
          <p className="fade-in-up font-heading mt-2 text-lg tracking-widest text-primary md:text-xl">
            BARBERSHOP • EST. 2016
          </p>
          <p className="fade-in-up mt-8 max-w-md font-body text-sm italic text-muted-foreground md:text-base">
            "I think that the most important thing a man can have—besides talent and health—is good grooming."
          </p>
          <p className="fade-in-up mt-2 font-heading text-xs tracking-wider text-primary/70">
            — CARY GRANT
          </p>
        </div>
        
      </section>

      {/* About Section */}
      <section className="relative bg-card px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* Image */}
            <div className="relative">
              <img
                src={barberAction}
                alt="Barber performing a straight razor shave"
                className="h-full w-full rounded-lg object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border-2 border-primary/30 -z-10" />
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Mission
              </h2>
              <div className="mt-2 h-1 w-16 bg-primary" />
              
              <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
                Welcome to The Groomsmen Barbershop, we are a new aged shop with an old school 
                feel, our goal when you sit down for one of our services is to take you back 
                to the golden age of men's grooming. Sit back and enjoy the lost art of real barbering.
              </p>
              
              {/* Rating */}
              <div className="mt-8 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < 5 ? 'fill-primary text-primary' : 'text-muted'}`} 
                    />
                  ))}
                </div>
                <span className="font-body text-foreground">4.6 stars</span>
                <span className="text-muted-foreground">• 49 reviews on Google</span>
              </div>
              
              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <a 
                  href="https://maps.google.com/?q=1617+B+St,+Hayward,+CA+94541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-body">1617 B St, Hayward, CA 94541</span>
                </a>
                
                <a 
                  href="tel:+15103988525"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-body">(510) 398-8525</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-background px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-primary" />
          
          {/* Rating Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Vagaro Reviews */}
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground">Vagaro</p>
              <div className="mt-3 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-6 w-6 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mt-2 font-heading text-3xl font-bold text-foreground">5.0</p>
              <p className="mt-1 font-body text-sm text-muted-foreground">6,467 Reviews</p>
              <a
                href="https://www.vagaro.com/tglpmb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 font-body text-sm text-primary hover:underline"
              >
                See reviews →
              </a>
            </div>

            {/* Google Reviews */}
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground">Google</p>
              <div className="mt-3 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-6 w-6 ${i < 5 ? 'fill-primary text-primary' : 'text-muted'}`}
                  />
                ))}
              </div>
              <p className="mt-2 font-heading text-3xl font-bold text-foreground">4.6</p>
              <p className="mt-1 font-body text-sm text-muted-foreground">49 Reviews</p>
              <a
                href="https://www.google.com/maps/place/The+Groomsmen/@37.6691473,-122.0889749,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 font-body text-sm text-primary hover:underline"
              >
                See reviews →
              </a>
            </div>
          </div>

          {/* Sample Review Quote */}
          <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-card p-6">
            <p className="font-body text-lg italic text-muted-foreground">
              "Best barbershop in Hayward! The attention to detail and the old school vibe makes every visit special. Highly recommend!"
            </p>
          </div>
        </div>
      </section>

      {/* Business Info Section */}
      <section className="bg-card px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Visit Us
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-primary" />
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Business Hours */}
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-xl font-semibold text-foreground">Business Hours</h3>
              </div>
              <div className="mt-4 space-y-2 font-body text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday</span>
                  <span className="text-foreground">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tuesday</span>
                  <span className="text-foreground">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wednesday</span>
                  <span className="text-foreground">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Thursday</span>
                  <span className="text-foreground">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Friday</span>
                  <span className="text-foreground">7:15 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">7:00 AM - 9:00 PM</span>
                </div>
                <p className="mt-4 text-xs italic text-muted-foreground">*Hours may vary</p>
              </div>
            </div>

            {/* Location & Contact */}
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-xl font-semibold text-foreground">Location</h3>
              </div>
              <div className="mt-4 space-y-4">
                <p className="font-body text-foreground">
                  1617 B Street<br />
                  Hayward, CA 94541
                </p>
                <a
                  href="tel:+15103988525"
                  className="flex items-center gap-2 font-body text-muted-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  (510) 398-8525
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1617+B+St,+Hayward,+CA+94541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
              <CreditCard className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">Payment</p>
                <p className="font-body text-xs text-muted-foreground">Cash accepted</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
              <Globe className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">Languages</p>
                <p className="font-body text-xs text-muted-foreground">English, Spanish</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
              <Baby className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">Kid Friendly</p>
                <p className="font-body text-xs text-muted-foreground">Yes, all ages welcome</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
              <AlertCircle className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">Cancellation</p>
                <p className="font-body text-xs text-muted-foreground">3 hours notice required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
