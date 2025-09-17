// components/CheckoutPage.js
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext'; // Import useCart hook

const CheckoutPage = () => {
  
  const navigate = useNavigate();
  
  // Use the cart context instead of local state for cart management
  const { cartItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  
  // State for customer information
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card'
  });
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value
    });
  };
  
  // Handle quantity decrease
  const handleDecreaseQuantity = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      if (item.quantity <= 1) {
        // Remove item if quantity would become 0 or less
        removeFromCart(itemId);
      } else {
        // Decrease quantity by 1
        updateQuantity(itemId, item.quantity - 1);
      }
    }
  };
  
  // Handle quantity increase
  const handleIncreaseQuantity = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity + 1);
    }
  };
  
  // Handle removing item completely
  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };
  
  // Handle checkout form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items before placing an order.');
      return;
    }
    
    // Here you would typically process the order
    // For demonstration purposes, we'll just show an alert
    alert(`Order placed successfully! Thank you ${customerInfo.name}!`);
    
    // Clear the cart using context method
    clearCart();
    
    // Navigate back to menu
    navigate('/menu');
  };
  
  // Go back to menu
  const handleBack = () => {
    navigate('/menu');
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <button 
              onClick={handleBack}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg"
            >
              Return to Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="max-h-64 overflow-y-auto mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="mb-3 pb-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <span className="font-medium text-sm">{item.name}</span>
                          <div className="text-green-600 text-sm">₹{item.price.toFixed(2)} each</div>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm ml-2"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                          >
                            −
                          </button>
                          <span className="text-sm font-medium min-w-[20px] text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-green-600 font-medium text-sm">₹{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-3">
                    <span>Total</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Customer Information Form */}
            <div className="md:col-span-2">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Your Information</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 mb-1" htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={customerInfo.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-1">Payment Method</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={customerInfo.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Online
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-lg"
                    >
                      Back to Menu
                    </button>
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;