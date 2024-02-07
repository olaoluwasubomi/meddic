import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { navLinks } from "./utils/nav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Nav  = () =>{
    return(
        <motion.div className="border-b-2 border-serviceBorder w-full px-20">
             <div className="flex justify-between items-center py-3 ">
            <img className="w-40 border-r-2 border-serviceBorder pr-10" src="./images/logo_Asset-1-1.png" />
            <hr />
            <div className="flex justify-center items-start gap-x-10">
                {navLinks.map((link, i) => (
                    <div key={i} className="flex justify-center items-center gap-1 relative group">
                        <Link className="px-2 uppercase text-gray-400 text-sm hover:text-black" to={link.path}>{link.display}</Link>
                        {link.children && (
                           <MdOutlineKeyboardArrowDown className="text-red-400 text-xl " /> 
                        )}

                        {link.children &&
                            <div className="bg-white group-hover:flex hover:flex absolute top-6 hidden flex-col justify-start items-start gap-4 py-4 px-2 shadow-md shadow-[rgba(0,0,0,0.1)] w-40 rounded-lg ">

                                {link.children?.map((item, i) => (
                                    <Link key={i} to={item.path} className="block hover:text-call">{item.display}</Link>
                                ))}
                                
                            </div>
                       }
                        
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center gap-x-6">
                <div className="flex items-center justify-center gap-x-2.5">
                    <FaPhoneVolume className="text-call" />
                    <p className="text-sm">Emergency Call</p>
                </div>
                <a href="#" className="bg-call p-2.5 rounded-full text-sm text-white">Appointment</a>
            </div>
        </div>
        </motion.div>
       
    )
}
export default Nav;