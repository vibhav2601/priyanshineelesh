import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PlaceCard from "@/components/explore/PlaceCard";
import CategoryFilter from "@/components/explore/CategoryFilter";
import { places, type PlaceCategory } from "@/data/places";

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState<PlaceCategory | "all">("all");

  const filteredPlaces = activeCategory === "all"
    ? places
    : places.filter((place) => place.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24 bg-primary-background">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="font-serif text-3xl font-medium text-white sm:text-4xl md:text-5xl">
              Explore Lucknow
            </h1>
            <p className="mt-4 text-white">
              Discover the best of Lucknow — from legendary food spots to 
              historic monuments. Here are our top recommendations for making 
              the most of your visit.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-10">
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Places Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>

          {/* Empty State */}
          {filteredPlaces.length === 0 && (
            <p className="text-center text-secondary-pink">
              No places found in this category.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
