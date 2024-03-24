import React from 'react';
import { Link } from 'react-router-dom';
import './PetShop.css'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Pagination from '../Components/Pagination';

const Petshop = () => {
const totalPages = 4;

  // Function to handle clicking the "View More" button
  const handleViewMoreClick = (productId) => {
    // Navigate to the related product page with the specific product ID
    window.location.href = `petshop/${productId}`;
};

  return (
    <div>
      <Navbar />
      <div className="petshop-page">
      <div className="sort-container">
          <select className="sort-dropdown">
            <option value="default">Default Sort</option>
            <option value="priceLowToHigh">Sort by popularity</option>
            <option value="priceHighToLow">Sort by avrage rating</option>
            <option value="newest">Sort by latest</option>
            <option value="newest">Sort by price:low to high</option>
          </select>
        </div>
        <p className="title">Showing 1-20 of 100 results</p>
        <div className="product-container">
          {/* First row of products */}
          <div className="product-card" id="product1">
            <img src="https://pbs.twimg.com/media/E9h3sqwUcAo6cTS.jpg" alt="Product 1" />
            <p className="product-name">Sample Product 1</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(1)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>

          <div className="product-card" id="product2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZUTI1TmbZxC5R1dQV9C3vU4OiarR454tBf0DHU_1ONfz4iZx8kPcCxBUjzu1wT2L3PU&usqp=CAU" alt="Product 2" />
            <p className="product-name">Sample Product 2</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(2)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card" id="product3">
            <img src="https://m.media-amazon.com/images/I/81Zc6OonZWL.jpg" alt="Product 3" />
            <p className="product-name">Sample Product 3</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(3)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card" id="product4">
            <img src="https://m.media-amazon.com/images/I/71A5LFZATKL._AC_UF894,1000_QL80_.jpg" alt="Product 4" />
            <p className="product-name">Sample Product 4</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(4)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Second row of products */}
        <div className="product-container">
          {/* First row of products */}
          <div className="product-card" id="product5">
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/2acf4960-4f58-41ec-88d0-ff55d70ac35f.__CR0,0,1250,1250_PT0_SX300_V1___.jpg" alt="Product 1" />
            <p className="product-name">Sample Product 1</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(5)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card" id="product6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNZL_cW97F8k2BYgG-48Qf33FOJ0vRLh8UCNAPax_OgiqY6MVEj2qkbv-f-FdGu16wHM&usqp=CAU" alt="Product 2" />
            <p className="product-name">Sample Product 2</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(6)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card" id="product7">
            <img src="https://di2ponv0v5otw.cloudfront.net/posts/2023/08/17/64de6a6d8d7a3ca2e637b36b/m_64de6a6ec1c3466bb152b3bb.jpg" alt="Product 3" />
            <p className="product-name">Sample Product 3</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(7)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card" id="product8">
            <img src="https://media.entertainmentearth.com/assets/images/f976156b83ed4823901da9563d5f5e27lg.jpg" alt="Product 4" />
            <p className="product-name">Sample Product 4</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(8)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Third row of products */}
        <div className="product-container" id="product9">
          {/* First row of products */}
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/71A5LFZATKL._AC_UF894,1000_QL80_.jpg" alt="Product 1" />
            <p className="product-name">Sample Product 1</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(9)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card" id="product10">
            <img src="https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw2108ccfe/images/D4B4C950_1.jpg?sw=767&sh=767&sm=fit" alt="Product 2" />
            <p className="product-name">Sample Product 2</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(10)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card" id="product11">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYfsQtwqOiCO7ghPMOAIRNB-YBfZVamqb0OaLlWBn9AjIvR1t8rB8IUCL_0N_XKkD4c4&usqp=CAU" alt="Product 3" />
            <p className="product-name">Sample Product 3</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(11)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card" id="product12">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUO0q387iK00nQyEVb_TIVQB7tFxNtIJOoZGqdSOQY00J_VCQl10TJ7UY6P9zD9_FrxA&usqp=CAU" alt="Product 4" />
            <p className="product-name">Sample Product 4</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(12)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Fourth row of products */}
        <div className="product-container">
          {/* First row of products */}
          <div className="product-card" id="product13">
            <img src="https://m.media-amazon.com/images/I/715rdrCzfYL._AC_SL1500_.jpg" alt="Product 1" />
            <p className="product-name">Sample Product 1</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(13)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>

          <div className="product-card" id="product14">
            <img src="https://m.media-amazon.com/images/I/81U9hVFP2FL._AC_UF894,1000_QL80_.jpg" alt="Product 2" />
            <p className="product-name">Sample Product 2</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(14)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card" id="product15">
            <img src="https://m.media-amazon.com/images/I/81364tLFfIL._AC_UF894,1000_QL80_.jpg" alt="Product 3" />
            <p className="product-name">Sample Product 3</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(15)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card" id="product16">
            <img src="https://i5.walmartimages.com/asr/00b226e2-c408-444f-b154-ca8d6e0739a6.15c755d0e6f6cea87954b2751d342441.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="Product 4" />
            <p className="product-name">Sample Product 4</p>
            <p className="product-price">Rs 600.00</p>
            <div className="overlay">
            <Link to="/petshop"> {/* Link to the related product page */}
                <button className="view-more" onClick={() => handleViewMoreClick(16)}>View More</button>
            </Link>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <Pagination totalPages={totalPages} />
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
