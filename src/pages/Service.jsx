import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


function Service({children}){

    return(
    <div>
        <Nav />
        {
            children
        }
        <Footer />
    </div>
    );

}

export default Service;