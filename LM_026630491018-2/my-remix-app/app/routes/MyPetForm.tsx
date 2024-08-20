// src/components/MyPetForm.tsx
import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import PetDetails from './PetDetails'; // Import คอมโพเนนท์ PetDetails

const MyPetForm: React.FC = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('Other');
  const [petGender, setPetGender] = useState('Male');
  const [petDescription, setPetDescription] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [petImage, setPetImage] = useState<string | ArrayBuffer | null>(null); // State สำหรับรูปภาพ
  const [showDetails, setShowDetails] = useState(false);

  const [errors, setErrors] = useState({
    petName: '',
    petType: '',
    petDescription: '',
    ownerName: ''
  });

  const validateForm = () => {
    const newErrors = {
      petName: '',
      petType: '',
      petDescription: '',
      ownerName: ''
    };

    if (!petName) newErrors.petName = 'Pet name is required';
    if (petType === '') newErrors.petType = 'Pet type is required';
    if (!petDescription) newErrors.petDescription = 'Description is required';
    if (!ownerName) newErrors.ownerName = 'Owner name is required';

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      setShowDetails(true);
    }
  };

  return (
    <>
      <Header />
      <main>
        {!showDetails ? (
          <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Add Pet Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Pet Name */}
              <div>
                <label htmlFor="petName" className="block text-sm font-medium text-gray-700">
                  Pet Name
                </label>
                <input
                  id="petName"
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                  required
                />
                {errors.petName && <p className="mt-2 text-sm text-red-600">{errors.petName}</p>}
              </div>

              {/* Pet Type */}
              <div>
                <label htmlFor="petType" className="block text-sm font-medium text-gray-700">
                  Pet Type
                </label>
                <select
                  id="petType"
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                  required
                >
                  <option value="">Select a pet type</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Other">Other</option>
                </select>
                {errors.petType && <p className="mt-2 text-sm text-red-600">{errors.petType}</p>}
              </div>

              {/* Pet Gender */}
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700">Pet Gender</legend>
                <div className="mt-2 flex space-x-4">
                  <div className="flex items-center">
                    <input
                      id="male"
                      type="radio"
                      name="petGender"
                      value="Male"
                      checked={petGender === 'Male'}
                      onChange={(e) => setPetGender(e.target.value)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      required
                    />
                    <label htmlFor="male" className="ml-3 block text-sm font-medium text-gray-700">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="female"
                      type="radio"
                      name="petGender"
                      value="Female"
                      checked={petGender === 'Female'}
                      onChange={(e) => setPetGender(e.target.value)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      required
                    />
                    <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">
                      Female
                    </label>
                  </div>
                </div>
              </fieldset>

              {/* Pet Description */}
              <div>
                <label htmlFor="petDescription" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="petDescription"
                  rows={4}
                  value={petDescription}
                  onChange={(e) => setPetDescription(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                  required
                ></textarea>
                {errors.petDescription && <p className="mt-2 text-sm text-red-600">{errors.petDescription}</p>}
              </div>

              {/* Owner Name */}
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                  Owner Name
                </label>
                <input
                  id="ownerName"
                  type="text"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                  required
                />
                {errors.ownerName && <p className="mt-2 text-sm text-red-600">{errors.ownerName}</p>}
              </div>

              {/* Pet Image */}
              <div>
                <label htmlFor="petImage" className="block text-sm font-medium text-gray-700">
                  Pet Image
                </label>
                <input
                  id="petImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <PetDetails
            petName={petName}
            petType={petType}
            petGender={petGender}
            petDescription={petDescription}
            ownerName={ownerName}
            petImage={petImage ? String(petImage) : ''} // ส่ง URL รูปภาพ
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default MyPetForm;
