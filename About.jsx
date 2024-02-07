import React from "react";
import Header from "./Header";


const aboutdata = [
    {
        header:"Our vision",
        headertext:"We never get behind of the latest medical trends. Lorem ipsum dolor sit, consectetur.",
        animation:"zoom-in"
    },
    {
        header:"Our mission",
        headertext:"The most interesting hospital in the world. Lorem ipsum dolor sit amet, consectetur.",
        animation:"zoom-in"
    }
]

const abooutandvision = aboutdata.map((input , i) =>{
    return(
        <div className="w-1/2" key={i} data-aos={input.animation} data-aos-duration="1000">
            <h5 className="text-lg font-medium">{input.header}</h5>
            <p className="py-5 text-gray-400 w-5/6">{input.headertext}</p>
        </div>
    )
})
const About = () =>{
    return(
        <div>
            <div className="px-20 py-20 flex  items-center justify-between w-full gap-x-20">
                <div className="flex items-start justify-between w-1/2 gap-x-4">
                    <img data-aos="slide-left" data-aos-duration="1000" src="./images/portrait-of-young-woman-doctor-at-hospital-corrido-SGSBYGP.webp" className="w-1/2 rounded-2xl" />
                    <img data-aos="slide-right" data-aos-duration="1000" src="./images/doctors-discussing-something-at-hospital-corridor-5HAKCZZ (1).webp" className="w-1/2 mt-16 rounded-2xl" />
                </div>

                <div className="w-1/2">
                    <Header 
                    title="about meddic" 
                    heading="We Collaborate for Better Healthcare"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                    />
                    <div className="pt-4 flex">{abooutandvision}</div>
                    <a href="#" className="bg-call p-2.5 my-3 rounded-full text-sm text-white w-3/12 block text-center">Learn More</a>
                </div>
            </div>
            <hr className="border-t-1 border-gray-400 opacity-25" />
        </div>
    )
}
export default About;