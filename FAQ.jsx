import React, { useState } from "react";
import Header from "./Header";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";

const FAQ = () => {

    const [text1, setText1] = useState(false);
    const [text2, setText2] = useState(false);
    const [text3, setText3] = useState(false);
    const [text4, setText4] = useState(false);
    const [active, setActive] = useState("");


    const toggleText = (setText, activeText) => {
        setText((prevState) => !prevState);
        setActive(activeText);

    };

    const word=() =>{
        return(
            <p className="my-5 w-4/5 text-base font-medium text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis.</p>
        )
    }
    return(
        <div>
            <div className="px-20 flex items-center justify-between w-full gap-x-20">
            <img src="/images/team-of-doctors-discussing-something-at-hospital-c-FHAY6CS.webp" className="w-1/2 rounded-xl" data-aos="zoom-in-up" data-aos-duration="1000" />
            <div className="w-1/2">
                <Header 
                title="faqs" 
                heading="Frequently Asked Questions"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                />

                <div className="bg-white mt-5 border-serviceColor border-2 rounded-xl">
                    {!text1 && (
                        <div className="p-5">
                            <p className="flex items-center justify-between gap-x-1">How do I make an appointment at Meddic?{active == "text1" ? <FaMinus className="text-4xl cursor-pointer bg-call rounded-full p-2 text-white" onClick={() => toggleText(setText1, "")}/> :<GoPlus onClick={() => toggleText(setText1, "text1")} className="text-4xl cursor-pointer bg-call rounded-full p-2 text-white"/>} </p>
                            {text1 && word()}     
                        </div>
                    )}

                    <hr className="border-t-1"/>
                    <div className="p-5">
                            <p className="flex items-center justify-between gap-x-1">Do you have a pediatrician{active == "text2" ? <FaMinus className="text-4xl cursor-pointer bg-call rounded-full p-2 text-white" onClick={() => toggleText(setText2, "")}/> :<GoPlus onClick={() => toggleText(setText2, "text2")} className="text-4xl cursor-pointer bg-call rounded-full p-2 text-white"/>} </p>
                            {text1 && word()}     
                        </div>
                    <hr />
                    <div className="p-5">
                            <p className="flex items-center justify-between gap-x-1">Does your place provide health insurance?{active == "text3" ? <FaMinus className="text-4xl cursor-pointer bg-call rounded-full p-2 text-white" onClick={() => toggleText(setText3, "")}/> :<GoPlus onClick={() => toggleText(setText3, "text3")} className="text-4xl cursor-pointer bg-call rounded-full p-2 text-white"/>} </p>
                            {text1 && word()}     
                        </div>
                    <hr />
                    <div className="p-5">
                            <p className="flex items-center justify-between gap-x-1">What Payment method do you provide?{active == "text4" ? <FaMinus className="text-4xl cursor-pointer bg-call rounded-full p-2 text-white" onClick={() => toggleText(setText4, "")}/> :<GoPlus onClick={() => toggleText(setText4, "text4")} className="text-4xl cursor-pointer bg-call rounded-full p-2 text-white"/>} </p>
                            {text1 && word()}     
                        </div>
                </div>
            </div>
            </div>

            <hr className="border-2 text-gray-400 my-20"/>
        </div>
    )
}
export default FAQ;