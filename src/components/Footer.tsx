import { Facebook, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4">
        {/* Social Links & Contact */}
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/thegroomsmenx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/the_groomsmen_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          {/* Phone Link */}
          <a
            href="tel:+15103988525"
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5" />
            <span className="font-body">(510) 398-8525</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} The Groomsmen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
