import { Camera, Upload, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Update this link to your actual Google Photos shared album
const GOOGLE_PHOTOS_LINK = "https://photos.google.com";

const PhotoUploadCTA = () => {
  return (
    <Card className="mx-auto max-w-lg border-2 border-dashed border-primary/30 bg-secondary/20">
      <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Camera className="h-8 w-8 text-primary" />
        </div>

        {/* Heading */}
        <div>
          <h3 className="font-serif text-xl font-medium text-foreground">
            Share Your Photos
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Captured a special moment? We'd love to see it! Upload your photos 
            and videos to our shared album.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="gap-2"
          asChild
        >
          <a
            href={GOOGLE_PHOTOS_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Upload className="h-4 w-4" />
            Upload Wedding Photos
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>

        {/* Helper text */}
        <p className="text-xs text-muted-foreground">
          Opens Google Photos in a new tab. You may need to sign in with your 
          Google account to upload.
        </p>
      </CardContent>
    </Card>
  );
};

export default PhotoUploadCTA;
