export type PlaceCategory = "food" | "culture" | "shopping";

export interface Place {
  id: string;
  title: string;
  description: string;
  category: PlaceCategory;
  mapsLink?: string;
}

export const places: Place[] = [
  // Food
  {
    id: "tunday-kebabi",
    title: "Tunday Kebabi",
    description: "Famous for their melt-in-mouth galouti kebabs, a Lucknow culinary icon since 1905.",
    category: "food",
    mapsLink: "https://maps.google.com/?q=Tunday+Kebabi+Lucknow",
  },
  {
    id: "idris-biryani",
    title: "Idris Biryani",
    description: "Legendary Lucknowi biryani with aromatic spices and tender meat.",
    category: "food",
    mapsLink: "https://maps.google.com/?q=Idris+Biryani+Lucknow",
  },
  {
    id: "sharma-tea",
    title: "Sharma Ji Ki Chai",
    description: "Iconic roadside chai stall serving the perfect cup of masala tea.",
    category: "food",
    mapsLink: "https://maps.google.com/?q=Sharma+Tea+Lucknow",
  },
  {
    id: "royal-cafe",
    title: "Royal Cafe",
    description: "Famous for basket chaat and other delicious street food snacks.",
    category: "food",
    mapsLink: "https://maps.google.com/?q=Royal+Cafe+Lucknow",
  },
  
  // Culture
  {
    id: "bara-imambara",
    title: "Bara Imambara",
    description: "Magnificent 18th-century monument with the famous Bhool Bhulaiya maze.",
    category: "culture",
    mapsLink: "https://maps.google.com/?q=Bara+Imambara+Lucknow",
  },
  {
    id: "chhota-imambara",
    title: "Chhota Imambara",
    description: "Beautiful palace of lights with stunning chandeliers and architecture.",
    category: "culture",
    mapsLink: "https://maps.google.com/?q=Chhota+Imambara+Lucknow",
  },
  {
    id: "rumi-darwaza",
    title: "Rumi Darwaza",
    description: "Iconic gateway of Lucknow, an architectural marvel from Awadhi era.",
    category: "culture",
    mapsLink: "https://maps.google.com/?q=Rumi+Darwaza+Lucknow",
  },
  {
    id: "residency",
    title: "The Residency",
    description: "Historic ruins from the 1857 revolt, now a peaceful heritage site.",
    category: "culture",
    mapsLink: "https://maps.google.com/?q=The+Residency+Lucknow",
  },

  // Shopping
  {
    id: "hazratganj",
    title: "Hazratganj Market",
    description: "The heart of Lucknow shopping with traditional and modern stores.",
    category: "shopping",
    mapsLink: "https://maps.google.com/?q=Hazratganj+Lucknow",
  },
  {
    id: "aminabad",
    title: "Aminabad",
    description: "Traditional market famous for chikan embroidery and street food.",
    category: "shopping",
    mapsLink: "https://maps.google.com/?q=Aminabad+Lucknow",
  },
  {
    id: "chowk",
    title: "Chowk",
    description: "Historic bazaar known for traditional crafts, perfumes, and kebabs.",
    category: "shopping",
    mapsLink: "https://maps.google.com/?q=Chowk+Lucknow",
  },
];

export const categories: { value: PlaceCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "food", label: "Food" },
  { value: "culture", label: "Culture" },
  { value: "shopping", label: "Shopping" },
];
