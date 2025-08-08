const MedCard = ({ med }) => {
  const name = med.openfda?.brand_name?.[0] || med.openfda?.generic_name?.[0] || 'Unknown';
  const purpose = med.purpose?.[0] || 'Not specified';
  const manufacturer = med.openfda?.manufacturer_name?.[0] || 'Unknown';

  return (
    <div className="bg-white rounded shadow p-4 hover:shadow-md transition-all">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-sm mb-1"><strong>Purpose:</strong> {purpose}</p>
      <p className="text-sm mb-1"><strong>Manufacturer:</strong>
      {manufacturer}</p>
    </div>
  );
};

export default MedCard;

