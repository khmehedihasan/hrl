import React from 'react';
import { NavLink } from 'react-router-dom';

const d = new Date();
const year = d.getFullYear();

function Footer(){
    return(
        <div className=' w-full bg-slate-600'>
            <div className=' w-full md:px-36 flex justify-between'>
                    <div className=' w-full h-60 pt-8 flex'>
                    <div className=' w-72 h-auto  text-center text-white flex flex-col gap-4'>
                        <h1 className=' text-lg'> Holy Review</h1>
                        <h3>Connect With Our Social Media</h3>
                        <div className=' flex gap-4 justify-center text-3xl'>
                            <a href="https://www.facebook.com/Holyreview/?ref=page_internal" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook"></i></a>
                            <a href=" " target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-youtube"></i></a>
                            <a href=" " target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href=" " target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className=' w-72 h-auto  text-center text-white flex flex-col gap-4'>
                        <h1>OTHER PAGES</h1>
                        <NavLink to="/about" ><h1>About Us</h1></NavLink>
                        
                        <NavLink to="/service" ><h1>Our Services</h1></NavLink>
                        
                        <NavLink to="/contact" ><h1>Contact Us</h1></NavLink>
                        
                    </div>
                    <div className=' w-80 h-auto text-white flex flex-col gap-2 md:-mr-16'>
                        <h1>CONTACT US</h1>
                        <div><i className="fa-solid fa-phone"></i> <a href="tel:+8802224405634">+8802224405634</a></div>
                        <div><i className="fa-solid fa-envelope"></i> <a href="mailto:holyreview99@gmail.com">holyreview99@gmail.com</a></div>
                        <div><i className="fa-solid fa-location-dot"></i> <span className=' pl-1 italic'>House No: 40 (Ground Floor), Road : 06, Block : C, Banasree, Rampura 1219 Dhaka, Dhaka Division, Bangladesh</span></div>
                    </div>
                </div>
            </div>
            <div className=' bg-slate-800 text-white text-center'>Copyright {year} | Holy Review | All Rights Reserved</div>
        </div>
    )
}

export default Footer;