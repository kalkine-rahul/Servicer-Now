// src/data/professionals.ts

import { Professional } from '../types';

export const professionalsData: Professional[] = [
  {
    id: 1,
    name: "John Carpenter",
    profession: "carpenter",
    city: "New York",
    experience: "8 years",
    rating: 4.8,
    reviews: 127,
    skills: ["Furniture Making", "Cabinet Installation", "Wood Repair", "Custom Carpentry"],
    hourlyRate: 45,
    contact: {
      phone: "+1-555-0101",
      email: "john.carpenter@email.com"
    },
    image: "/api/placeholder/150/150",
    availability: "Mon-Sat: 8AM-6PM"
  },
  {
    id: 2,
    name: "Mike Plumber",
    profession: "plumber",
    city: "New York",
    experience: "12 years",
    rating: 4.9,
    reviews: 203,
    skills: ["Pipe Repair", "Leak Detection", "Installation", "Drain Cleaning"],
    hourlyRate: 60,
    contact: {
      phone: "+1-555-0102",
      email: "mike.plumber@email.com"
    },
    image: "/api/placeholder/150/150",
    availability: "Mon-Sun: 7AM-8PM"
  },
  // Add more professionals...
];

// Export cities array
export const cities = Array.from(new Set(professionalsData.map(p => p.city)));
