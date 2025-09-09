import { Link, useOutletContext } from 'react-router-dom';

function BreedList() {
  const { breeds, deleteBreed } = useOutletContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {breeds.length === 0 ? (
        <p className="col-span-3 text-center text-gray-500 text-lg">
          No dog breeds found. Please add a new one!
        </p>
      ) : (
        breeds.map((breed) => (
          <div key={breed.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{breed.name}</h2>
            <p className="text-gray-600 mb-4">{breed.origin}</p>
            <div className="flex justify-start space-x-2">
              <Link
                to={`/${breed.id}`}
                className="bg-[#E6D7B4] text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-900 transition"
              >
                View
              </Link>
              <Link
                to={`/edit/${breed.id}`}
                className="bg-[#D2B48C] text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-900 transition"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteBreed(breed.id)}
                className="bg-amber-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-[#D2B48C] transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BreedList;