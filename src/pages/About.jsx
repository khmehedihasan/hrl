import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


function About(){

    return(
    <div>
        <Nav />
        <div className=' md:p-16'>
            <h1 className=' w-full text-center text-3xl underline text-red-600 py-16'>About Us</h1>
            <div className=' w-full h-auto pb-16 flex'>
                <div className=' w-[500px] block shrink-0 h-80 bg-bg-1 bg-center bg-cover bg-no-repeat'></div>
                <div>
                    <p className=' w-full p-6 text-justify'>Holy Review International is inspired by the explorers like you, who go every day with the passion of discovering the unseen. Wherever you want to travel, find hotels, flights, buses, tours, Visa Process, and more in Holy Review International, and get ready for your explorations. Holyday Review offers easy booking for Flight, Hotel, Package (Flight + Hotel), Airport Transport, Visa Process and Xperience (Activities & Attractions), all at your fingertips.</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );

}

export default About;