// src/data/professionalsHindi.ts
import { Professional } from '../../types';

export const professionalsDataHindi: Professional[] = [
  {
    id: 1,
    name: "जॉन कारपेंटर",
    profession: "carpenter",
    city: "न्यूयॉर्क",
    experience: "8 वर्ष",
    rating: 4.8,
    skills: ["फर्नीचर बनाना", "कैबिनेट इंस्टॉलेशन", "लकड़ी की मरम्मत", "कस्टम कारपेंट्री"],
    contact: "+1-555-0101",
    email: "john.carpenter@email.com",
    profilePic: "/api/placeholder/150/150",
    hourlyRate: "$45/घंटा",
    availability: "Mon-Sat: 8AM-6PM"
  },
  {
    id: 2,
    name: "माइक प्लंबर",
    profession: "plumber",
    city: "न्यूयॉर्क",
    experience: "12 वर्ष",
    rating: 4.9,
    skills: ["पाइप मरम्मत", "लीक डिटेक्शन", "इंस्टॉलेशन", "ड्रेन सफाई"],
    contact: "+1-555-0102",
    email: "mike.plumber@email.com",
    profilePic: "/api/placeholder/150/150",
    hourlyRate: "$60/घंटा",
    availability: "Mon-Sun: 7AM-8PM"
  }
  // Add more Hindi professionals...
];