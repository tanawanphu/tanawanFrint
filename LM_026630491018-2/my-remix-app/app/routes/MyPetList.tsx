// src/components/MyPetList.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Pet {
  id: number;
  name: string;
  type: string;
  gender: string;
  description: string;
  image: string;
}

const defaultPets: Pet[] = [
  {
    id: 1,
    name: 'Bella',
    type: 'Dog',
    gender: 'Female',
    description: 'A friendly and playful dog.',
    image: 'https://via.placeholder.com/150?text=Bella',
  },
  {
    id: 2,
    name: 'Max',
    type: 'Cat',
    gender: 'Male',
    description: 'A curious and independent cat.',
    image: 'https://via.placeholder.com/150?text=Max',
  },
  {
    id: 3,
    name: 'Coco',
    type: 'Bird',
    gender: 'Female',
    description: 'A vibrant and talkative bird.',
    image: 'https://via.placeholder.com/150?text=Coco',
  },
];

const MyPetList: React.FC = () => {
  const [pets] = useState<Pet[]>(defaultPets);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pet List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pets.map(pet => (
          <div key={pet.id} className="p-4 bg-white shadow rounded-lg">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h2 className="text-xl font-semibold">{pet.name}</h2>
            <p className="text-sm text-gray-600">Type: {pet.type}</p>
            <p className="text-sm text-gray-600">Gender: {pet.gender}</p>
            <p className="text-sm text-gray-600 mt-2">{pet.description}</p>
            <Link
              to={`/pet/${pet.id}`}
              className="mt-4 inline-block py-2 px-4 bg-indigo-600 text-white rounded-lg text-center"
              onClick={() => setSelectedPet(pet)}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {selectedPet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedPet.name}</h2>
            <img
              src={selectedPet.image}
              alt={selectedPet.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p><strong>Type:</strong> {selectedPet.type}</p>
            <p><strong>Gender:</strong> {selectedPet.gender}</p>
            <p><strong>Description:</strong> {selectedPet.description}</p>
            <button
              onClick={() => setSelectedPet(null)}
              className="mt-4 inline-block py-2 px-4 bg-red-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPetList;
