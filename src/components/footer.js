import React from "react"
//import { Link } from "gatsby"
import { Link, FormattedMessage } from "gatsby-plugin-intl"

class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="footer_inner">
                    <div className="container">
                        <div className="footer-widget footer-content">
                            <section id="nav_menu-8" className="widget widget_nav_menu">
                                <div className="menu-main-container">
                                    <ul id="menu-main" className="menu">
                                        <li><Link to="/about"><FormattedMessage id="about" /></Link></li>
                                        <li><Link to="/blogs"><FormattedMessage id="blogs" /></Link></li>
                                        <li><Link to="/store"><FormattedMessage id="store" /></Link></li>
                                        <li><Link to="/contact-us"><FormattedMessage id="contact" /></Link></li>
                                        <li><Link to="/copyright"><FormattedMessage id="copyright" /></Link></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="footer-bottom social-right-menu ">
                            <div className="site-info">
                                ©2019 ITHome <FormattedMessage id="all_rights_reserved" />.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
