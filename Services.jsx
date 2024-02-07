import React from "react";
import Header from "./Header";
import serviceData from "./servicedata";
import { GoArrowRight } from "react-icons/go";


const servicedatavalues = serviceData.map((items,i) =>{
    return(
        <div key={i} className="w-96 bg-serviceColor rounded-xl mb-8 p-9 border-2 border-solid border-serviceBorder hover:border-call">
            <img className="w-16 rounded-full" src={items.image} />
            <h5 className="py-5 text-xl font-medium">{items.topic}</h5>
            <p className="text-gray-400 text-base font-medium w-auto pb-5">{items.text}</p>
            <a href="#" className="text-call font-medium flex items-center gap-x-2 pb-2">{items.link} <GoArrowRight /></a>
        </div>
    )
})
const Services =  () =>{
    return(
        <div className="py-20 px-20">
            <Header 
            title="our services"
            heading="Amazing Medical Facilities Just for you"
            />
            <div className="flex justify-between flex-wrap">{servicedatavalues}</div>
        </div>
    )
}
export default Services;