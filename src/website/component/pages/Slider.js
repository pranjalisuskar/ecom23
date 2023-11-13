import React, { useEffect, useState } from 'react'
// import { Carousel } from 'react-bootstrap'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Slider = () => {
  const [Brand, SetBrand] = useState([]);
  const [Featured, setFeatured] = useState([]);
  const [product, setproduct] = useState([]);
  const getproduct =()=>{
    fetch(`https://vsmart.ajspire.com/api/products`).then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        setproduct(data.products.data)
        console.log("wer",data.products.data)
      }
    )
  }

 

  const Getbrand = () => {
    fetch('https://vsmart.ajspire.com/api/brands')
      .then((response) => response.json())
      .then((data) => {
        SetBrand(data.brands);
      });
  };
  const getfeature = () => {
    fetch('https://vsmart.ajspire.com/api/products').then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        setFeatured(data.products.data)
        console.log(data.products.data)
      }
    )
  }

  useEffect(()=>{
    getfeature ();
    getproduct();
    Getbrand ();
  },[])
  // const sliderImages = [
  //   {
  
  //     url: "https://www.pixelworks.in/wp-content/uploads/2022/07/Neha-Pravin-Wedding-Pixelworks-164-2-1.jpg", className: '',
  //     key: 'image1',
  //   },
  //   {
  //     url: "https://cdn0.weddingwire.in/vendor/1377/3_2/960/jpg/weddings-by-orduo-31_15_251377-1567589692.jpeg",
  //     key: 'image2',
  //   },
  //   {
  //     url: "https://cdn0.weddingwire.in/article/9679/original/1280/jpg/79769-maharashtrian-wedding-reflexions-by-ns-saat-phere.jpeg",
  //     key: 'image3',
  
  
  //   },
  // ]
  return (
    <div >
  {/* <div > */}
 
  <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
  <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="img/carousel-1.jpg" alt="Image" />
        <div className="carousel-caption">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7">
                <h1 className="display-2 mb-3 animated slideInDown">Organic Food Is Good For Health</h1>
                <a href="#" className="btn btn-primary rounded-pill py-2 px-4 mb-2">Products</a>
                <a href="#" className="btn btn-secondary rounded-pill py-2 px-4 mb-2 ms-2">Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="img/carousel-2.jpg" alt="Image" />
        <div className="carousel-caption">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7">
                <h1 className="display-2 mb-3 animated slideInDown">Natural Food Is Always Healthy</h1>
                <a href="#" className="btn btn-primary rounded-pill py-2 px-4 mb-2">Products</a>
                <a href="#" className="btn btn-secondary rounded-pill py-2 px-4 mb-2 ms-2">Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

<div>
  <h1>Best Deals</h1>
</div>

<div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container">
    <h1 className="display-3 mb-3 animated slideInDown"></h1>
    <nav aria-label="breadcrumb animated slideInDown">
      <ol className="breadcrumb mb-0 ">
        {/* <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
        <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
        <li className="breadcrumb-item text-dark active" aria-current="page">About Us</li> */}
      </ol>
    </nav>
  </div>
</div>






<div className="container-fluid bg-light bg-icon my-5 py-6">
  <div className="container">
    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
      <h1 className="display-5 mb-3">Our Features</h1>
      <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
    </div>
    <div className="row g-4">
    {Featured.filter((featured) => featured.featured === 0).slice(0, 11).map((featured) => (
      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">

        <div className="bg-white text-center ">
          <img className="img-fluid imh " src={featured.product_image} alt={featured.product_name}  />
          <h4 className="mb-3">{featured.category_name}</h4>
          {/* <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p> */}
          <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href>Read More</a>
        </div>
        
      </div>
      ))
    }
      
     
    </div>
  </div>
</div>




<div className="container-xxl py-5">
  <div className="container">
    <div className="row g-0 gx-5 align-items-end">
      <div className="col-lg-6">
        <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
          <h1 className="display-5 mb-3">Our Products</h1>
          <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
      </div>
      <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
          <li className="nav-item me-2">
            <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Vegetable</a>
          </li>
          <li className="nav-item me-2">
            <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>
          </li>
          <li className="nav-item me-0">
            <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="tab-content">
      <div id="tab-1" className="tab-pane fade show p-0 active">
        <div className="row g-4">
        {
        product.slice(0, 20).map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-item">
              <div className="position-relative bg-light overflow-hidden">
                <img className="img-fluid w-100"src={item.product_image} alt={item.product_name}  />
                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">&#8377;{item.mrp_price - item.sale_price}</div>
              </div>
              <div className="text-center p-4">
                <a className="d-block h5 mb-2" href>{item.english_name}</a>
                <span className="text-primary me-1">{item.sale_price}</span>
                <span className="text-body text-decoration-line-through">${item.online_price}</span>
              </div>
              <div className="d-flex border-top">
                <small className="w-50 text-center border-end py-2">
                  <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                </small>
                <small className="w-50 text-center py-2">
                  <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                </small>
              </div>
            </div>
          </div>
          ))
        }
         
       
         
         
        
        
         
        
        </div>
      </div>
     
     
    </div>
  </div>
</div>
<div>
  <h1>Shop brand</h1>
  <AliceCarousel
    mouseTracking
    items={Brand.map((subslider) => (
      <div
        className="col-lg-4 col-md-4 col-sm-4 col-xs-4"
        key={subslider.brand_banner}
        style={{ marginRight: '0', marginLeft: '0' }} // Remove margin
      >
        <div
          className="shop-cat-box"
          style={{ height: '200px', width: '200px', justifyContent: 'space-between' }}
        >
          <img
            src={subslider.brand_banner}
            alt={subslider.brand_name}
            className="slider-image"
            style={{ height: '200px' }}
          />
          <a className="btn hvr-hover" href="#">
            {subslider.brand_name}
          </a>
        </div>
      </div>
    ))}
    dotsDisabled={true} // Hide slide dots
    responsive={{
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 4 },
    }}
    autoPlay
    autoPlayInterval={3000}
    infinite
  />
</div>





    </div>
  )
}

export default Slider