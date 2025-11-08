// src/contexts/LanguageContext.tsx
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'en' | 'hi';

interface Language {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: 'IN'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳'
  }
];

const translations = {
  en: {
    header: {
      title: "Service Professionals Directory",
      home: "Home",
      professionals: "Professionals",
      cities: "Cities",
      services: "Services",
      signIn: "Sign In",
      joinAsPro: "Join as Pro",
      switchLanguage: "Switch Language"
    },
    hero: {
      title: "Find Trusted Professionals Near You",
      subtitle: "Connect with experienced carpenters, plumbers, electricians, and painters in your area",
      findProfessionals: "Find Professionals"
    },
    citySelector: {
      title: "Find Local Professionals",
      subtitle: "Select your city to discover skilled service providers in your area",
      searchPlaceholder: "Search for your city...",
      allCities: "All Cities",
      mostPopular: "Most Popular",
      availableCities: "Available Cities",
      searchResults: "Search Results",
      clearSearch: "Clear Search",
      noCitiesFound: "No cities found",
      showAllCities: "Show All Cities",
      professionalsAvailable: "professionals available",
      changeCity: "Change City"
    },
    filters: {
      searchPlaceholder: "Search by name, profession, or skills...",
      sortBy: "Sort by:",
      highestRated: "Highest Rated",
      mostExperienced: "Most Experienced",
      nameAZ: "Name A-Z",
      professions: "Professions",
      allProfessions: "All Professions",
      clearAllFilters: "Clear All Filters",
      activeFilters: "Active filters:",
      city: "City",
      profession: "Profession",
      search: "Search"
    },
    results: {
      allProfessionals: "All Professionals",
      professionalsIn: "Professionals in",
      professionalsFound: "professional found",
      professionalsFound_plural: "professionals found",
      showing: "Showing",
      of: "of",
      professionals: "professionals",
      clearAll: "Clear All",
      noProfessionalsFound: "No professionals found",
      adjustFilters: "We couldn't find any professionals matching your criteria. Try adjusting your filters or search terms.",
      showAllProfessionals: "Show All Professionals",
      clearSearch: "Clear Search",
      experience: "Experience",
      rating: "Rating",
      rate: "Rate",
      hour: "hour",
      availableNow: "Available Now",
      checkAvailability: "Check Availability",
      contactNow: "Contact Now",
      viewProfile: "View Profile",
      loadMore: "Load More Professionals"
    }
  },
  hi: {
    header: {
      title: "सेवा पेशेवर निर्देशिका",
      subtitle: "अपने शहर में अनुभवी पेशेवरों को खोजें",
      home: "होम",
      professionals: "पेशेवर",
      cities: "शहर",
      services: "सेवाएं",
      signIn: "साइन इन",
      joinAsPro: "प्रो के रूप में जुड़ें",
      switchLanguage: "भाषा बदलें"
    },
    hero: {
      title: "अपने आस-पास विश्वसनीय पेशेवर खोजें",
      subtitle: "अपने क्षेत्र में अनुभवी बढ़ई, प्लंबर, इलेक्ट्रीशियन और पेंटर से जुड़ें",
      findProfessionals: "पेशेवर खोजें"
    },
    citySelector: {
      title: "स्थानीय पेशेवर खोजें",
      subtitle: "कुशल सेवा प्रदाताओं को खोजने के लिए अपना शहर चुनें",
      searchPlaceholder: "अपना शहर खोजें...",
      allCities: "सभी शहर",
      mostPopular: "सबसे लोकप्रिय",
      availableCities: "उपलब्ध शहर",
      searchResults: "खोज परिणाम",
      clearSearch: "खोज साफ करें",
      noCitiesFound: "कोई शहर नहीं मिला",
      showAllCities: "सभी शहर दिखाएं",
      professionalsAvailable: "पेशेवर उपलब्ध",
      changeCity: "शहर बदलें"
    },
    filters: {
      searchPlaceholder: "नाम, पेशा, या कौशल से खोजें...",
      sortBy: "क्रमबद्ध करें:",
      highestRated: "उच्चतम रेटेड",
      mostExperienced: "सबसे अनुभवी",
      nameAZ: "नाम क-ह",
      professions: "पेशे",
      allProfessions: "सभी पेशे",
      clearAllFilters: "सभी फिल्टर साफ करें",
      activeFilters: "सक्रिय फिल्टर:",
      city: "शहर",
      profession: "पेशा",
      search: "खोज"
    },
    results: {
      allProfessionals: "सभी पेशेवर",
      professionalsIn: "में पेशेवर",
      professionalsFound: "पेशेवर मिला",
      professionalsFound_plural: "पेशेवर मिले",
      showing: "दिखा रहा है",
      of: "में से",
      professionals: "पेशेवर",
      clearAll: "सभी साफ करें",
      noProfessionalsFound: "कोई पेशेवर नहीं मिला",
      adjustFilters: "हमें आपके मानदंडों से मेल खाने वाला कोई पेशेवर नहीं मिला। कृपया अपने फिल्टर या खोज शब्दों को समायोजित करें।",
      showAllProfessionals: "सभी पेशेवर दिखाएं",
      clearSearch: "खोज साफ करें",
      experience: "अनुभव",
      rating: "रेटिंग",
      rate: "दर",
      hour: "घंटा",
      availableNow: "अभी उपलब्ध",
      checkAvailability: "उपलब्धता जांचें",
      contactNow: "अभी संपर्क करें",
      viewProfile: "प्रोफाइल देखें",
      loadMore: "और पेशेवर लोड करें"
    }
  }
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  currentLanguage: Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('craftconnect-language');
    if (saved === 'hi' || saved === 'en') {
      setLocale(saved);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('craftconnect-language', newLocale);
    document.documentElement.setAttribute('lang', newLocale);
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'hi' : 'en';
    handleSetLocale(newLocale);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        // Fallback to English
        let fallbackValue: any = translations.en;
        for (const k of keys) {
          fallbackValue = fallbackValue?.[k];
          if (fallbackValue === undefined) return key;
        }
        return fallbackValue || key;
      }
    }
    
    return value;
  };

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <LanguageContext.Provider value={{ 
      locale, 
      setLocale: handleSetLocale, 
      toggleLanguage, 
      t,
      currentLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};