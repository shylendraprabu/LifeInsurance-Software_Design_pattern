import React, { useState } from 'react';
import '../styles/PaymentsBilling.css';
import Layout from './Layout';

const PaymentsBilling = ({ payments, setPayments }) => {
  const [newPayment, setNewPayment] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editPayment, setEditPayment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddPayment = () => {
    if (newPayment.trim()) {
      setPayments([...payments, newPayment]);
      setNewPayment('');
    }
  };

  const handleDeletePayment = (index) => {
    if (window.confirm('Are you sure you want to delete this payment?')) {
      setPayments(payments.filter((_, i) => i !== index));
    }
  };

  const handleEditPayment = (index) => {
    setEditingIndex(index);
    setEditPayment(payments[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedPayments = [...payments];
    updatedPayments[index] = editPayment;
    setPayments(updatedPayments);
    setEditingIndex(null);
    setEditPayment('');
  };

  const filteredPayments = payments.filter(payment =>
    payment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSortPayments = () => {
    const sortedPayments = [...payments].sort();
    setPayments(sortedPayments);
  };

  return (
    <Layout>

    <div className="payments-billing-container">
      <h1>Payments & Billing</h1>
      <div className="payments-billing">
        <input 
          type="text" 
          value={newPayment} 
          onChange={(e) => setNewPayment(e.target.value)} 
          placeholder="New Payment" 
          />
        <button onClick={handleAddPayment}>Add Payment</button>
        <div className="search-sort">
          <input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            placeholder="Search Payments" 
            />
          <button onClick={handleSortPayments}>Sort Payments</button>
        </div>
        <ul>
          {filteredPayments.map((payment, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                  <input 
                    type="text" 
                    value={editPayment} 
                    onChange={(e) => setEditPayment(e.target.value)} 
                    />
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                  <button onClick={() => setEditingIndex(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {payment}
                  <div>
                    <button onClick={() => handleEditPayment(index)}>Edit</button>
                    <button onClick={() => handleDeletePayment(index)}>Delete</button>
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

export default PaymentsBilling;
