import React from "react";
import Header from "./Header";
const Testimonials =  () =>{
    return(
        <div>
            <div className="py-20 px-20 bg-primary w-full">
                 <div className="text-center">
                    <Header 
                        title="testimonials"
                        heading="Review From Our Patients"
                    />
                </div>
                    
                <div className="flex bg-white p-8 items-center justify-between w-full gap-x-20">
                    <div className="w-1/2">
                        <p className="font-medium text-xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius turpis porttitor, tincidunt leo vel, euismod neque. Maece facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit metus pellentesque non."</p>
                        <hr className="w-20 my-10 border-t-2 border-hrline " />
                        <h6  className="text-heading text-lg font-medium">Ryan Houstons</h6>
                        <p className="pt-2 text-patientcolor">Patient</p>
                    </div>
                    <img className="w-1/2" src="/images/composite-collage-of-happy-diverse-multicultural-m2-756DLWY.jpg" />
                </div>
             </div>

             <hr className="border-2 text-gray-400 mb-20"/>
        </div>
    )
}
export default Testimonials;