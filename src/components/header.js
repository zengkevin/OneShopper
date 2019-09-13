//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"
//import SEO from "../components/seo"
import logo from "../images/legendage-logo.png"

import Language from "./language"
import { Link, FormattedMessage } from "gatsby-plugin-intl"


const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-2 align-self-center">
          <Link className="header-logo" to="/"><img src={logo} alt="logo"></img></Link>
        </div>
        <div className="col-sm-12 col-md-8 align-self-center">
          <nav>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/"><FormattedMessage id="home" /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs"><FormattedMessage id="blogs" /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store"><FormattedMessage id="store" /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"><FormattedMessage id="about" /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us"><FormattedMessage id="contact" /></Link>
              </li>
            </ul>
            <div className="header-cart">
              <Link className="Header__summary snipcart-summary snipcart-checkout" to="#">
                <i className="fas fa-cart-plus"></i>
              </Link>
            </div>
          </nav>
        </div>
        <div className="col-sm-12 col-md-2 align-self-right">
          <Language />
        </div>
      </div>
    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
