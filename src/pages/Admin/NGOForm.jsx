import React, { useState, useEffect } from 'react';
import { addNGO, updateNGO } from '../User/api';

const NGOForm = ({ ngo, setNgos, isEditMode, setIsEditMode }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isEditMode && ngo) {
      setName(ngo.name);
      setAddress(ngo.address);
      setContact(ngo.contact);
      setDescription(ngo.description);
    }
  }, [isEditMode, ngo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ngoData = { name, address, contact, description };
    let result;

    if (isEditMode) {
      result = await updateNGO(ngo.id, ngoData);  
    } else {
      result = await addNGO(ngoData);  
    }

    if (result) {
      setNgos((prev) => (isEditMode ? prev.map((n) => (n.id === ngo.id ? result : n)) : [...prev, result]));
      setIsEditMode(false);  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isEditMode ? 'Update NGO' : 'Add NGO'}</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="NGO Name" />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="NGO Address" />
      <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="NGO Contact" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="NGO Description" />
      <button type="submit">{isEditMode ? 'Update' : 'Add'} NGO</button>
    </form>
  );
};

export default NGOForm;
