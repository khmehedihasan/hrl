import './assets/css/style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Visa from './pages/Visa';
import Hajj from './pages/Hajj';
import Omra from './pages/Omra';
import Tour from './pages/Tour';
// import Visit from './pages/Visit';
import AirTicket from './pages/AirTicket';
import { useEffect } from 'react';
import url from './url';
import { useDispatch } from 'react-redux';
import { ADD_INFO, ADD_SLIDER } from './store/actions/addInfo'

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    fetch(`${url}/info`,{
        method:"GET",
        credentials: 'include'
    }).then((data)=>data.json()).then((data)=>{
   
      if(data.status === true){
        dispatch(ADD_INFO(data.data[0]));
      }
    });

    fetch(`${url}/info/slider?page=0&limit=0`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{

      if(data.status === true){
        dispatch(ADD_SLIDER(data.result.data));
      }
  });


  },[dispatch]);



  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service/visa' element={<Visa />} />
      <Route path='/service/hajj' element={<Hajj />} />
      <Route path='/service/omra' element={<Omra />} />
      <Route path='/service/tour' element={<Tour />} />
      {/* <Route path='/service/visit' element={<Visit />} /> */}
      <Route path='/service/airTicket' element={<AirTicket />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
