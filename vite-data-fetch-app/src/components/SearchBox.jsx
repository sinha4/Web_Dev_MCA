const SearchBox = ({ query, setQuery, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-4">
      <input
        type="text text-teal-500"
        placeholder="Search medicine (e.g., paracetamol)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-teal-800 rounded px-4 py-2 w-2/3"
        required
      />
      <button
        type="submit"
        className="bg-teal-600 hover:bg-teal-200 text-white rounded px-4 py-2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
