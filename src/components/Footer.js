import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <ul className="footer-nav-left">
                        <li><Link to="/about-us">About us</Link></li>
                        <li><Link to="/episodes">Episodes</Link></li>
                        <li><a href="https://twitter.com/ParkwayPolitics" target="_blank">@ParkwayPolitics</a></li>
                        <li><a href="https://soundcloud.com/parkwaypolitics" target="_blank">Soundcloud</a></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <ul className="footer-nav-right">
                        <li>&nbsp;</li>
                        <li>Copyright &copy; 2018 by Parkway Politics</li>
                        <li>Website designed and built by <a href="http://www.jayleshpatel.com" target="_blank">Jay Patel</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;