import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Place, PlaceCategory } from "@/data/places";

const categoryColors: Record<PlaceCategory, string> = {
  food: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  culture: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  shopping: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  attractions: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
};

interface PlaceCardProps {
  place: Place;
}

const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <Card className="group flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-serif text-lg font-medium leading-tight">
            {place.title}
          </CardTitle>
          <Badge 
            variant="secondary" 
            className={`shrink-0 text-xs capitalize ${categoryColors[place.category]}`}
          >
            {place.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <CardDescription className="text-sm leading-relaxed">
          {place.description}
        </CardDescription>
        {place.mapsLink && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full gap-2"
          >
            <a
              href={place.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-3 w-3" />
              View on Maps
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PlaceCard;
