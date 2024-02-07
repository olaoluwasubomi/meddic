import React from "react"
import Header from "./Header"
import { IoStarOutline } from "react-icons/io5";
const Appointment = () =>{
    return(
        <div>
            <div className="px-20 flex items-center justify-between w-full gap-x-28">
                <img src="/images/second-appointment bg.jpeg" className="w-1/2" />
                <div className="ww-1/2">
                    <Header 
                    title="Appointment"
                    heading="Book Your Appointment"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                    />

                    <form>
                        <label className="flex items-center gap-x-1 mt-5 font-medium" for="Name">Your Name <IoStarOutline className="text-xs text-call" /></label>
                        <input className="px-5 py-4 w-full rounded-xl mt-2.5 border-2 border-serviceBorder bg-primary hover:bg-serviceColor  hover:outline-call hover:border-call" type="text" placeholder="John Doe" required />
                        <div className="flex items-center justify-between w-full gap-x-8">
                            <div className="w-full">
                                <label className="flex items-center gap-x-1 mt-5 font-medium" for="Phone">Phone <IoStarOutline className="text-xs text-call" /></label>
                                <input className="px-5 py-4 rounded-xl mt-2.5 border-2 border-serviceBorder bg-primary w-full hover:bg-serviceColor outline-call hover:border-call" type="number" placeholder="+1 (234)  567 890" required />
                            </div>

                            <div className="w-full">
                                <label className="flex items-center gap-x-1 mt-5 font-medium" for="Email">Email <IoStarOutline className="text-xs text-call" /></label>
                                <input className="px-5 py-4 rounded-xl mt-2.5 border-2 border-serviceBorder bg-primary w-full hover:bg-serviceColor outline-call hover:border-call" type="email" placeholder="example@gmail.com" required />
                                </div>
                        </div>
                    
                    

                    <div  className="flex items-center justify-between w-full gap-x-8">
                        <div className="w-full">
                            <label className="flex items-center gap-x-1 mt-5 font-medium" for="date">Date <IoStarOutline className="text-xs text-call" /></label>
                            <input className="px-5 py-4 w-full rounded-xl mt-2.5 border-2 border-serviceBorder bg-primary hover:bg-serviceColor outline-call hover:border-call" placeholder="Select Date" />
                        </div>
                        <div className="w-full">
                            <label className="flex items-center gap-x-1 mt-5 font-medium" for="time">TIme <IoStarOutline className="text-xs text-call" /></label>
                            <input className="px-5 py-4 w-full rounded-xl mt-2.5 border-2 border-serviceBorder bg-primary hover:bg-serviceColor outline-call hover:border-call" placeholder="Select Time" />
                        </div>
                    </div>
                    
                        
                        <label className="flex items-center gap-x-1 mt-5 font-medium" for="message">Message</label>
                        <textarea name="message" id="" cols="20" rows="5" className="px-5 py-4 w-full rounded-xl mt-2.5 border-2 border-serviceBorder bg-primary hover:bg-serviceColor outline-call hover:border-call"></textarea>
                    </form>

                    <a href="#" className="block mt-5 p-3 w-1/3 bg-call text-center rounded-full text-white border-4  border-serviceBorder">Make Appointment</a>
                </div>
            </div>


            <hr className="border-2 text-gray-400 my-20"/>
        </div>
    )
}
export default Appointment;