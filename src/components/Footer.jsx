import React from 'react';
import { useSelector } from 'react-redux';
import logo2 from '../assets/images/Logo-2.png';



function Footer(){

    const info = useSelector((state) => state.info);

    const d = new Date();
    const year = d.getFullYear();




    return(<>
        {/* <div className=' h-[400px]'>
            
        </div> */}
        <div className=' w-full bg-pink-100 '>
            <div className=' w-full p-2 mx-auto md:w-[700px] lg:w-[1000px] flex flex-col md:flex-row justify-between'>
                    <div className=' w-full h-auto md:h-60 pt-8 flex items-center flex-col md:flex-row justify-between gap-10 md:gap-0'>
                    <div className=' w-72 h-auto  text-center text-black flex flex-col justify-center items-center gap-4'>
                        <img className=' w-[200px]' src={logo2} alt=" " />
                        {/* <h1 className=' text-2xl uppercase'> Holy Review</h1> */}
                    </div>
                    <div className=' w-72 h-auto  text-center text-black flex flex-col justify-center items-center gap-4'>
                        {/* <h1 className=' text-2xl'>OTHER PAGES</h1>
                        <NavLink to="/about" ><h1>About Us</h1></NavLink>
                        
                        <NavLink to=" " ><h1>Our Services</h1></NavLink>
                        
                        <NavLink to="/contact" ><h1>Contact Us</h1></NavLink> */}

                        <h3>Connect With Our Social Media</h3>
                        <div className=' flex gap-4 justify-center text-3xl'>
                            <a href="https://www.facebook.com/Holyreview/?ref=page_internal" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook"></i></a>
                            <a href=" " target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-youtube"></i></a>
                            <a href=" " target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href=" " target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        
                    </div>
                    <div className=' w-80 h-auto text-black text-center md:text-left flex flex-col gap-2 md:-mr-16'>
                        <div><i className="fa-solid fa-envelope"></i> <a href={`mailto:${info.email}`}>{info.email}</a></div>
                        <div><i className="fa-solid fa-location-dot"></i> <span className=' pl-1 italic'>{info.address}</span></div>
                    </div>
                </div>
            </div>
            <div className=' bg-black text-white text-center'>Copyright {year} | Holy Review | All Rights Reserved</div>
        </div>
    </>)
}

export default Footer;