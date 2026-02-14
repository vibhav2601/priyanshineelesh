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
    title: "First Food Trail",
    description: "Our story started over street-food plans and endless taste tests around the city.",
    position: { xPct: 14, yPct: 15 },
  },
  {
    id: "left_mid_road_trip_car",
    label: "Left middle road trip car",
    title: "Road Trip Energy",
    description: "We kept choosing little drives, loud playlists, and spontaneous chai stops together.",
    position: { xPct: 10.5, yPct: 34 },
  },
  {
    id: "left_lower_noodle_bowl",
    label: "Left lower noodle bowl",
    title: "Comfort Meal Dates",
    description: "This reminds us of cozy food dates that turned ordinary days into our favorites.",
    position: { xPct: 11, yPct: 53 },
  },
  {
    id: "left_bottom_flower_bouquet",
    label: "Left bottom flower bouquet",
    title: "Gentle Gestures",
    description: "A symbol of small thoughtful moments that made our bond stronger with time.",
    position: { xPct: 11.5, yPct: 70.5 },
  },
  {
    id: "right_top_taco_plate",
    label: "Right top taco plate",
    title: "Trying New Flavors",
    description: "From local classics to new cuisines, we built memories one plate at a time.",
    position: { xPct: 86.5, yPct: 15.5 },
  },
  {
    id: "right_upper_mid_beach_trip",
    label: "Right upper middle beach trip",
    title: "Travel Dreams",
    description: "Every trip plan became our shared promise to explore more of life together.",
    position: { xPct: 89.5, yPct: 34 },
  },
  {
    id: "right_mid_digital_love",
    label: "Right middle digital love",
    title: "Always Connected",
    description: "No matter how busy life got, we kept showing up for each other every single day.",
    position: { xPct: 88.5, yPct: 53.5 },
  },
  {
    id: "right_bottom_auto_rickshaw",
    label: "Right bottom auto rickshaw",
    title: "City Rides, Shared Laughs",
    description: "The auto rides, random detours, and everyday chaos became part of our love story.",
    position: { xPct: 86.5, yPct: 70.5 },
  },
];

const OurStorySection = () => {
  const [selectedSymbolId, setSelectedSymbolId] = useState<string | null>(null);

  const activeSymbol = useMemo(() => {
    if (!selectedSymbolId) return null;
    return storySymbols.find((symbol) => symbol.id === selectedSymbolId) ?? null;
  }, [selectedSymbolId]);

  const mobileZoomScale = 2;
  const zoomScale = activeSymbol ? mobileZoomScale : 1;
  const mobileTranslateX = activeSymbol ? (50 - activeSymbol.position.xPct) * mobileZoomScale : 0;
  const mobileTranslateY = activeSymbol ? (50 - activeSymbol.position.yPct) * mobileZoomScale : 0;

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
            Our Story
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tap a side symbol to zoom into that chapter of our story.
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
                    onClick={() =>
                      setSelectedSymbolId((prev) => (prev === symbol.id ? null : symbol.id))
                    }
                    className={`absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all md:h-8 md:w-8 ${
                      isActive
                        ? "border-primary bg-primary/45 shadow-md shadow-primary/40"
                        : "border-foreground/70 bg-background/65"
                    }`}
                    style={{ left: `${symbol.position.xPct}%`, top: `${symbol.position.yPct}%` }}
                  />
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
