import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () =>{
    return(
        <div className="bg-call mt-20">
            <div className="px-20  py-20 flex items-start justify-between gap-x-4">
                <div>
                    <img src="/images/footerimage.png" className="w-40" />
                    <p className="mt-5 text-gray-400 font-medium w-72">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
                    <div className="flex items-center justify-between w-36 mt-5">
                    <FaFacebookF className="text-3xl p-1 bg-call rounded-full text-white border-2 border-seerviceBorder" />
                    <FaLinkedinIn className="text-3xl p-1 bg-call rounded-full text-white border-2 border-seerviceBorder"  />
                    <FaTwitter className="text-3xl p-1 bg-call rounded-full text-white border-2 border-seerviceBorder"  />
                    <FaYoutube className="text-3xl p-1 bg-call rounded-full text-white border-2 border-seerviceBorder"  />
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className="text-white text-xl">Address</h5>
                        <p className="text-gray-400 mt-2 font-medium">034 Erling Knolls, Lake Kenny North Dakota 8902</p>
                    </div>
                    <div className="mt-5">
                        <h5 className="text-white text-xl">Contact</h5>
                        <p className="mt-2 text-gray-400 font-medium">+1 (234) 567 890</p>
                        <p className="mt-2 text-gray-400 font-medium">example@mail.com</p>
                    </div>
                </div>
                <div>
                    <h5 className="text-white text-xl">Explore</h5>
                    <a href="#" className="block mt-2 text-gray-400 font-medium">Home</a>
                    <a href="#" className="block mt-2 text-gray-400 font-medium">About</a>
                    <a href="#" className="block mt-2 text-gray-400 font-medium">Services</a>
                    <a href="#" className="block mt-2 text-gray-400 font-medium">Team</a>
                    <a href="#" className="block mt-2 text-gray-400 font-medium">Blogs</a>
                </div>
                <div>
                    <h5 className="text-white text-xl">Resources</h5>
                    <a href="#" className="block mt-2 text-gray-400 font-medium">Documentation</a>
                    <a href="#" className="block mt-2 text-gray-400 font-medium">Privacy Policy</a>
                    <a href="#" className="block mt-2 text-gray-400 font-medium">Press Files</a>
                    <a href="#" className="block mt-2 text-gray-400 font-medium">FAQs</a>
                    <a href="#" className="block mt-2 text-gray-400 font-medium">Contact</a>
                </div>
            </div>

            <h5 className="mt-10 text-center text-white text-2xl">Subscribe Our Newsletter</h5>
            <form className="flex items-center justify-center my-5 gap-x-5">
                <input  type="text" placeholder="Your email" className="p-3 w-96 rounded-full" />
                <a href="#" className="bg-black text-white rounded-full w-36 text-center p-3">Subscribe</a>
            </form>

            <hr className="mt-16" />

            <div className="flex items-center  justify-between  px-20 py-5 text-white font-medium">
                <p>Copyright © 2023 ASK Project</p>
                <div className="flex justify-between items-center gap-x-4">
                    <p>Privacy Policy</p>
                    <p>Terms & Services</p>
                </div>
            </div>
        </div>
        
    )
}
export default Footer;