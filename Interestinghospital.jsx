import React from "react";
import Header from "./Header";
const Interestinghospital = () =>{
    return(
        <div className="px-20 bg-serviceColor flex items-center justify-between gap-x-4 w-full">
            <div className="w-full">
                <div className="w-4/5">
                    <Header 
                        title="get started"
                        heading="The Most Interesting Hospital in the World"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                    />
                </div>
                <div className="flex items-center justify-between pb-5 w-1/3">
                        <a href="#" className="block bg-call p-2.5 rounded-full text-sm text-white w-1/2 text-center">Get Started</a>
                        <a href="#" className="block p-2.5 rounded-s-lg w-1/2 text-center border-solid">Contact  Us</a>
                    </div>
            </div>

            <div className="w-1/2">
                <img src="/images/portrait-of-happy-doctor-at-hospital-corridor-CX3VSGM-1.png" />
            </div>
        </div>
    )
}
export default Interestinghospital;