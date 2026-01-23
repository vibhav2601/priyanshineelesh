import { Mail, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="font-serif text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-muted-foreground">
              Have questions or want to reach out? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Alternative Contact Info */}
          <div className="mx-auto mt-12 max-w-md text-center">
            <p className="text-sm text-muted-foreground">
              Or reach us directly:
            </p>
            <div className="mt-4 flex flex-col items-center gap-3">
              <a
                href="mailto:wedding@example.com"
                className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                wedding@example.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
