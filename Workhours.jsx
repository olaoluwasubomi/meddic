import React from "react";
import Header from "./Header";
import tabledata from "./tabledata";
const Workhours =() =>{
    const table = tabledata.map((items, i) =>{
        return(
            <table key={i} className="table-auto w-full">
                <tbody>
                    <tr className="flex items-center justify-between w-full py-5 border-b-2 border-solid border-serviceColor">
                        <td>{items.day}</td>
                        <td className="uppercase">{items.time}</td>
                        <td className="
                        bg-call p-2.5 rounded-full text-sm font-medium text-white w-1/4 text-center">{items.link}</td>
                    </tr>
                </tbody>
            </table>
        )
    })

    return(
        <div className="workbg flex items-end justify-end px-20 py-20">
            <div className="bg-primary rounded-xl border-4 border-r-serviceBorder w-2/5 p-14" data-aos="fade-left" data-aos-duration="1000">
                <Header
                title="working hours"
                heading="Healthcare  at Its Finest"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                />
                <div>{table}</div>
                <div className="pt-10">
                    <p className="text-2xl">Time's not flexible?</p>
                    <a href="#" className="
                    block mt-5 p-3 w-3/5 bg-call text-center rounded-full text-white border-4  border-serviceBorder">Make an Appointment</a>
                </div>
            </div>
        </div>
    )
}
export default Workhours;