// components/ServiceCard.tsx
import { useState } from 'react';
import { ServiceCardProps } from '../../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ professional }) => {
  const [showContact, setShowContact] = useState<boolean>(false);

  const handleContactClick = (): void => {
    setShowContact(!showContact);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="flex items-start space-x-4">
        <img
          src={professional.profilePic}
          alt={professional.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{professional.name}</h3>
              <p className="text-gray-600">{professional.profession}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {professional.rating} ⭐
            </span>
          </div>
          
          <div className="mt-3 space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Experience:</span> {professional.experience}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Rate:</span> {professional.hourlyRate}
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {professional.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleContactClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              {showContact ? 'Hide Contact' : 'Show Contact'}
            </button>
            
            {showContact && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Phone:</span> {professional.contact}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Email:</span> {professional.email}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;