import React, { useState } from 'react';
import Layout from'./Layout';
import '../styles/ClaimsManagement.css';

const ClaimsManagement = ({ claims, setClaims }) => {
  const [newClaim, setNewClaim] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editClaim, setEditClaim] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddClaim = () => {
    if (newClaim.trim()) {
      setClaims([...claims, newClaim]);
      setNewClaim('');
    }
  };

  const handleDeleteClaim = (index) => {
    if (window.confirm('Are you sure you want to delete this claim?')) {
      setClaims(claims.filter((_, i) => i !== index));
    }
  };

  const handleEditClaim = (index) => {
    setEditingIndex(index);
    setEditClaim(claims[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedClaims = [...claims];
    updatedClaims[index] = editClaim;
    setClaims(updatedClaims);
    setEditingIndex(null);
    setEditClaim('');
  };

  const filteredClaims = claims.filter(claim =>
    claim.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSortClaims = () => {
    const sortedClaims = [...claims].sort();
    setClaims(sortedClaims);
  };

  return (
    <Layout>

    <div className="claims-management-page">
      <div className="claims-management-container">
        <h1>Claims Management</h1>
        <div className="claims-management">
          <input 
            type="text" 
            value={newClaim} 
            onChange={(e) => setNewClaim(e.target.value)} 
            placeholder="New Claim" 
            />
          <button onClick={handleAddClaim}>Add Claim</button>
          <div className="search-sort">
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              placeholder="Search Claims" 
              />
            <button onClick={handleSortClaims}>Sort Claims</button>
          </div>
          <ul>
            {filteredClaims.map((claim, index) => (
              <li key={index}>
                {editingIndex === index ? (
                  <>
                    <input 
                      type="text" 
                      value={editClaim} 
                      onChange={(e) => setEditClaim(e.target.value)} 
                      />
                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                    <button onClick={() => setEditingIndex(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    {claim}
                    <div>
                      <button onClick={() => handleEditClaim(index)}>Edit</button>
                      <button onClick={() => handleDeleteClaim(index)}>Delete</button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
            </Layout>
  );
};

export default ClaimsManagement;
