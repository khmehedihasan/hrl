import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useSelector } from 'react-redux';

function About(){
    const info = useSelector((state) => state.info);
    return(
    <div>
        <Nav />
        <div className=' md:p-16'>
            <h1 className=' w-full text-center text-3xl underline text-red-600 py-16'>About Us</h1>
            <div className=' w-full h-auto pb-16 flex flex-col items-start md:flex-row'>
                <div className=' w-full md:w-[450px] lg:w-[600px] xl:w-[700px] block shrink-0 h-80 bg-bg-1 bg-center bg-cover bg-no-repeat mt-7'></div>
                <div>
                    <p className=' w-full p-6 text-justify'>{info.about}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );

}

export default About;