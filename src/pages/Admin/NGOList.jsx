import React, { useEffect, useState } from 'react';
import { getNGOs, deleteNGO } from '../User/api';  
import NGOStats from './NGOStats'; 
import NGOForm from './NGOForm';    

const NGOList = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    const fetchNGOs = async () => {
      const data = await getNGOs();
      setNgos(data);  
    };
    fetchNGOs();
  }, []);

  const handleDelete = async (id) => {
    const success = await deleteNGO(id);
    if (success) {
      setNgos(ngos.filter((ngo) => ngo.id !== id));  
    }
  };

  return (
    <div className="ngo-list">
      <h2>NGO Management</h2>
      <NGOForm setNgos={setNgos} /> {/* NGO Form for adding/updating NGOs */}
      <div className="ngo-cards">
        {ngos.map((ngo) => (
          <div key={ngo.id} className="ngo-card">
            <h3>{ngo.name}</h3>
            <p>{ngo.description}</p>
            <div className="ngo-actions">
              <button onClick={() => handleDelete(ngo.id)}>Delete</button>
              <NGOStats ngoId={ngo.id} /> {/* Component to display stats of each NGO */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NGOList;
