import { useMemo, useState } from "react";
import storyImage from "@/resources/logo.png";

type StorySymbol = {
  id: string;
  label: string;
  title: string;
  description: string;
  position: { xPct: number; yPct: number };
};

const storySymbols: StorySymbol[] = [
  {
    id: "left_top_food_platter",
    label: "Left top food platter",
    title: "Momo",
    description: "Momos and the mirchi chutney best represents Priyanshi. Fiery, soft, and everyone's favorite all at once. ",
    position: { xPct: 14, yPct: 15 },
  },
  {
    id: "left_mid_road_trip_car",
    label: "Left middle road trip car",
    title: "Jet, Set, Go",
    description: "If you know us, you know we love doing road trips and exploring new places. Professional passenger princess and race car driver in training.",
    position: { xPct: 10.5, yPct: 34 },
  },
  {
    id: "left_lower_noodle_bowl",
    label: "Left lower noodle bowl",
    title: "Ramen in Coventry",
    description: "The date where it all began.",
    position: { xPct: 11, yPct: 53 },
  },
  {
    id: "left_bottom_flower_bouquet",
    label: "Left bottom flower bouquet",
    title: "It all started with a rose",
    description: "Neelesh loooves pampering Priyanshi with roses - it's valentine's every day for them",
    position: { xPct: 11.5, yPct: 70.5 },
  },
  {
    id: "right_top_taco_plate",
    label: "Right top taco plate",
    title: "Dosa",
    description: "Neelesh's go to comfort food. Just like a dosa, Neelesh has a tough exterior, but a real pookie on the inside. ",
    position: { xPct: 86.5, yPct: 15.5 },
  },
  {
    id: "right_upper_mid_beach_trip",
    label: "Right upper middle beach trip",
    title: "First international trip",
    description: "The first international trip we took together. Albania and its beaches were a dream come true.",
    position: { xPct: 89.5, yPct: 34 },
  },
  {
    id: "right_mid_digital_love",
    label: "Right middle digital love",
    title: "Inivisible string",
    description: "Every day of long distance was so 😔 but no matter how busy life got, we kept showing up for each other every single day.",
    position: { xPct: 88.5, yPct: 53.5 },
  },
  {
    id: "right_bottom_auto_rickshaw",
    label: "Right bottom auto rickshaw",
    title: "Bangalore autos",
    description: "In all the auto rides, random detours, and everyday chaos, we always found love for each other. We plan on moving in together in a small cozy apartment in Bangalore after we get married. Always welcome as long as you bring good matcha or whisky ;)",
    position: { xPct: 86.5, yPct: 70.5 },
  },
];

const OurStorySection = () => {
  const [selectedSymbolId, setSelectedSymbolId] = useState<string | null>(null);
  const [readSymbolIds, setReadSymbolIds] = useState<Set<string>>(new Set());

  const activeSymbol = useMemo(() => {
    if (!selectedSymbolId) return null;
    return storySymbols.find((symbol) => symbol.id === selectedSymbolId) ?? null;
  }, [selectedSymbolId]);

  const mobileZoomScale = 2;
  const zoomScale = activeSymbol ? mobileZoomScale : 1;
  const mobileTranslateX = activeSymbol ? (50 - activeSymbol.position.xPct) * mobileZoomScale : 0;
  const mobileTranslateY = activeSymbol ? (50 - activeSymbol.position.yPct) * mobileZoomScale : 0;
  const isZoomed = Boolean(activeSymbol);

  const handleSectionClick = () => {
    if (isZoomed) {
      setSelectedSymbolId(null);
    }
  };

  const handleSymbolClick = (symbolId: string) => {
    setSelectedSymbolId((prev) => (prev === symbolId ? null : symbolId));
    setReadSymbolIds((prev) => {
      if (prev.has(symbolId)) return prev;
      const next = new Set(prev);
      next.add(symbolId);
      return next;
    });
  };

  return (
    <section className="bg-background py-16 md:py-24" onClick={handleSectionClick}>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
            Our Story
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tap a side symbol to zoom in. Tap anywhere to zoom out.
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div
              className="relative transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${mobileTranslateX}%, ${mobileTranslateY}%) scale(${zoomScale})`,
              }}
            >
              <img src={storyImage} alt="Priyanshi and Neelesh crest with side story symbols" className="w-full" />

              {storySymbols.map((symbol) => {
                const isActive = selectedSymbolId === symbol.id;
                return (
                  <button
                    key={symbol.id}
                    type="button"
                    aria-label={symbol.label}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleSymbolClick(symbol.id);
                    }}
                    onPointerDown={(event) => event.stopPropagation()}
                    className={`absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all md:h-8 md:w-8 ${
                      isActive
                        ? "border-primary bg-primary/45 shadow-md shadow-primary/40"
                        : "border-foreground/70 bg-background/65"
                    }`}
                    style={{ left: `${symbol.position.xPct}%`, top: `${symbol.position.yPct}%` }}
                  >
                    {!readSymbolIds.has(symbol.id) && (
                      <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-700/80" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-700 ring-1 ring-white/80" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {activeSymbol ? (
            <div className="mt-4 rounded-xl border border-border bg-card p-4 text-left shadow-sm md:mt-5 md:p-5">
              <p className="text-base font-semibold text-foreground">{activeSymbol.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base">
                {activeSymbol.description}
              </p>
              <button
                type="button"
                onClick={() => setSelectedSymbolId(null)}
                onPointerDown={(event) => event.stopPropagation()}
                className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-primary"
              >
                Close story
              </button>
            </div>
          ) : (
            <p className="mt-4 text-center text-sm text-muted-foreground md:mt-5">
              Tap any side symbol to zoom in and read that part of our story.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
