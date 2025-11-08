// src/types/index.ts

export interface Professional {
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
