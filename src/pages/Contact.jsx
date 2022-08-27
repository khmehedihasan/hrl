import React,{ useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import url from '../url';
import { Alert2, AlertContainer } from '../components/Alert';


function Contact(){
    const [value, setValue] = useState({name:'', email:'', phone:'', description:''});
    const navigate = useNavigate();
    const [alert, setAlert] = useState([]);


    function set(e){
      setValue({...value, [e.target.name]:e.target.value});
    }
    
  function send(){
    if(value.name ==='' || value.email==='' || value.phone==='' || value.description===''){
        setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message="All fields are required!" />]);
    }else{

        fetch(`${url}/message`,{
            method:"POST",
            body: JSON.stringify(value),
            credentials: 'include'
        }).then((data)=>data.json()).then((data)=>{
            if(data.status === true){
              navigate(-1);
            }
        });

    }

  }


    return(
    <div>
        <Nav />
        <div className= " fixed top-16 right-2 ">
            <AlertContainer>
                {alert}
            </AlertContainer>
        </div>
        <div className=' w-[360px] h-auto md:w-[550px] p-2 md:p-8 bg-slate-200 mt-20 m-auto rounded-md shadow-md'>
            <h1 className=' text-center font-bold text-xl text-red-600'>Message Us</h1>
            <label className=' text-red-600' htmlFor="name">Name:</label><br />
            <input onChange={set} className=' w-full px-2 py-[2px] outline-red-600 text-red-400' type="text" name="name" value={value.name} id="name" placeholder="Enter your name: " />
            <label  className=' text-red-600' htmlFor="email">Email:</label><br />
            <input onChange={set} className=' w-full px-2 py-[2px] outline-red-600 text-red-400' type="email" name="email" id="email" placeholder="Enter your email: " />
            <label className=' text-red-600' htmlFor="phone">Mobile number:</label><br />
            <input onChange={set} className=' w-full px-2 py-[2px] outline-red-600 text-red-400' type="text" name="phone" id="phone" placeholder="Enter your mobile number: " />
            <label className=' text-red-600' htmlFor="address">Message:</label><br />
            <textarea  onChange={set}rows={4} className=' w-full px-2 py-[2px] outline-red-600 text-red-400' type="text" name="description" id="address" placeholder="Enter your Message: " />
            <button onClick={send} className=' px-2 py-[2px] mt-4 rounded-md text-lg text-white bg-red-600 hover:bg-red-700' type='button'>Send</button>
        </div>
        <div className=' w-full h-[500px] mt-16'>
            <iframe className=' w-full h-[500px] ' src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d14606.80210769094!2d90.42500477195615!3d23.758056392713094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d23.7516817!2d90.4386576!4m3!3m2!1d23.76543!2d90.42523!5e0!3m2!1sen!2sbd!4v1660982832976!5m2!1sen!2sbd" title='map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer />
    </div>
    );

}

export default Contact;