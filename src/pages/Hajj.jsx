import React from 'react';
import Service from './Service';

function Hajj(){
    return(
        <Service>
            <div className=' md:px-16'>
                <h1 className=' w-full text-center text-3xl underline text-red-600 py-16'>Hajj Visa</h1>
                <div className=' w-full h-auto pb-16 flex flex-col items-center md:flex-row'>
                    <div className=' w-full md:w-[450px] lg:w-[600px] xl:w-[700px] block shrink-0 h-80 bg-bg-hajjvisa bg-cover bg-no-repeat'></div>
                    <div>
                        <p className=' w-full p-6 overflow-auto'>
                        <h1 className=' text-lg font-bold'>What is a Hajj Visa?</h1><br /><br />
                                                    

                            This visa allows pilgrims to tour Saudi Arabia during the Hajj pilgrimage that goes down every year during the Islamic month of Dhu al Hijjah. The pilgrimage takes place in Mecca and lasts 5-6 days, although the actual dates vary from year to year. Hajj 2020 will be commencing in the evening of 28th July and concluding in the evening of 2nd August. The pilgrimage is very important in the Islamic calendar- It is a religious duty that every adult Muslim should undertake at least once in a lifetime, provided he has the physical and financial ability to travel to Mecca. <br /><br />

                            

                            The Hajj Visa was introduced in a genuine attempt by the Kingdom of Saudi Arabia to simplify the visa process for pilgrims and encourage religious tourism in the kingdom. There are more lenient admission processes now than it has ever been before. Unlike in the past when pilgrims were subjected to thorough screening in Saudi Consulates, for example, the kingdom admitted pilgrims for Hajj 2019 without any physical screening. Pilgrims who wish to travel to Mecca in 2020 can expect more lenient visa applications and custom processes.<br /><br />

                            

                            Citizens of eligible countries can apply for the Hajj visa through the Saudi visa electronic system or in a Saudi embassy as from Mid-Shawwal until 25th Dhu-al-Qa’dah of every year. They are then admitted into the kingdom on the 4 Dhu’l-Hijjah, through the King Abdulaziz Airport- the biggest international airport in Jeddah. Saudi Arabian law is very strict on the dates that a Hajj visa holder can be legally in the kingdom. It is a punishable offense to extend your stay beyond the conclusion of Hajj, or beyond the 10th of Muharram.<br /><br />

                            </p>
                    </div>
                </div>
                </div>
        </Service>
    )
}

export default Hajj;