import React, { useState, useEffect } from 'react';
import './Reviews.css'; // Import your CSS file

import dogFootprintImage from '../Images/footprint.png'; // Import your image

// Sample client reviews data
const clientReviewsData = [
    { id: 1, name: "John Doe", review: "I am extremely satisfied with the care my pet received at Pet Paws Animal Clinic. The staff were knowledgeable, compassionate, and attentive to my pet's needs. I highly recommend their services." },
    { id: 2, name: "Jane Smith", review: "Pet Paws Animal Clinic provided excellent veterinary care for my furry friend. The veterinarians were thorough in their examinations and took the time to answer all of my questions. I'm grateful for their expertise and dedication." },
    { id: 3, name: "Alice Johnson", review: "My experience at Pet Paws Animal Clinic was fantastic. The facility is clean and well-maintained, and the staff are friendly and professional. I trust them with my pet's health and will continue to bring my pet here for veterinary care." }
  ];
  

const ClientReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentReview, setCurrentReview] = useState(clientReviewsData[currentReviewIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % clientReviewsData.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentReview(clientReviewsData[currentReviewIndex]);
  }, [currentReviewIndex]);

  return (
    <div className="client-reviews-card">
      <div className="wave-shape"></div>
      <h2>Client Reviews</h2>
      <img src={dogFootprintImage} alt="Dog Footprint" className="dog-footprint-image" />
      <div className="review">
        <p>{currentReview.review}</p>
        <p>- {currentReview.name}</p>
      </div>
    </div>
  );
}

export default ClientReviews;
