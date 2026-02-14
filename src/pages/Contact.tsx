import { useState } from "react";
import { ExternalLink, MapPin, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const venueDetails = [
  {
    id: "haldi-sangeet",
    title: "Haldi and Sangeet",
    venue: "Hyatt Regency, Lucknow",
    mapsLink: "https://maps.app.goo.gl/iQDvGH96L1TvodCi8",
  },
  {
    id: "wedding-reception",
    title: "Wedding & Reception",
    venue: "Regalia Greens",
    mapsLink: "https://maps.app.goo.gl/MxuzszK53iN7N8Fg6",
  },
];

const importantContacts = [
  {
    id: "anup",
    name: "Anup Agarwal",
    phone: "+919415018365",
  },
  {
    id: "anuradha",
    name: "Anuradha Agarwal",
    phone: "+919415312027",
  },
  {
    id: "vibhav",
    name: "Vibhav Agarwal",
    phone: "+919415299800",
  },
];

type QuickCallKey = "bride" | "groom";

const quickCallContacts: {
  key: QuickCallKey;
  title: string;
  pronoun: "her" | "him";
  phone: string;
}[] = [
  {
    key: "bride",
    title: "Bride's Phone Number",
    pronoun: "her",
    phone: "+917355735020",
  },
  {
    key: "groom",
    title: "Groom's Phone Number",
    pronoun: "him",
    phone: "+918605038384",
  },
];

const Contact = () => {
  const [activePrompt, setActivePrompt] = useState<QuickCallKey | null>(null);
  const [revealedNumbers, setRevealedNumbers] = useState<Record<QuickCallKey, boolean>>({
    bride: false,
    groom: false,
  });

  const handleRevealNumber = (key: QuickCallKey) => {
    setRevealedNumbers((prev) => ({ ...prev, [key]: true }));
    setActivePrompt(null);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-red-950">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-rose-200">
                Wedding Essentials
              </p>
              <h1 className="font-serif text-3xl font-medium text-white sm:text-4xl md:text-5xl">
                Important Information
              </h1>
              <p className="mt-4 text-rose-100/90">
                Save these venues and contact numbers for smooth event travel and coordination.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
              {venueDetails.map((venue) => (
                <article
                  key={venue.id}
                  className="rounded-2xl border border-rose-300/20 bg-white/95 p-6 shadow-md"
                >
                  <div className="mb-4 flex items-start gap-3">
                    <div className="rounded-full bg-rose-100 p-2">
                      <MapPin className="h-5 w-5 text-red-900" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl text-red-950">{venue.title}</h2>
                      <p className="mt-1 text-sm text-red-900/80">{venue.venue}</p>
                    </div>
                  </div>

                  <a
                    href={venue.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-red-900/20 bg-white px-4 py-2 text-sm font-medium text-red-900 transition-colors hover:bg-rose-50"
                  >
                    Open in Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-rose-300/20 bg-white/95 p-6 shadow-md md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-full bg-rose-100 p-2">
                  <Phone className="h-5 w-5 text-red-900" />
                </div>
                <h2 className="font-serif text-2xl text-red-950">Important Phone Numbers</h2>
              </div>

              <div className="grid gap-3">
                {importantContacts.map((contact) => (
                  <a
                    key={contact.id}
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-between rounded-lg border border-red-900/15 bg-white px-4 py-3 transition-colors hover:bg-rose-50"
                  >
                    <span className="text-sm font-medium text-red-950 md:text-base">{contact.name}</span>
                    <span className="text-sm font-semibold text-red-900 md:text-base">{contact.phone}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-2">
              {quickCallContacts.map((contact) => {
                const isPromptOpen = activePrompt === contact.key;
                const isNumberRevealed = revealedNumbers[contact.key];

                return (
                  <article
                    key={contact.key}
                    className="rounded-2xl border border-rose-300/25 bg-white/95 p-5 text-left shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setActivePrompt(contact.key)}
                      className="w-full text-left"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-900/60">
                        Quick Call
                      </p>
                      <h3 className="mt-1 font-serif text-xl text-red-950">{contact.title}</h3>
                      {!isPromptOpen && !isNumberRevealed && (
                        <p className="mt-2 text-sm text-red-900/75">
                          Tap to request access to this number.
                        </p>
                      )}
                    </button>

                    {isPromptOpen && !isNumberRevealed && (
                      <div className="mt-4 rounded-lg border border-red-900/15 bg-rose-50 p-4">
                        <p className="text-sm text-red-950">
                          {contact.title.startsWith("Bride")
                            ? "Bride is probably pretty busy right now."
                            : "Groom is probably pretty busy right now."}{" "}
                          Sure you wanna call {contact.pronoun}?
                        </p>
                        <div className="mt-3 flex gap-2">
                          <button
                            type="button"
                            onClick={() => handleRevealNumber(contact.key)}
                            className="rounded-md bg-red-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white"
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            onClick={() => setActivePrompt(null)}
                            className="rounded-md border border-red-900/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-red-900"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    )}

                    {isNumberRevealed && (
                      <a
                        href={`tel:${contact.phone}`}
                        className="mt-4 inline-flex items-center gap-2 rounded-md border border-red-900/20 bg-white px-4 py-2 text-sm font-semibold text-red-900 transition-colors hover:bg-rose-50"
                      >
                        <Phone className="h-4 w-4" />
                        {contact.phone}
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
