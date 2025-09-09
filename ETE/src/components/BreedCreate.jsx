import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

function BreedCreate() {
  const { addBreed } = useOutletContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.origin) {
      addBreed(formData);
      navigate('/');
    } else {
      alert('Name and Origin are required fields!');
    }
  };

  return (
    <div className="p-6 bg-[#E6D7B4] rounded-lg shadow-inner">
      <h2 className="text-3xl font-bold mb-6 text-amber-900">Add New Breed</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-amber-900 font-semibold mb-2">Breed Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-amber-900"
            required
          />
        </div>
        <div>
          <label className="block text-amber-900 font-semibold mb-2">Origin</label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-amber-900"
            required
          />
        </div>
        <div>
          <label className="block text-amber-900 font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-amber-900"
          ></textarea>
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-amber-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-900 transition"
          >
            Create
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

export default BreedCreate;