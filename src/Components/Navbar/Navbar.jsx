import React from 'react'
import './Navbar.css'
import logo from '../images/df37d62e-e785-410e-b2de-0ecbc017d663.jpeg'
import logo2 from '../images/2025-10-04_09-57.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  return (
      <>
     <div className="container">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
    <div className="col-md-3 mb-2 mb-md-0">
      <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        <img src={logo} alt="Veni Logo" className='img-fluid' style={{ maxHeight: '65px' }} />
      </Link>
    </div>
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><Link to="/" className={`nav-link px-3 ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
      <li><Link to="/about" className={`nav-link px-3 ${location.pathname === '/about' ? 'active' : ''}`}>About us</Link></li>
      <li><Link to="/products" className={`nav-link px-3 ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link></li>
      <li><Link to="/contact" className={`nav-link px-3 ${location.pathname === '/contact' ? 'active' : ''}`}>Contact us</Link></li>
    </ul>
    <div className=" col-lg-3 text-end"> 
      <img src={logo2} alt="Veni Brand Logo" style={{ maxHeight: '60px' }} />
    </div>
  </header>
</div>

      
      </>
  )
}

export default Navbar
