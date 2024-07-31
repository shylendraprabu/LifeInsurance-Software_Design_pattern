import React, { useState } from 'react';
import '../styles/Payment.css';

const Payment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        paypalEmail: '',
        bankAccount: '',
        bankRouting: '',
        amount: ''
    });

    const [paymentMethod, setPaymentMethod] = useState('card');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="payment-container">
            <h1>Make a Payment</h1>
            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange} required>
                        <option value="card">Credit/Debit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank">Bank Transfer</option>
                    </select>
                </div>

                {paymentMethod === 'card' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expirationDate">Expiration Date</label>
                            <input type="text" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
                        </div>
                    </>
                )}

                {paymentMethod === 'paypal' && (
                    <div className="form-group">
                        <label htmlFor="paypalEmail">PayPal Email</label>
                        <input type="email" id="paypalEmail" name="paypalEmail" value={formData.paypalEmail} onChange={handleChange} required />
                    </div>
                )}

                {paymentMethod === 'bank' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="bankAccount">Bank Account Number</label>
                            <input type="text" id="bankAccount" name="bankAccount" value={formData.bankAccount} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bankRouting">Bank Routing Number</label>
                            <input type="text" id="bankRouting" name="bankRouting" value={formData.bankRouting} onChange={handleChange} required />
                        </div>
                    </>
                )}

                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
                </div>

                <button type="submit" className="submit-button">Submit Payment</button>
            </form>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>Your Payment is Successful</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Payment;
