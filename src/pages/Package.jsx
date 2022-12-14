import React,{ useEffect, useState } from 'react';
import Service from './Service';
import { useParams } from 'react-router-dom';
import url from '../url';

function Package(){

    const { id } = useParams();
    const [packag, setPackag] = useState({image:{img:""}});


    useEffect(()=>{

        fetch(`${url}/package/${id}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
            if(data.status === true){
                setPackag(data.data);
            }
        });

    },[id]);




    return(
        <Service>
            <div className=' md:px-16'>
                <h1 className=' w-full text-center text-3xl underline text-red-600 py-16'>{packag.name}</h1>
                <div className=' w-full h-auto pb-16'>
                    <img className=' w-full md:w-[450px] lg:w-[600px] xl:w-[700px] h-80 float-right ml-4' src={packag.image.img} alt="" />
                        <div className=' p-4 clear-left text-justify'  dangerouslySetInnerHTML={{ __html: packag.details }}>

                        </div>
                </div>
                </div>
        </Service>
    )
}

export default Package;