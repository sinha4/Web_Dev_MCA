import { useEffect, useState } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';

function BreedShow() {
  const { breeds } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    const foundBreed = breeds.find((b) => b.id === parseInt(id));
    if (foundBreed) {
      setBreed(foundBreed);
    } else {
      navigate('/');
    }
  }, [id, breeds, navigate]);

  if (!breed) {
    return <div className="text-center text-gray-500">Loading or not found...</div>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">{breed.name}</h2>
      <p className="text-gray-600 text-xl mb-4">Origin: {breed.origin}</p>
      <p className="text-gray-700 text-lg leading-relaxed">{breed.description || 'No description provided.'}</p>
      <div className="mt-8">
        <button
          onClick={() => navigate('/')}
          className="bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D2B48C] transition"
        >
          Back to List
        </button>
      </div>
    </div>
  );
}

export default BreedShow;