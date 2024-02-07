import React from "react";
import Header from "./Header";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const doctordata = [
    {
        image:"/images/doctor1.jpg",
        name:"James Samuels",
        specialization:"Pediatrics",
        children:[
            {
                facebook: <FaFacebookF />,
                linkedin: <FaLinkedinIn />,
                twitter: <FaTwitter />,
                animation:"zoom-in"
            }
        ]
    },
    {
        image:"/images/doctor2.jpg",
        name:"Lanna Wattson",
        specialization:"Psychiatry",
        children:[
            {
                facebook: <FaFacebookF />,
                linkedin: <FaLinkedinIn />,
                twitter: <FaTwitter />,
                animation:"zoom-in"
                
            }
        ]
    },
    {
        image:"/images/doctor3.jpg",
        name:"Martin Franses",
        specialization:"Cardiology",
        children:[
            {
                facebook: <FaFacebookF />,
                linkedin: <FaLinkedinIn />,
                twitter: <FaTwitter />,
                animation:"zoom-in"
            }
        ]   
    },
    {
        image:"/images/doctor4.jpg",
        name:"Lara Houston",
        specialization:"Ortopedics",
        children:[
            {
                facebook: <FaFacebookF />,
                linkedin: <FaLinkedinIn />,
                twitter: <FaTwitter />,
                animation:"zoom-in"
            }
        ]
    }
]

const dataitems = doctordata.map((items, i) =>{
    return(
        <div key={i} className="group" data-aos="zoom-in" data-aos-duration="1000">
            <div>
                <p className="relative">
                    <img className="rounded-xl" src={items.image} />

                    {items.children && 
                         <div className="flex absolute top-12 bottom-12 items-center justify-center w-full gap-x-8" > 
                        {items.children?.map((logo, i) => (
                            <div className="group-hover:flex hover:flex absolute top-12 bottom-12 items-center justify-center w-full gap-x-8 hidden" key={i}>
                            <p className="text-2xl text-call bg-white rounded-full p-2 hover:bg-call hover:text-white">{logo.facebook}</p>
                            <p className="text-2xl text-call bg-white rounded-full p-2 hover:bg-call hover:text-white">{logo.linkedin}</p>
                            <p className="text-2xl text-call bg-white rounded-full p-2 hover:bg-call hover:text-white">{logo.twitter}</p>
                            </div>
                        ))}
                         </div>
                    }
                </p>

                <div className="pt-4">
                    <h6 className="text-xl font-medium">{items.name}</h6>
                    <p className="pt-1 text-gray-400 font-medium">{items.specialization}</p>
                </div>
            </div>
        </div>
    )
})
const Doctors =() => {
    return(
        <div className="px-20 pt-0 pb-20" >
            <div className="text-center">
                <Header 
                title="our doctors" 
                heading="Meet Our Amazing Doctors"
                />
            </div>


            <div className="flex items-center justify-between w-full gap-x-6">{dataitems}</div>
        </div>
    )
}
export default Doctors;