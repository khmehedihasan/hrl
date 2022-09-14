import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ServiceSlider from '../components/slider';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Home(){

    const category = useSelector((state) => state.category);


    return(
    <div>
       <Nav /> 
       {/* <div className=' w-full h-[500px] block shrink-0 bg-bg-banner bg-center bg-cover bg-no-repeat'></div> */}
       <div className=' z-0'>
            <ServiceSlider />
       </div>

       {
            category.map((data,index)=>{
                return(
                    <div key={index} className=" mt-10">
                        <h1 className=' text-center text-xl text-red-600 mt-5 mb-10 border-b border-red-600'><span className=' '>{data.name}</span></h1>
                        <div className=' w-full h-auto flex flex-wrap justify-center gap-10'>
                        {
                            data.packages.map((data,index)=>{
                                if(index === 4){
                                    return("");
                                }
                                return(
                                        <NavLink key={index} className=" w-[350px] h-[250px] md:w-[400px] md:h-[300px] inline-block" to={"/package/"+data._id}>
                                            <div  className="w-[350px] h-[250px] md:w-[400px] md:h-[300px] relative rounded-md ">
                                                <img className=' w-full h-full rounded-md' src={data.image.img} alt=" " />
                                                <h1 className=' text-center'>{data.name}</h1>
                                            </div>
                                        </NavLink>
                                    )
                            })
                        }
                        </div>
                        <div className=' w-full flex justify-end px-4'>
                            <NavLink className=" text-red-600 italic mt-5" to={"/service/"+data._id}>Show more...</NavLink>
                        </div>
                    </div>
                    );
            })
       }
       

       <Footer />
    </div>
    );

}

export default Home;