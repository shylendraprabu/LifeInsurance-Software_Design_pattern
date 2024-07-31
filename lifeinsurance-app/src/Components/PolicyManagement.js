import React, { useState } from 'react';
import Layout from './Layout';
import '../styles/PolicyManagement.css';

const PolicyManagement = ({ policies, setPolicies }) => {
  const [newPolicy, setNewPolicy] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editPolicy, setEditPolicy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddPolicy = () => {
    if (newPolicy.trim()) {
      setPolicies([...policies, newPolicy]);
      setNewPolicy('');
    }
  };

  const handleDeletePolicy = (index) => {
    if (window.confirm('Are you sure you want to delete this policy?')) {
      setPolicies(policies.filter((_, i) => i !== index));
    }
  };

  const handleEditPolicy = (index) => {
    setEditingIndex(index);
    setEditPolicy(policies[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedPolicies = [...policies];
    updatedPolicies[index] = editPolicy;
    setPolicies(updatedPolicies);
    setEditingIndex(null);
    setEditPolicy('');
  };

  const filteredPolicies = policies.filter(policy =>
    policy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSortPolicies = () => {
    const sortedPolicies = [...policies].sort();
    setPolicies(sortedPolicies);
  };

  return (
    <Layout>
      <div className="policy-management-container">
        <h1>Policy Management</h1>
        <div className="policy-management">
          <input 
            type="text" 
            value={newPolicy} 
            onChange={(e) => setNewPolicy(e.target.value)} 
            placeholder="New Policy" 
          />
          <button onClick={handleAddPolicy}>Add Policy</button>
          <div className="search-sort">
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              placeholder="Search Policies" 
            />
            <button onClick={handleSortPolicies}>Sort Policies</button>
          </div>
          <ul>
            {filteredPolicies.map((policy, index) => (
              <li key={index}>
                {editingIndex === index ? (
                  <>
                    <input 
                      type="text" 
                      value={editPolicy} 
                      onChange={(e) => setEditPolicy(e.target.value)} 
                    />
                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                    <button onClick={() => setEditingIndex(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    {policy}
                    <div>
                      <button onClick={() => handleEditPolicy(index)}>Edit</button>
                      <button onClick={() => handleDeletePolicy(index)}>Delete</button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyManagement;
