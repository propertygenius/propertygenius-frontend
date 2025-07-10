// frontend/src/components/PropertyList.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/properties')
      .then(res => setProperties(res.data));
  }, []);

  return (
    <div className="p-4">
      {properties.map(prop => (
        <div key={prop._id} className="border p-2 mb-2 rounded">
          <h2 className="font-bold">{prop.address}</h2>
          <p>Tenant: {prop.tenantName}</p>
          <p>Rent: £{prop.rent}</p>
          <p>Mortgage: £{prop.mortgage}</p>
          <p className={prop.rent - prop.mortgage >= 0 ? 'text-green-600' : 'text-red-600'}>
            Profit: £{prop.rent - prop.mortgage}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
