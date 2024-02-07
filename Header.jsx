import React from "react";

const Header= (props) =>{
    return(
        <div>
            <h5 className="text-call uppercase text-base font-semibold">{props.title}</h5>
            <h2 className="py-5 text-heading text-5xl font-medium leading-tight">{props.heading}</h2>
            <p className="pb-5 text-base text-gray-400 font-medium">{props.text}</p>
        </div>
    )
}
export default  Header;