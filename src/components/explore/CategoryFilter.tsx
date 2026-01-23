import { Button } from "@/components/ui/button";
import { categories, type PlaceCategory } from "@/data/places";

interface CategoryFilterProps {
  activeCategory: PlaceCategory | "all";
  onCategoryChange: (category: PlaceCategory | "all") => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={activeCategory === category.value ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.value)}
          className="min-w-[80px]"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
