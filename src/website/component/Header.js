import React from 'react'

const Header = () => {
  return (
    <div>
       <div className="py-1 bg-primary">
  <div className="container">
    <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
      <div className="col-lg-12 d-block">
        <div className="row d-flex">
          <div className="col-md pr-4 d-flex topper align-items-center">
            <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
            <span className="text">+ 1235 2355 98</span>
          </div>
          <div className="col-md pr-4 d-flex topper align-items-center">
            <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
            <span className="text">youremail@email.com</span>
          </div>
          <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
            <span className="text">3-5 Business days delivery &amp; Free Returns</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Navigation bar with Bootstrap classes for responsiveness */}
<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
  <div className="container">
    {/* Brand/logo */}
    <a className="navbar-brand" href="index.html">Vegefoods</a>
    {/* Toggle button for mobile menu */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="oi oi-menu" /> Menu
    </button>
    {/* Navigation links */}
    <div className="collapse navbar-collapse" id="ftco-nav">
      <ul className="navbar-nav ml-auto">
        {/* Home link */}
        <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
        {/* Shop dropdown */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
          <div className="dropdown-menu" aria-labelledby="dropdown04">
            <a className="dropdown-item" href="shop.html">Shop</a>
            <a className="dropdown-item" href="wishlist.html">Wishlist</a>
            <a className="dropdown-item" href="product-single.html">Single Product</a>
            <a className="dropdown-item" href="cart.html">Cart</a>
            <a className="dropdown-item" href="checkout.html">Checkout</a>
          </div>
        </li>
        {/* About link */}
        <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
        {/* Blog link */}
        <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
        {/* Contact link */}
        <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
        {/* Cart link with item count */}
        <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart" />[0]</a></li>
      </ul>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Header