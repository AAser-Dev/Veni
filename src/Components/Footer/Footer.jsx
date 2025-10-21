import React from 'react'
import './Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center ">
            <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <i className="bi bi-house-heart-fill fs-4"></i>
            </Link>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2025 Phoenix Chemical Industries and Trade LLC
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary fs-4" href="https://www.instagram.com/phnxchem/" target='_blank' aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary fs-4" href="https://www.facebook.com/share/17V2JZcy5F/?mibextid=wwXIfr" target='_blank' aria-label="Facebook">
                <i className="bi bi-facebook text-primary"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary fs-4" href="#" aria-label="Twitter">
                <i className="bi bi-twitter-x "></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Footer
