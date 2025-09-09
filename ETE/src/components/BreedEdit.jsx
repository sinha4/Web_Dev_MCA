import { useState, useEffect } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';

function BreedEdit() {
  const { breeds, updateBreed } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    description: '',
  });

  useEffect(() => {
    const breedToEdit = breeds.find((b) => b.id === parseInt(id));
    if (breedToEdit) {
      setFormData(breedToEdit);
    }
  }, [id, breeds]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.origin) {
      updateBreed(id, formData);
      navigate('/');
    } else {
      alert('Name and Origin are required fields!');
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Edit Breed</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Breed Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Origin</label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
          ></textarea>
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-amber-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#D2B48C] transition"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-amber-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BreedEdit;