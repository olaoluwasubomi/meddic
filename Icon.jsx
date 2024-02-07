import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineEmergencyRecording } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { motion } from "framer-motion";


const icondata = [
    {
        icon: <FaUserDoctor />,
        heading:"expert doctors",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing.",
        animation: "slide-right",
    },
    {
        icon: <MdOutlineEmergencyRecording />,
        heading:"emergency care",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing.",
        animation: "zoom-in",
    },
    {
        icon: <LuPhoneCall />,
        heading:"24/7 full support",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing.",
        animation: "slide-left"
    }
]


const move = icondata.map((value, i) =>{
    return(
        <div data-aos={value.animation} data-aos-duration="1000" key={i} className="flex items-center justify-between gap-x-4">
            <p className="text-iconcolor text-3xl bg-white rounded-full p-5 font-light">{value.icon}</p>
            <div>
                <h5 className="text-2xl capitalize text-white font-medium">{value.heading}</h5>
                <p className="pt-2.5 text-white w-1/1">{value.desc}</p>
            </div>
        </div>
    )
})
const Icon = () =>{
    return(
        <motion.div className="bg-call w-full px-20 py-14 flex items-center justify-between"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.2, type:'spring',stiffness:10 ,duration:1}}
        >
            {move}
        </motion.div>
    )
}
export default Icon;