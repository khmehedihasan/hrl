import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';


function ServiceSlider(){

  const slider = useSelector((state) => state.slider);

        // function SampleNextArrow(props) {
        //     const { onClick } = props;
        //     return (
        //       <div
        //         className=" w-10 h-10 z-10 -mr-10 rounded-full font-bold text-3xl xl:text-4xl mt-[-260px] sm:-mt-[250px] md:-mt-[270px] lg:-mt-[260px] xl:-mt-[225px] text-orange-600 bg-slate-100 float-right flex items-center justify-center cursor-pointer"
        //         onClick={onClick}
        //       ><i className="fa-solid fa-angle-right"></i></div>            );
        //   }
          
        //   function SamplePrevArrow(props) {
        //     const { onClick } = props;
        //     return (
        //       <div
        //       className=" w-10 h-10  rounded-full font-bold -ml-9 text-3xl xl:text-4xl mt-[60px] sm:mt-16 md:mt-[50px] lg:mt-[60px] xl:mt-[100px] text-orange-600 bg-slate-100 float-left flex items-center justify-center cursor-pointer"
        //         onClick={onClick}
        //       ><i className="fa-solid fa-angle-left"></i></div>
        //     );
        //   }

      var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        autoplay:true,
        pauseOnFocus:false,
        pauseOnHover:false,
        // slidesToScroll: 1,
        initialSlide: 0,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: false
        //     }
        //   },
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: false
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: false
        //     }
        //   }
        // ]
      };
      return (
        <div className=" p-1 mt-5 bg-white rounded-md z-0">
          <Slider {...settings}>
            {
              slider.map((data,index)=>{
                return(
                  <div key={index}>
                      <img src={data.img} className="w-full rounded-md" alt="" />
                  </div>
                )
              }) 
            }

          </Slider>
        </div>
      );
  }

  export default ServiceSlider;