import React from 'react';
import './AllCategories.css'; // Import the CSS file for styling
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Pagination from '../Components/Pagination';

const Petshop = () => {
const totalPages = 4;
  return (
    <div>
      <Navbar />
      <div className="petshop-page">
      <p className="sub-title">Home &gt; All Categories</p>
        <p className="category-title">Pet-Shop Categories</p>
        <div className="product-container">
          {/* First row of products */}
          <div className="product-card">
          <img src="https://www.thesprucepets.com/thmb/f_IXotxdvQKoJ6UqC9Xuqcf7m6I=/5464x3073/smart/filters:no_upscale()/people-food-for-puppies-2804770-hero-58d5ffa7c4784604b5088d8fcf41fed7.jpg" alt="Dog Food" />
            <p className="product-category-name">Dog Food</p>
          </div>
          <div className="product-card">
          <img src="https://www.carecredit.com/sites/cc/image/wet-dry-cat-food.jpg" alt="Cat Food" />
            <p className="product-category-name">Cat Food</p>
          </div>
          <div className="product-card">
          <img src="https://jcpenney.scene7.com/is/image/jcpenneyimages/dogs-e7d6c944-86c1-41fa-9c69-2bf69ece4be3?scl=1&qlt=75" alt="Accessories" />
            <p className="product-category-name">Pet Accessories</p>
          </div>
          <div className="product-card">
          <img src="https://assets-global.website-files.com/5f7adfe5ed7d773f90050d9e/62831500f1fe236e2869d3c9_puppy-vaccinations-malaysia.jpg" alt="Medicine" />
            <p className="product-category-name">Pet Medicine</p>
          </div>
        </div>
        <div className="product-container">
          {/* First row of products */}
          <div className="product-card">
            <img src="https://www.vmcdn.ca/f/files/shared/miscellaneous-stock-images/dog-house-adobestock_70247668.jpeg;w=960" alt="Product 1" />
            <p className="product-category-name">Pet habit & supplies</p>
          </div>
          <div className="product-card">
            <img src="https://images.squarespace-cdn.com/content/v1/60183f25d7835f347b6bef56/d82bc000-325e-4f99-a972-105d1d4509b6/IMG_8972.jpeg" alt="Product 2" />
            <p className="product-category-name">Toys & Enrichments</p>
          </div>
        </div>
      </div>
      
      <h1 className='bottom-title'>
        <span className='blue-text'>Couldn't Find</span> What <br/> Your Looking For 
    </h1>
    <p className='bottom-description'>Please don't hesitate to contact us through our hotlines or the emails. Our quick response team will be waiting to assist you!</p>
      <Footer />
    </div>
  );
}

export default Petshop;
