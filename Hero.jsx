import React from "react";
import { GoPlus } from "react-icons/go";
import CountUp from "react-countup";
const Hero  = () =>{

    const count = [
        {
            value:"25 ",
            message:"Years of experience"
        },
        {
            value:"140",
            message:"Specialist  Doctor"
        }
    ]
    
    const main = count.map((item , i) =>{
        return(
            <div key={i} className="my-6 bg-white rounded-xl p-5 text-center">
                <div className="flex items-center justify-center">
                    <CountUp 
                    start={0} 
                    end={item.value} 
                    duration={2} 
                    className="font-medium text-5xl" 
                    {...item.value} />
                    <GoPlus className="text-5xl font-medium" />
                </div>
                <p className="pt-2 text-gray-400 font-medium text-sm w-full">{item.message}</p>
            </div>
        )
    })
    return(
        <div className="super-container pb-8 px-20">
            <div className="pt-32 flex items-start justify-center gap-x-4 w-full">
                <div data-aos="slide-right" data-aos-duration="1000" className="w-1/2">
                    <h5 className="text-call uppercase text-base font-semibold">Welcome to meddic</h5>
                    <h2 className="py-5 text-heading text-6xl font-medium leading-tight">We Are Here to Hear and Heal Your Health Problems</h2>
                    <p className="pb-5 text-base text-gray-400 font-medium w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <div className="flex items-center justify-between pb-5 w-2/5">
                        <a href="#" className="block bg-call p-2.5 rounded-full text-sm text-white w-1/2 text-center">Get Started</a>
                        <a href="#" className="block p-2.5 rounded-s-lg w-1/2 text-center border-solid">Contact  Us</a>
                    </div>
                </div>
                <img src="./images/portrait-of-happy-doctor-at-hospital-corridor-CX3VSGM-1.png" className="w-1/3"/>
                <div className="">{main}</div>
            </div>


            <div className="border-2 border-solid border-white w-1/4 flex items-center justify-between p-6 bg-imagescolor gap-x-8 m-auto">
                <div className="flex">
                    <img className="w-12 rounded-full border-2 border-solid border-white -mx-3" src="./images/composite-collage-of-happy-diverse-multicultural-m1-756DLWY.jpg" />
                    <img className="w-12 rounded-full border-2 border-solid border-white -mx-3"  src="./images/composite-collage-of-happy-diverse-multicultural-m2-756DLWY.jpg" />
                    <img className="w-12 rounded-full border-2 border-solid border-white -mx-3" src="./images/composite-collage-of-happy-diverse-multicultural-m3-756DLWY.jpg" />
                    <img className="w-12 rounded-full border-2 border-solid border-white -mx-3" src="./images/composite-collage-of-happy-diverse-multicultural-m4-756DLWY.jpg" />
                </div>
                <p>100K+ Patients Recover</p>
            </div>
        </div>

    )
}
export default Hero;