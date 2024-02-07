import React from "react";
import Header from "./Header";
import { LuPhoneCall } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
const help = [
    {
        image:<LuPhoneCall />,
        heading:"Our Number",
        content:"+1 (234) 567 890 00",
        animation:"zoom-in"
    },
    {
        image:<CiMail />,
        heading:"Appointment",
        content:"meddic.info@mail.com",
        animation:"zoom-in"
    }
]

const helping = help.map((items,i) =>{
    return(
        <div key={i} className="flex items-center  justify-between gap-x-4" data-aos={items.animation} data-aos-duration="1000">
            <p className="bg-call text-3xl p-3 text-white rounded-full">{items.image}</p>
            <div>
                <h5 className="text-lg font-medium">{items.heading}</h5>
                <p className="text-gray-400">{items.content}</p>
            </div>
        </div>
    )
})
const Help = () =>{
    return(
        <div>
            <div className="py-20 px-20 flex items-center justify-between w-full gap-x-28">
                <div className="w-1/2">
                    <Header 
                    title="help line"
                    heading="24/7 Helpline Services"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Lusce maximus augue eleifend dui bibendum pellentesque."
                    />
                    <div className="flex items-center justify-between gap-x-4 pt-6">
                        {helping}
                    </div>
                </div>
                <img src="./images/helpusbg.jpeg" className="w-1/2" />
            </div>
            <hr className="border-1 border-gray-400 p-8" />
        </div>
    )
}
export default Help;