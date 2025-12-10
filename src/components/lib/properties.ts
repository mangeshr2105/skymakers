export interface Property {
  id: string;
  name: string;
  description: string;
  configuration: string;
  price: string;
  image: string;
  location: string;
}

export const properties: Property[] = [
  // General Properties (from properties.html)
  {
    id: "binghatti-pinnacle",
    name: "Binghatti Pinnacle",
    description: "Binghatti Pinnacle at Al Jaddaf offers panoramic Dubai skyline and unobstructed Burj Khalifa views, with interiors and amenities designed for luxury-centric living.",
    configuration: "1, 2 and 3 BHK Apartments",
    price: "Starting from AED 1,350,000",
    image: "/images/properties/Binghatti-Pinnacle.webp",
    location: "Al Jaddaf, Dubai"
  },
  
  {
    id: "ajmera-manhattan",
    name: "Ajmera Manhattan",
    description: "Experience International Luxury Living Like Never Before – 2 & 3 BHK Inspired Homes on 100 Acres of Freehold Land.",
    configuration: "2, 3 and 4 BHK",
    price: "3Cr* onwards",
    image: "/images/Properties/Ajmera manhattan2.jpg",
    location: "Wadala, Mumbai"
  },
  {
    id: "lnt-gateway",
    name: "L&T Gateway",
    description: "Located right next to Sewri-Worli Connector & the MTHL in Sewri, well-connected via Road, Metro, Rail, Airport.",
    configuration: "3, 4 & 5 BHK",
    price: "5.5Cr* onwards",
    image: "/images/Properties/Lnt gateway.jpeg",
    location: "Sewri, Mumbai"
  },
  {
    id: "kalpataru-magnus",
    name: "Kalpataru Magnus",
    description: "Magnus' proximity to BKC, one can benefit from connectivity to the Western Express Highway and Eastern Express highway.",
    configuration: "3 & 4 BHK",
    price: "6.5Cr* onwards",
    image: "/images/Properties/kalpataru magnus.jpg",
    location: "BKC, Mumbai"
  },
  {
    id: "lodha-lumis",
    name: "Lodha Lumis",
    description: "Stunning views of Chembur Hills & Atal Setu, modern amenities, and prime location at Wadala.",
    configuration: "3 & 4 BHK",
    price: "3.81Cr* onwards",
    image: "/images/Properties/wadala/Lodhalumis.png",
    location: "Wadala, Mumbai"
  },
  {
    id: "adani-ten-bkc",
    name: "Adani Ten BKC",
    description: "Spread across five acres in BKC, Ten BKC, the idyllic flagship residential project by Adani Realty.",
    configuration: "2 BHK",
    price: "5Cr* onwards",
    image: "/images/Properties/adani.png",
    location: "BKC, Mumbai"
  },
  {
    id: "rustomjee-crown",
    name: "Rustomjee Crown",
    description: "Two towers rising to 68 storeys and one tower rising to 67 storeys, 5.75 acres with delightful surprises at every turn.",
    configuration: "3, 4 & 5 BHK",
    price: "8.50Cr* onwards",
    image: "/images/Properties/rustomjeecrown.png",
    location: "Prabhadevi, Mumbai"
  },

  // Wadala Properties
  {
    id: "lodha-lumis-wadala",
    name: "Lodha Lumis",
    description: "Stunning views of Chembur Hills & Atal Setu, modern amenities, and prime location at Wadala.",
    configuration: "3 & 4 BHK",
    price: "3.81Cr* onwards",
    image: "/images/Properties/wadala/Lodhalumis.png",
    location: "Wadala, Mumbai"
  },
  {
    id: "ajmera-manhattan-wadala",
    name: "Ajmera Manhattan",
    description: "Experience International Luxury Living Like Never Before – 2 & 3 BHK Inspired Homes on 100 Acres of Freehold Land.",
    configuration: "2, 3 and 4 BHK",
    price: "3.1Cr* onwards",
    image: "/images/Properties/wadala/Ajmera-manhattan2.jpg",
    location: "Wadala, Mumbai"
  },
  {
    id: "ajmera-greenfinity-2",
    name: "Ajmera Greenfinity 2",
    description: "Modern 2 BHK residences with contemporary amenities and excellent connectivity in the heart of Wadala.",
    configuration: "2 BHK",
    price: "Starting - Rs. 1.9Cr*",
    image: "/images/Properties/wadala/ajmera-greenfinity-2jpg.jpg",
    location: "Wadala, Mumbai"
  },

  // BKC Properties
  {
    id: "rustomjee-aden",
    name: "Rustomjee Aden",
    description: "Premium residences with modern amenities and excellent connectivity.",
    configuration: "3 BHK",
    price: "3.9Cr* onwards",
    image: "/images/Properties/BKC/rustomjee-aden.jpg",
    location: "BKC, Mumbai"
  },
  {
    id: "rustomjee-seasons",
    name: "Rustomjee Seasons",
    description: "Spacious homes with lush landscapes and a vibrant community in BKC.",
    configuration: "3 BHK",
    price: "6Cr* onwards",
    image: "/images/Properties/BKC/Rustomjee-seasons.jpeg",
    location: "BKC, Mumbai"
  },
  {
    id: "rustomjee-prive",
    name: "Rustomjee Prive",
    description: "Ultra-luxury residences with world-class amenities and prime location in BKC.",
    configuration: "3 BHK",
    price: "5.9Cr* onwards",
    image: "/images/Properties/BKC/Rustomjee-Prive.jpg",
    location: "BKC, Mumbai"
  },
  {
    id: "adani-ten-bkc-location",
    name: "Adani Ten BKC",
    description: "Flagship residential project by Adani Realty with thoughtfully designed spaces in BKC.",
    configuration: "2 BHK",
    price: "5Cr* onwards",
    image: "/images/Properties/BKC/adani.png",
    location: "BKC, Mumbai"
  },

  // Sewri Properties
  {
    id: "lnt-gateway-sewri",
    name: "LNT Gateway (Sewri)",
    description: "Located right next to Sewri-Worli Connector & the MTHL in Sewri, well-connected via Road, Metro, Rail, Airport.",
    configuration: "3, 4 & 5 BHK",
    price: "5.5Cr* onwards",
    image: "/images/Properties/sewri/Lnt gateway.jpeg",
    location: "Sewri, Mumbai"
  },

  // Worli Properties
  {
    id: "prestige-jasdan",
    name: "Prestige Jasdan",
    description: "Premium residences with world-class amenities and excellent connectivity in the heart of Worli.",
    configuration: "3 & 4 BHK",
    price: "7.25Cr* onwards",
    image: "/images/Properties/worli/prestige-jasdan.jpeg",
    location: "Worli, Mumbai"
  },
  {
    id: "raheja-riviere",
    name: "Raheja Riviere",
    description: "Riverfront living with luxury amenities and panoramic views in the prestigious Worli area.",
    configuration: "4 & 5 BHK",
    price: "14.80Cr* onwards",
    image: "/images/Properties/worli/Raheja-Riviere.jpeg",
    location: "Worli, Mumbai"
  },
  {
    id: "godrej-avenue-eleven",
    name: "Godrej Avenue Eleven",
    description: "Modern high-rise living with premium amenities and a vibrant community in Worli.",
    configuration: "2, 3 & 4 BHK",
    price: "3.9Cr* onwards",
    image: "/images/Properties/worli/GodrejAvenueEleven.jpg",
    location: "Worli, Mumbai"
  },
  {
    id: "lodha-park",
    name: "Lodha Park",
    description: "Iconic luxury residences with lush landscapes and world-class amenities in the heart of Worli.",
    configuration: "2, 3, 4 & 5 BHK",
    price: "5.8Cr* onwards",
    image: "/images/Properties/worli/Lodhapark.png",
    location: "Worli, Mumbai"
  },
  {
    id: "piramal-mahalaxmi",
    name: "Piramal Mahalaxmi",
    description: "Towering luxury with breathtaking views of the Mahalaxmi Racecourse and Arabian Sea.",
    configuration: "2 BHK",
    price: "4.6Cr* onwards",
    image: "/images/Properties/worli/piramal-mahalaxmi.jpg",
    location: "Worli, Mumbai"
  },
  {
    id: "rustomjee-crown-worli",
    name: "Rustomjee Crown",
    description: "Iconic towers with sprawling acres and delightful surprises at every turn in Worli.",
    configuration: "3, 4 & 5 BHK",
    price: "8.5Cr* onwards",
    image: "/images/Properties/worli/rustomjeecrown.png",
    location: "Worli, Mumbai"
  },
  {
    id: "lodha-bellevue",
    name: "Lodha Bellevue",
    description: "Contemporary luxury living with panoramic city views and top-tier amenities in Worli.",
    configuration: "2, 3 & 4 BHK",
    price: "4.2Cr* onwards",
    image: "/images/Properties/worli/Lodha-Bellevue.jpg",
    location: "Worli, Mumbai"
  },

  // Sion/Matunga Properties
  {
    id: "180-bayview",
    name: "180 Bayview",
    description: "Premium residences with panoramic views, modern amenities, and excellent connectivity in Sion/Matunga.",
    configuration: "2 BHK",
    price: "4.5Cr* onwards",
    image: "/images/Properties/sionmatunga/180bayview.jpg",
    location: "Sion/Matunga, Mumbai"
  },
  {
    id: "lodha-divino",
    name: "Lodha Divino",
    description: "Spacious homes with world-class amenities, lush landscapes, and a vibrant community in Sion/Matunga.",
    configuration: "2, 3 & 4 BHK",
    price: "4.3Cr* onwards",
    image: "/images/Properties/sionmatunga/lodha-divino.jpg",
    location: "Sion/Matunga, Mumbai"
  }
];

// Helper functions to filter properties by location
export const getPropertiesByLocation = (location: string): Property[] => {
  return properties.filter(property => 
    property.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getTopSellingProperties = (limit: number = 6): Property[] => {
  return properties.slice(0, limit);
};

export default properties;
