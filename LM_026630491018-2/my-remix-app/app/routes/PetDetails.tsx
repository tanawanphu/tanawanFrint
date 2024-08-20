// src/components/PetDetails.tsx
import React from 'react';

interface PetDetailsProps {
  petName: string;
  petType: string;
  petGender: string;
  petDescription: string;
  ownerName: string;
  petImage?: string; // Optional image URL
}

const defaultImage = 'https://via.placeholder.com/150'; // รูปภาพเริ่มต้น

const PetDetails: React.FC<PetDetailsProps> = ({
  petName,
  petType,
  petGender,
  petDescription,
  ownerName,
  petImage
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Pet Details</h2>
      <div className="flex items-center mb-4">
        <img
          src={petImage || defaultImage}
          alt={petName}
          className="w-32 h-32 object-cover rounded-md"
        />
      </div>
      <p><strong>Name:</strong> {petName}</p>
      <p><strong>Type:</strong> {petType}</p>
      <p><strong>Gender:</strong> {petGender}</p>
      <p><strong>Description:</strong> {petDescription}</p>
      <p><strong>Owner:</strong> {ownerName}</p>
    </div>
  );
};

export default PetDetails;
