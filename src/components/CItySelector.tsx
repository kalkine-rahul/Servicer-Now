// components/CitySelector.tsx
import { useState, useRef, useEffect } from 'react';
import { CitySelectorProps } from '../../types';
import './CitySelector.css';

const CitySelector: React.FC<CitySelectorProps> = ({ selectedCity, onCityChange, cities }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCitySelect = (city: string) => {
    onCityChange(city);
    setIsOpen(false);
    setSearchTerm('');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="city-selector" ref={dropdownRef}>
      {/* Main Selector */}
      <div className="selector-container">
        <label className="selector-label">
          <span className="pin-icon">📍</span>
          Find Professionals in Your City
        </label>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`selector-button ${isOpen ? 'selector-button-active' : ''}`}
        >
          <div className="button-content">
            <span className="button-icon">🏙️</span>
            <span className="button-text">
              {selectedCity === 'All Cities' ? 'Select your city...' : selectedCity}
            </span>
          </div>
          <span className={`chevron ${isOpen ? 'chevron-up' : 'chevron-down'}`}>
            {isOpen ? '▲' : '▼'}
          </span>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="dropdown-menu">
            {/* Search Input */}
            <div className="search-container">
              <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  autoFocus
                />
              </div>
            </div>

            {/* Cities List */}
            <div className="cities-list">
              {filteredCities.length === 0 ? (
                <div className="empty-state">
                  <span className="empty-icon">🏙️</span>
                  <p>No cities found</p>
                </div>
              ) : (
                filteredCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className={`city-item ${selectedCity === city ? 'city-item-selected' : ''}`}
                  >
                    <div className="city-item-content">
                      <span className="city-icon">📍</span>
                      <span className="city-name">{city}</span>
                    </div>
                    {selectedCity === city && (
                      <span className="check-icon">✓</span>
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Quick Actions */}
            <div className="dropdown-footer">
              <button
                onClick={() => handleCitySelect('All Cities')}
                className="view-all-button"
              >
                View all cities
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Selected City Badge */}
      {selectedCity !== 'All Cities' && (
        <div className="selected-badge">
          <span className="badge-icon">📍</span>
          <span className="badge-text">Showing professionals in {selectedCity}</span>
          <button
            onClick={() => onCityChange('All Cities')}
            className="badge-close"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default CitySelector;