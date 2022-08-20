import React, { useState } from "react";
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

function Nav(){
    const [drop, setDrop] = useState('hidden');
    return(<>
        <div className=" w-full h-10 bg-red-600 md:px-16 text-white text-sm flex items-center justify-between">
            <div><i className="fa-solid fa-location-dot"></i><span> House 40, Road 06, Block C, Banasree, Rampura 1219 Dhaka, Bangladesh</span></div>
            <div><span>Help: </span> <i className="fa-solid fa-phone"></i><a href="tel:+88-02224405634"> 88-02224405634</a></div>
        </div>
        <div className="  sticky top-0 left-0">
            <nav className=" w-full h-16 shadow-md bg-slate-100 md:px-16 flex items-center justify-between">
                <div className="">
                    <NavLink to="/"> <img className=" h-14" src={logo} alt="" /></NavLink>
                </div>
                <div className=" w-96 h-16 flex items-center gap-4">
                    <NavLink className={({isActive })=>isActive? "py-[2px] px-1 rounded-md bg-red-600 border-2 border-transparent text-white":" px-1 rounded-md py-[2px] border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"} to="/">Home</NavLink>
                    <NavLink className={({isActive })=>isActive? "py-[2px] px-1 rounded-md inline-block bg-red-600 border-2 border-transparent text-white":" px-1 rounded-md py-[2px] border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"}  to="/about">About Us</NavLink>
                    <NavLink onClick={(e)=>e.preventDefault()} onMouseEnter={()=>setDrop('block')} onMouseLeave={()=>setDrop('hidden')} className={({isActive })=>isActive? "py-[2px] px-1 rounded-md bg-red-600 border-2 border-transparent text-white":" px-1 rounded-md py-[2px] border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"} to="/service">
                        Our Service
                        <div onMouseEnter={()=>setDrop('block')} className=" w-24 h-4 absolute bg-none">

                        </div>
                        <div onMouseLeave={()=>setDrop('hidden')} className={`${drop} w-52 absolute top-14 py-2 px-1 rounded-md bg-red-600 flex gap-2 flex-col text-white`}>
                            <NavLink className={({isActive})=> isActive?"bg-red-700 pl-2 rounded-md":" hover:bg-red-700 pl-2 rounded-md"} to="/service/visa">Visa</NavLink>
                            <NavLink className={({isActive})=> isActive?"bg-red-700 pl-2 rounded-md":" hover:bg-red-700 pl-2 rounded-md"} to="/service/visit">Visit</NavLink>
                            <NavLink className={({isActive})=> isActive?"bg-red-700 pl-2 rounded-md":" hover:bg-red-700 pl-2 rounded-md"} to="/service/airTicket">Air Ticket</NavLink>
                            <NavLink className={({isActive})=> isActive?"bg-red-700 pl-2 rounded-md":" hover:bg-red-700 pl-2 rounded-md"} to="/service/hajj">Hajj</NavLink>
                            <NavLink className={({isActive})=> isActive?"bg-red-700 pl-2 rounded-md":" hover:bg-red-700 pl-2 rounded-md"} to="/service/omra">Omra</NavLink>
                            <NavLink className={({isActive})=> isActive?"bg-red-700 pl-2 rounded-md":" hover:bg-red-700 pl-2 rounded-md"} to="/service/tour">Tour</NavLink>

                        </div>
                    </NavLink>
                    <NavLink className={({isActive })=>isActive? "py-[2px] px-1 rounded-md bg-red-600 border-2 border-transparent text-white":" px-1 rounded-md py-[2px] border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"} to="/contact">Contact Us</NavLink>
                </div>
            </nav>
        </div>
        </>)
}

export default Nav;