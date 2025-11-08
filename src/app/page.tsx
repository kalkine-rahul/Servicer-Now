// src/app/page.tsx
'use client';
import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import CitySelector from '../components/CitySelectorGrid';
import { professionalsData, cities } from '../data/professionals';
import './Home.css';
import { useLanguage } from '../contexts/LanguageContext';
import { professionalsDataHindi } from '../data/professionalsHindi';

const Home: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('All Cities');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProfession, setSelectedProfession] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'experience'>('rating');

  const { t, locale } = useLanguage();


    // Use Hindi data when language is Hindi
  const currentProfessionalsData = locale === 'hi' ? professionalsDataHindi : professionalsData;




  const filteredProfessionals: Professional[] = useMemo(() => {
    let filtered = currentProfessionalsData.filter((professional) => {
      const matchesCity = selectedCity === 'All Cities' || professional.city === selectedCity;
      const matchesProfession = selectedProfession === 'All' || professional.profession === selectedProfession;
      const matchesSearch = professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           professional.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           professional.skills.some(skill => 
                             skill.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      return matchesCity && matchesProfession && matchesSearch;
    });

    // Sort professionals
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'experience':
          const aExp = parseInt(a.experience);
          const bExp = parseInt(b.experience);
          return bExp - aExp;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCity, searchTerm, selectedProfession, sortBy]);

  const professions: string[] = useMemo(() => 
    ['All', ...Array.from(new Set(currentProfessionalsData.map(p => p.profession)))],
    []
  );

  const clearAllFilters = () => {
    setSelectedCity('All Cities');
    setSearchTerm('');
    setSelectedProfession('All');
    setSortBy('rating');
  };

  const hasActiveFilters = selectedCity !== 'All Cities' || searchTerm !== '' || selectedProfession !== 'All';

  const getAvailabilityStatus = (availability: string | undefined) => {
    if (!availability) {
      return { text: t('results.checkAvailability'), color: 'bg-blue-200 text-blue-700' };
    }
    if (availability.includes('24/7') || availability.includes('Available')) {
      return { text: t('results.availableNow'), color: 'bg-green-200 text-green-700' };
    }
    return { text: t('results.checkAvailability'), color: 'bg-blue-200 text-blue-700' };
  };

  const getProfessionEmoji = (profession: string) => {
    const emojiMap: { [key: string]: string } = {
      'plumber': '🔧',
      'carpenter': '🪚',
      'electrician': '⚡',
      'painter': '🎨',
      'builder': '🏗️',
      'handyman': '🛠️',
      'ac_technician': '❄️'
    };
    return emojiMap[profession] || '👷';
  };

  return (
    <Layout>
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              {t('hero.title')}
            </h1>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="filters-section">
          <CitySelector
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
            cities={cities}
          />
          
          {/* Search and Sort Row */}
          <div className="search-sort-container">
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder={t('filters.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="clear-search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="sort-wrapper">
              <label className="sort-label">{t('filters.sortBy')}</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="sort-select"
              >
                <option value="rating">{t('filters.highestRated')}</option>
                <option value="experience">{t('filters.mostExperienced')}</option>
                <option value="name">{t('filters.nameAZ')}</option>
              </select>
            </div>
          </div>

          {/* Profession Filters */}
          <div className="profession-filters">
            <div className="filters-header">
              <span className="filters-title">{t('filters.professions')}</span>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="clear-filters-btn"
                >
                  {t('filters.clearAllFilters')}
                </button>
              )}
            </div>
            <div className="profession-buttons">
              {professions.map((profession) => (
                <button
                  key={profession}
                  onClick={() => setSelectedProfession(profession)}
                  className={`profession-btn ${selectedProfession === profession ? 'profession-btn-active' : ''}`}
                >
                  {profession === 'All' ? t('filters.allProfessions') : `${profession}s`}
                  {selectedProfession === profession && (
                    <span className="profession-check">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

      {/* Results Section */}
<section className="pro-results-section">
  <div className="pro-results-header">
    <div className="pro-results-info">
      <h2 className="pro-results-title">
        {selectedCity === 'All Cities'
          ? t('results.allProfessionals')
          : `${t('results.professionalsIn')} ${selectedCity}`}
        {selectedProfession !== 'All' && ` - ${selectedProfession}s`}
      </h2>

      <div className="pro-results-stats">
        <span className="pro-results-count">
          {filteredProfessionals.length}{' '}
          {filteredProfessionals.length === 1
            ? t('results.professionalsFound')
            : t('results.professionalsFound_plural')}
        </span>

        {hasActiveFilters && (
          <button onClick={clearAllFilters} className="pro-clear-filters">
            {t('results.clearAll')}
          </button>
        )}
      </div>
    </div>
  </div>

  {/* Professionals Grid */}
  <div className="pro-grid">
    {filteredProfessionals.length === 0 ? (
      <div className="pro-no-results">
        <div className="pro-no-results-icon">🔍</div>
        <h4>{t('results.noProfessionalsFound')}</h4>
        <p>{t('results.adjustFilters')}</p>
      </div>
    ) : (
      filteredProfessionals.map((professional) => {
        const availability = getAvailabilityStatus(professional.availability);
        const professionEmoji = getProfessionEmoji(professional.profession);
        return (
          <div key={professional.id} className="pro-card">
            <div className="pro-card-header">
              <div className="pro-avatar">
                <img src={professional.avatar} alt={professional.name} />
              </div>

              <div className="pro-info">
                <h3 className="pro-name">{professional.name}</h3>
                <span className="pro-profession">
                  {professionEmoji}{' '}
                  {professional.profession.charAt(0).toUpperCase() +
                    professional.profession.slice(1)}
                </span>
                <span className="pro-city">📍 {professional.city}</span>

                <div className={`pro-availability ${availability.color}`}>
                  {availability.text}
                </div>
              </div>
            </div>

            <div className="pro-card-body">
              <div className="pro-rating">
                ⭐ {professional.rating} ({professional.reviews}{' '}
                {t('results.reviews')})
              </div>
              <div className="pro-experience">
                🛠️ {professional.experience} {t('results.experience')}
              </div>
              <div className="pro-hourly-rate">
                💲 {professional.hourlyRate} {t('results.perHour')}
              </div>
            </div>

            <div className="pro-card-footer">
              <button className="pro-contact-btn">
                {t('results.contactNow')}
              </button>
            </div>
          </div>
        );
      })
    )}
  </div>
</section>

      </div>
    </Layout>
  );
};

export default Home;