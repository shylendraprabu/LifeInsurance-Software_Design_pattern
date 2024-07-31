import React, { useState } from 'react';
import Layout from './Layout';
import '../styles/CustomerManagement.css';

const CustomerManagement = ({ customers, setCustomers }) => {
  const [newCustomer, setNewCustomer] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editCustomer, setEditCustomer] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddCustomer = () => {
    if (newCustomer.trim()) {
      setCustomers([...customers, newCustomer]);
      setNewCustomer('');
    }
  };

  const handleDeleteCustomer = (index) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter((_, i) => i !== index));
    }
  };

  const handleEditCustomer = (index) => {
    setEditingIndex(index);
    setEditCustomer(customers[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index] = editCustomer;
    setCustomers(updatedCustomers);
    setEditingIndex(null);
    setEditCustomer('');
  };

  const filteredCustomers = customers.filter(customer =>
    customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSortCustomers = () => {
    const sortedCustomers = [...customers].sort();
    setCustomers(sortedCustomers);
  };

  return (
    
      <Layout>
    <div className="customer-management-page">
      <div className="customer-management-container">
        <h1>Customer Management</h1>
        <div className="customer-management">
          <input 
            type="text" 
            value={newCustomer} 
            onChange={(e) => setNewCustomer(e.target.value)} 
            placeholder="New Customer" 
            />
          <button onClick={handleAddCustomer}>Add Customer</button>
          <div className="search-sort">
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              placeholder="Search Customers" 
              />
            <button onClick={handleSortCustomers}>Sort Customers</button>
          </div>
          <ul>
            {filteredCustomers.map((customer, index) => (
              <li key={index}>
                {editingIndex === index ? (
                  <>
                    <input 
                      type="text" 
                      value={editCustomer} 
                      onChange={(e) => setEditCustomer(e.target.value)} 
                    />
                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                    <button onClick={() => setEditingIndex(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    {customer}
                    <div>
                      <button onClick={() => handleEditCustomer(index)}>Edit</button>
                      <button onClick={() => handleDeleteCustomer(index)}>Delete</button>
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

export default CustomerManagement;
