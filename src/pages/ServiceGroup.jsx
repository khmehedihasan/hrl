import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import url from '../url';
import Service from './Service';

function ServiceGroup(){
    const { id } = useParams();
    const [packag, setPackag] = useState([]);

    useEffect(()=>{

        fetch(`${url}/package/search?page=${0}&limit=${0}&search=${id}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
            if(data.status === true){
                setPackag(data.result.data);
            }
        });

    },[id]);


    return(
        <Service>
            <div className=' py-10 md:p-16 flex flex-wrap gap-10 justify-center'>
                {
                    packag.map((data,index)=>{
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

        </Service>
    )
}

export default ServiceGroup;