// data/professionals.ts
import { Professional } from '../types';

export const professionals: Professional[] = [
  // Plumbers
  {
    id: 1,
    name: "Rajesh Plumbing Experts",
    profession: "plumber",
    city: "Bairgania",
    experience: "8 years",
    skills: ["Pipe Repair", "Leak Detection", "Water Heater Installation", "Drain Cleaning"],
    hourlyRate: 350,
    contact: {
      phone: "+91-9876543210",
      email: "rajesh.plumbing@gmail.com"
    },
    rating: 4.8,
    reviews: 127,
    image: "/images/plumber1.jpg",
    availability: "Mon-Sat: 8AM-6PM"
  },
  {
    id: 2,
    name: "Mohan Plumbing Services",
    profession: "plumber",
    city: "Bajpatti",
    experience: "6 years",
    skills: ["Bathroom Fitting", "Pipeline Installation", "Motor Repair", "Tap Installation"],
    hourlyRate: 300,
    contact: {
      phone: "+91-9876543211",
      email: "mohan.plumber@yahoo.com"
    },
    rating: 4.5,
    reviews: 89,
    image: "/images/plumber2.jpg",
    availability: "Mon-Sun: 7AM-8PM"
  },
  {
    id: 3,
    name: "Suresh Water Solutions",
    profession: "plumber",
    city: "Bathnaha",
    experience: "10 years",
    skills: ["Borewell Repair", "Overhead Tank", "Pipeline Laying", "Water Purifier"],
    hourlyRate: 400,
    contact: {
      phone: "+91-9876543212",
      email: "suresh.water@gmail.com"
    },
    rating: 4.7,
    reviews: 156,
    image: "/images/plumber3.jpg",
    availability: "24/7 Available"
  },

  // Carpenters
  {
    id: 4,
    name: "Vikram Carpenter Masters",
    profession: "carpenter",
    city: "Belsand",
    experience: "12 years",
    skills: ["Furniture Making", "Cabinet Installation", "Wood Flooring", "Custom Carpentry"],
    hourlyRate: 450,
    contact: {
      phone: "+91-9876543213",
      email: "vikram.carpenter@gmail.com"
    },
    rating: 4.9,
    reviews: 203,
    image: "/images/carpenter1.jpg",
    availability: "Mon-Fri: 9AM-5PM"
  },
  {
    id: 5,
    name: "Ankit Wood Works",
    profession: "carpenter",
    city: "Bokhra",
    experience: "5 years",
    skills: ["Door Repair", "Window Making", "Almirah Making", "Polish Work"],
    hourlyRate: 280,
    contact: {
      phone: "+91-9876543214",
      email: "ankit.woodworks@gmail.com"
    },
    rating: 4.3,
    reviews: 67,
    image: "/images/carpenter2.jpg",
    availability: "Mon-Sat: 8AM-7PM"
  },
  {
    id: 6,
    name: "Rahul Furniture House",
    profession: "carpenter",
    city: "Choraut",
    experience: "15 years",
    skills: ["Custom Furniture", "Sofa Making", "Bed Design", "Office Furniture"],
    hourlyRate: 500,
    contact: {
      phone: "+91-9876543215",
      email: "rahul.furniture@gmail.com"
    },
    rating: 4.8,
    reviews: 189,
    image: "/images/carpenter3.jpg",
    availability: "Mon-Sat: 10AM-6PM"
  },

  // Electricians
  {
    id: 7,
    name: "Sanjay Electricals",
    profession: "electrician",
    city: "Dumra",
    experience: "8 years",
    skills: ["Wiring", "Switch Board", "Inverter Repair", "Motor Winding"],
    hourlyRate: 320,
    contact: {
      phone: "+91-9876543216",
      email: "sanjay.electrical@gmail.com"
    },
    rating: 4.6,
    reviews: 134,
    image: "/images/electrician1.jpg",
    availability: "Mon-Sun: 8AM-9PM"
  },
  {
    id: 8,
    name: "Amit Electric Works",
    profession: "electrician",
    city: "Majorganj",
    experience: "6 years",
    skills: ["Home Wiring", "Fan Installation", "Light Fitting", "Circuit Repair"],
    hourlyRate: 280,
    contact: {
      phone: "+91-9876543217",
      email: "amit.electric@yahoo.com"
    },
    rating: 4.4,
    reviews: 98,
    image: "/images/electrician2.jpg",
    availability: "24/7 Emergency"
  },
  {
    id: 9,
    name: "Deepak Power Solutions",
    profession: "electrician",
    city: "Nanpur",
    experience: "10 years",
    skills: ["Inverter Setup", "Solar Panel", "UPS Installation", "Generator Repair"],
    hourlyRate: 380,
    contact: {
      phone: "+91-9876543218",
      email: "deepak.power@gmail.com"
    },
    rating: 4.7,
    reviews: 112,
    image: "/images/electrician3.jpg",
    availability: "Mon-Sat: 7AM-8PM"
  },

  // Painters
  {
    id: 10,
    name: "Creative Painters Inc",
    profession: "painter",
    city: "Parihar",
    experience: "7 years",
    skills: ["Interior Painting", "Exterior Painting", "Wallpaper Installation", "Color Consultation"],
    hourlyRate: 300,
    contact: {
      phone: "+91-9876543219",
      email: "creative.painters@gmail.com"
    },
    rating: 4.5,
    reviews: 156,
    image: "/images/painter1.jpg",
    availability: "Tue-Sun: 7AM-7PM"
  },
  {
    id: 11,
    name: "Rohit Painting Services",
    profession: "painter",
    city: "Parsauni",
    experience: "4 years",
    skills: ["Wall Putty", "Texture Paint", "Waterproofing", "Wall Repair"],
    hourlyRate: 250,
    contact: {
      phone: "+91-9876543220",
      email: "rohit.painter@gmail.com"
    },
    rating: 4.2,
    reviews: 73,
    image: "/images/painter2.jpg",
    availability: "Mon-Sat: 8AM-6PM"
  },
  {
    id: 12,
    name: "Modern Paint Solutions",
    profession: "painter",
    city: "Pupri",
    experience: "9 years",
    skills: ["House Painting", "Office Painting", "Spray Painting", "Wood Polish"],
    hourlyRate: 350,
    contact: {
      phone: "+91-9876543221",
      email: "modern.paint@gmail.com"
    },
    rating: 4.6,
    reviews: 167,
    image: "/images/painter3.jpg",
    availability: "Mon-Sun: 8AM-8PM"
  },

  // More Professionals for other cities
  {
    id: 13,
    name: "Ravi Construction Works",
    profession: "builder",
    city: "Riga",
    experience: "12 years",
    skills: ["Home Construction", "Renovation", "Foundation Work", "Brick Work"],
    hourlyRate: 550,
    contact: {
      phone: "+91-9876543222",
      email: "ravi.construction@gmail.com"
    },
    rating: 4.8,
    reviews: 189,
    image: "/images/builder1.jpg",
    availability: "Mon-Sat: 8AM-6PM"
  },
  {
    id: 14,
    name: "Kumar Mason & Builder",
    profession: "builder",
    city: "Runni Saidpur",
    experience: "15 years",
    skills: ["House Building", "Wall Construction", "Plaster Work", "Tiles Work"],
    hourlyRate: 600,
    contact: {
      phone: "+91-9876543223",
      email: "kumar.builder@gmail.com"
    },
    rating: 4.9,
    reviews: 234,
    image: "/images/builder2.jpg",
    availability: "Mon-Fri: 9AM-5PM"
  },
  {
    id: 15,
    name: "Sunil Repair Services",
    profession: "handyman",
    city: "Sonbarsa",
    experience: "8 years",
    skills: ["General Repair", "Maintenance", "Small Fixes", "Assembly Work"],
    hourlyRate: 280,
    contact: {
      phone: "+91-9876543224",
      email: "sunil.repair@gmail.com"
    },
    rating: 4.4,
    reviews: 145,
    image: "/images/handyman1.jpg",
    availability: "Mon-Sun: 8AM-8PM"
  },
  {
    id: 16,
    name: "Manoj AC Repair",
    profession: "ac_technician",
    city: "Suppi",
    experience: "6 years",
    skills: ["AC Service", "Gas Filling", "AC Installation", "Cooling Repair"],
    hourlyRate: 400,
    contact: {
      phone: "+91-9876543225",
      email: "manoj.ac@gmail.com"
    },
    rating: 4.5,
    reviews: 98,
    image: "/images/actechnician1.jpg",
    availability: "Mon-Sat: 9AM-7PM"
  },
  {
    id: 17,
    name: "Ajay Home Services",
    profession: "handyman",
    city: "Sursand",
    experience: "10 years",
    skills: ["All Home Repairs", "Plumbing", "Electrical", "Carpentry"],
    hourlyRate: 350,
    contact: {
      phone: "+91-9876543226",
      email: "ajay.homeservices@gmail.com"
    },
    rating: 4.7,
    reviews: 178,
    image: "/images/handyman2.jpg",
    availability: "24/7 Available"
  },

  // Additional professionals for popular cities
  {
    id: 18,
    name: "Perfect Plumbing Co",
    profession: "plumber",
    city: "Runni Saidpur",
    experience: "8 years",
    skills: ["Pipeline Repair", "Bathroom Fitting", "Water Tank", "Motor Service"],
    hourlyRate: 320,
    contact: {
      phone: "+91-9876543227",
      email: "perfect.plumbing@gmail.com"
    },
    rating: 4.6,
    reviews: 112,
    image: "/images/plumber4.jpg",
    availability: "Mon-Sun: 7AM-9PM"
  },
  {
    id: 19,
    name: "Expert Electric Works",
    profession: "electrician",
    city: "Bathnaha",
    experience: "9 years",
    skills: ["House Wiring", "Switch Repair", "Inverter Service", "Light Installation"],
    hourlyRate: 340,
    contact: {
      phone: "+91-9876543228",
      email: "expert.electric@gmail.com"
    },
    rating: 4.7,
    reviews: 156,
    image: "/images/electrician4.jpg",
    availability: "Mon-Sat: 8AM-8PM"
  },
  {
    id: 20,
    name: "Quality Carpentry Works",
    profession: "carpenter",
    city: "Parihar",
    experience: "11 years",
    skills: ["Furniture Making", "Door Repair", "Window Fitting", "Polish Work"],
    hourlyRate: 420,
    contact: {
      phone: "+91-9876543229",
      email: "quality.carpenter@gmail.com"
    },
    rating: 4.8,
    reviews: 167,
    image: "/images/carpenter4.jpg",
    availability: "Mon-Fri: 9AM-6PM"
  }
];

export const cities: string[] = [
  "All Cities",
  "Bairgania",
  "Bajpatti", 
  "Bathnaha",
  "Belsand",
  "Bokhra",
  "Choraut",
  "Dumra",
  "Majorganj",
  "Nanpur",
  "Parihar",
  "Parsauni",
  "Pupri",
  "Riga",
  "Runni Saidpur",
  "Sonbarsa",
  "Suppi",
  "Sursand"
];

export const professions: Professional['profession'][] = [
  "plumber",
  "carpenter", 
  "electrician",
  "painter",
  "builder",
  "handyman",
  "ac_technician"
];