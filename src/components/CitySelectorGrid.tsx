// components/CitySelectorGrid.tsx
import { useState, useMemo } from 'react';
import { CitySelectorProps } from '../../types';
import { useLanguage } from '../contexts/LanguageContext';
import './CitySelectorGrid.css';

const CitySelectorGrid: React.FC<CitySelectorProps> = ({ selectedCity, onCityChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllCities, setShowAllCities] = useState(false);
  const { t } = useLanguage();

  // Define cityData object with professional counts
  const cityData = {
    "Bairgania": 26,
    "Bajpatti": 58,
    "Bathnaha": 90,
    "Belsand": 41,
    "Bokhra": 28,
    "Choraut": 17,
    "Dumra": 79,
    "Majorganj": 27,
    "Nanpur": 32,
    "Parihar": 83,
    "Parsauni": 22,
    "Pupri": 46,
    "Riga": 42,
    "Runni Saidpur": 102,
    "Sonbarsa": 64,
    "Suppi": 35,
    "Sursand": 45
  };

  const popularCities = Object.keys(cityData);
  
  const getProfessionalCount = (city: string) => {
    return cityData[city as keyof typeof cityData] || 0;
  };

  const filteredCities = useMemo(() => {
    return popularCities.filter(city => 
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [popularCities, searchTerm]);

  const displayedCities = showAllCities ? filteredCities : filteredCities.slice(0, 12);

  const clearSearch = () => {
    setSearchTerm('');
    setShowAllCities(false);
  };

  return (
    <div className="city-grid-container">
      {/* Header Section */}
      <div className="grid-header">
        <div className="header-content">
          <h1 className="grid-title">
            {t('citySelector.title')}
          </h1>
          <p className="grid-subtitle">
            {t('citySelector.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder={t('citySelector.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button onClick={clearSearch} className="clear-search-btn">
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button
            onClick={() => onCityChange('All Cities')}
            className={`quick-action-btn ${selectedCity === 'All Cities' ? 'active' : ''}`}
          >
            <span className="action-icon">🌍</span>
            {t('citySelector.allCities')}
          </button>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="cities-grid-section">
        <div className="section-header">
          <h3 className="section-title">
            {searchTerm ? `${t('citySelector.searchResults')} (${filteredCities.length})` : t('citySelector.availableCities')}
          </h3>
          {searchTerm && (
            <button onClick={clearSearch} className="clear-filters">
              {t('citySelector.clearSearch')}
            </button>
          )}
        </div>

        {filteredCities.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🏙️</div>
            <h4>{t('citySelector.noCitiesFound')}</h4>
            <p>Try adjusting your search terms</p>
            <button onClick={clearSearch} className="retry-btn">
              {t('citySelector.showAllCities')}
            </button>
          </div>
        ) : (
          <>
            <div className="cities-grid">
              {displayedCities.map((city) => {
                const professionalCount = getProfessionalCount(city);
                
                return (
                  <button
                    key={city}
                    onClick={() => onCityChange(city)}
                    className={`city-card ${selectedCity === city ? 'city-card-active' : ''}`}
                  >
                    <div className="card-content">
                      <div className="card-header">
                        <div className={`card-icon ${selectedCity === city ? 'card-icon-active' : ''}`}>
                          <span className="city-emoji">🏙️</span>
                        </div>
                        <div className="city-info">
                          <span className="card-city-name">{city}</span>
                          <span className="professional-count">
                            {professionalCount} {t('citySelector.professionalsAvailable')}
                          </span>
                        </div>
                      </div>
                      
                      <div className="card-footer">
                        {selectedCity === city ? (
                          <div className="selected-indicator">
                            <span className="check-icon">✓</span>
                            Selected
                          </div>
                        ) : (
                          <div className="view-action">
                            View Professionals →
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CitySelectorGrid;