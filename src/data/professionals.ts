interface Professional {
  id: number;
  name: string;
  profession: string;
  city: string;
  experience: string;
  skills: string[];
  hourlyRate: number;
  contact: {
    phone: string;
    email: string;
  };
  rating: number;
  reviews: number;
  image: string;
  availability: string;
}

export const professionalsData: Professional[] = [
  {
    id: 1,
    name: "John Carpenter",
    profession: "Carpenter",
    city: "New York",
    experience: "8 years",
    rating: 4.8,
    skills: ["Furniture Making", "Cabinet Installation", "Wood Repair", "Custom Carpentry"],
    contact: "+1-555-0101",
    email: "john.carpenter@email.com",
    profilePic: "/api/placeholder/150/150",
    hourlyRate: "$45/hr"
  },
  {
    id: 2,
    name: "Mike Plumber",
    profession: "Plumber",
    city: "New York",
    experience: "12 years",
    rating: 4.9,
    skills: ["Pipe Repair", "Leak Detection", "Installation", "Drain Cleaning"],
    contact: "+1-555-0102",
    email: "mike.plumber@email.com",
    profilePic: "/api/placeholder/150/150",
    hourlyRate: "$60/hr"
  },
  {
    id: 3,
    name: "Sarah Electrician",
    profession: "Electrician",
    city: "Los Angeles",
    experience: "6 years",
    rating: 4.7,
    skills: ["Wiring", "Panel Upgrade", "Lighting Installation", "Troubleshooting"],
    contact: "+1-555-0103",
    email: "sarah.electric@email.com",
    profilePic: "/api/placeholder/150/150",
    hourlyRate: "$55/hr"
  },
  {
    id: 4,
    name: "David Painter",
    profession: "Painter",
    city: "Los Angeles",
    experience: "10 years",
    rating: 4.6,
    skills: ["Interior Painting", "Exterior Painting", "Wallpaper", "Color Consultation"],
    contact: "+1-555-0104",
    email: "david.painter@email.com",
    profilePic: "/api/placeholder/150/150",
    hourlyRate: "$40/hr"
  },
  {
    id: 5,
    name: "Robert Carpenter",
    profession: "Carpenter",
    city: "Chicago",
    experience: "15 years",
    rating: 5.0,
    skills: ["Custom Furniture", "Restoration", "Deck Building", "Trim Work"],
    contact: "+1-555-0105",
    email: "robert.carpenter@email.com",
    profilePic: "/api/placeholder/150/150",
    hourlyRate: "$65/hr"
  },
  {
    id: 6,
    name: "Lisa Plumber",
    profession: "Plumber",
    city: "Chicago",
    experience: "7 years",
    rating: 4.8,
    skills: ["Bathroom Remodel", "Water Heater", "Gas Lines", "Emergency Repair"],
    contact: "+1-555-0106",
    email: "lisa.plumber@email.com",
    profilePic: "/api/placeholder/150/150",
    hourlyRate: "$58/hr"
  }
];






