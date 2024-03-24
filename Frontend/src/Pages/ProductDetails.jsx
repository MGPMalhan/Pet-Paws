import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./ProductDetails.css";

const ProductDetails = () => {
  // Use useParams to get the dynamic ID from the URL
  let { id } = useParams();

  // Define state variables to store product details
  const [product, setProduct] = useState(null);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  useEffect(() => {
    const getProductDetails = async () => {
      const products = [
        {
          id: "1",
          name: "Dog Food Premium Blend",
          price: "Rs 600.00",
          imageUrl: "https://pbs.twimg.com/media/E9h3sqwUcAo6cTS.jpg",
        },
        {
          id: "2",
          name: "Cat Toy Bundle Pack",
          price: "Rs 600.00",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZUTI1TmbZxC5R1dQV9C3vU4OiarR454tBf0DHU_1ONfz4iZx8kPcCxBUjzu1wT2L3PU&usqp=CAU",
        },
        {
          id: "3",
          name: "Bird Cage with Stand",
          price: "Rs 600.00",
          imageUrl: "https://m.media-amazon.com/images/I/81Zc6OonZWL.jpg",
        },
        {
          id: "4",
          name: "Aquarium Starter Kit",
          price: "Rs 600.00",
          imageUrl:
            "https://m.media-amazon.com/images/I/71A5LFZATKL._AC_UF894,1000_QL80_.jpg",
        },
        {
          id: "5",
          name: "Hamster Wheel and House Set",
          price: "Rs 600.00",
          imageUrl:
            "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2acf4960-4f58-41ec-88d0-ff55d70ac35f.__CR0,0,1250,1250_PT0_SX300_V1___.jpg",
        },
        {
          id: "6",
          name: "Turtle Tank with Basking Platform",
          price: "Rs 600.00",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNZL_cW97F8k2BYgG-48Qf33FOJ0vRLh8UCNAPax_OgiqY6MVEj2qkbv-f-FdGu16wHM&usqp=CAU",
        },
        {
          id: "7",
          name: "Rabbit Hutch with Run",
          price: "Rs 600.00",
          imageUrl:
            "https://di2ponv0v5otw.cloudfront.net/posts/2023/08/17/64de6a6d8d7a3ca2e637b36b/m_64de6a6ec1c3466bb152b3bb.jpg",
        },
        {
          id: "8",
          name: "Guinea Pig Starter Kit",
          price: "Rs 600.00",
          imageUrl:
            "https://media.entertainmentearth.com/assets/images/f976156b83ed4823901da9563d5f5e27lg.jpg",
        },
        {
          id: "9",
          name: "Fish Tank Decor Set",
          price: "Rs 600.00",
          imageUrl:
            "https://m.media-amazon.com/images/I/71A5LFZATKL._AC_UF894,1000_QL80_.jpg",
        },
        {
          id: "10",
          name: "Snake Terrarium Kit",
          price: "Rs 600.00",
          imageUrl:
            "https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw2108ccfe/images/D4B4C950_1.jpg?sw=767&sh=767&sm=fit",
        },
        {
          id: "11",
          name: "Ferret Cage with Accessories",
          price: "Rs 600.00",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYfsQtwqOiCO7ghPMOAIRNB-YBfZVamqb0OaLlWBn9AjIvR1t8rB8IUCL_0N_XKkD4c4&usqp=CAU",
        },
        {
          id: "12",
          name: "Hedgehog Habitat Bundle",
          price: "Rs 600.00",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUO0q387iK00nQyEVb_TIVQB7tFxNtIJOoZGqdSOQY00J_VCQl10TJ7UY6P9zD9_FrxA&usqp=CAU",
        },
        {
          id: "13",
          name: "Gerbil Starter Set",
          price: "Rs 600.00",
          imageUrl:
            "https://m.media-amazon.com/images/I/715rdrCzfYL._AC_SL1500_.jpg",
        },
        {
          id: "14",
          name: "Chinchilla Cage with Exercise Wheel",
          price: "Rs 600.00",
          imageUrl:
            "https://m.media-amazon.com/images/I/81U9hVFP2FL._AC_UF894,1000_QL80_.jpg",
        },
        {
          id: "15",
          name: "Tarantula Enclosure Kit",
          price: "Rs 600.00",
          imageUrl:
            "https://m.media-amazon.com/images/I/81364tLFfIL._AC_UF894,1000_QL80_.jpg",
        },
        {
          id: "16",
          name: "Hermit Crab Tank Starter Set",
          price: "Rs 600.00",
          imageUrl:
            "https://i5.walmartimages.com/asr/00b226e2-c408-444f-b154-ca8d6e0739a6.15c755d0e6f6cea87954b2751d342441.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        },
      ];

      // Find the product with the matching ID
      const selectedProduct = products.find((product) => product.id === id);

      // Update state with the selected product
      setProduct(selectedProduct);
    };

    getProductDetails();
  }, [id]);

  const handlePurchaseClick = () => {
    setShowPaymentPopup(true);
  };

  const handleClosePaymentPopup = () => {
    setShowPaymentPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", paymentDetails);
    setShowPaymentPopup(false);
  };

  return (
    <div>
      <Navbar />
      <div className="product-details-container">
        {product && (
          <div className="product-image">
            <img src={product.imageUrl} alt={product.name} />
          </div>
        )}
        <div className="product-description">
          {product ? (
            <div>
              <p className="Product-Name">{product.name}</p>
              <p className="Product-details">Product Details</p>
              <p className="Product-content">
                Turtle Tank with Basking Platform is a spacious and durable
                habitat designed specifically for pet turtles. It features a
                large, easy-to-clean tank made of high-quality acrylic material,
                providing ample swimming space for your turtle. The built-in
                basking platform provides a comfortable area for your turtle to
                climb out of the water and bask under a heat lamp or UVB light.
                The tank also includes a filtration system to keep the water
                clean and healthy for your pet. With its sturdy construction and
                thoughtful design, this turtle tank offers a perfect home for
                your aquatic friend.
              </p>
              <p className="Product-price">Product Price: {product.price}</p>
              <button className="purchase" onClick={handlePurchaseClick}>
                Purchase
              </button>

              {/* Payment popup */}
              {showPaymentPopup && (
                <div className="payment-popup">
                  <div className="payment-popup-content">
                    <div className="payment-left-column">
                    <button onClick={handleClosePaymentPopup}>close</button>
                      <h2>Personal Information</h2>
                      <form className="paymentForm" onSubmit={handleSubmit}>
                        <h3>Personal Information</h3>

                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Contact"
                          />
                        </div>
                        <h3>Shipping Address</h3>
                        <div className="form-row">
                          <div className="form-group">
                            <input
                              type="text"
                              id="address"
                              name="address"
                              placeholder="Address"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              id="postalCode"
                              name="postalCode"
                              placeholder="Postal Code"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              id="city"
                              name="city"
                              placeholder="City"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              id="province"
                              name="province"
                              placeholder="Province"
                            />
                          </div>
                        </div>
                        <h3>Payment Methods</h3>
                        <div className="form-group">
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="cash"
                              />
                              Cash on Delivery
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="credit"
                              />
                              Credit, Debit, or PayPal
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="payment-right-column">
                      <div className="credit-card">
                        <h3>Credit Card Details</h3>
                        <div className="form-group">
                          <div>
                            <input
                              type="text"
                              id="cardHolderName"
                              name="cardHolderName"
                              className="form-control"
                              placeholder="Card Holder Name"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              className="form-control"
                              placeholder="Card Number"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col">
                            <input
                              type="text"
                              id="expiryDate"
                              name="expiryDate"
                              className="form-control"
                              placeholder="Expiry Date"
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              className="form-control"
                              placeholder="CVV"
                            />
                          </div>
                        </div>
                      </div>
                      <h3>Item</h3>
                      {/* Display item details */}
                      <div className="item-details">
                        {/* Sample product 1 */}
                        <div className="products">
                          <img
                            src="https://pbs.twimg.com/media/E9h3sqwUcAo6cTS.jpg"
                            alt="Product"
                            className="product-images"
                          />
                          <div className="product-infos">
                            <p className="product-names">
                              Dog Food Premium Blend
                            </p>
                            <p className="product-prices">Price: Rs 600.00</p>
                          </div>
                        </div>
                        {/* Sample product 2 */}
                        <div className="products">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZUTI1TmbZxC5R1dQV9C3vU4OiarR454tBf0DHU_1ONfz4iZx8kPcCxBUjzu1wT2L3PU&usqp=CAU"
                            alt="Product"
                            className="product-images"
                          />
                          <div className="product-infos">
                            <p className="product-names">Cat Toy Bundle Pack</p>
                            <p className="product-prices">Price: Rs 600.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="subtotal">
                        <p className="subtotals">Subtotal: Rs 1200.00</p>
                        <p className="discount">Discount: Rs 0.00</p>
                        <hr></hr>
                        <p className="total">Total: Rs 1200.00</p>
                      </div>
                      <button
                        className="checkout"
                        type="submit"
                        onClick={handleClosePaymentPopup}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="product-actions">
                {/* <div className="delivery-option">
                  <p>Delivery Option</p>
                </div> */}
                <div className="quantity-input">
                  <button>-</button>
                  <input type="text" value="1" readOnly />
                  <button>+</button>
                </div>
                <button className="add-to-cart-product">Add to Cart</button>
                <div className="star-rating">
                  <p>Ratings</p>
                  <div className="stars">
                    <span className="star filled"></span>
                    <span className="star filled"></span>
                    <span className="star filled"></span>
                    <span className="star filled"></span>
                    <span className="star"></span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
