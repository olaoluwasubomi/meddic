import React from "react";
import Header from "./Header";

const blogdata = [
    {
        image:"/images/supplements.jpg",
        date:"september 28,2023",
        head:"Can creatine supplements help people",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a…"
    },
    {
        image:"/images/plantbased diet.jpg",
        date:"september 28,2023",
        head:"Not all plant-based diet are good  diet",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a…"
    },
    {
        image:"/images/therapytreatment.jpg",
        date:"september 28,2023",
        head:"How therapy could become a treatment",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a…"
    }
]

const dataforblogs = blogdata.map((options, i) =>{
    return(
        <div className="border-2 border-e-serviceColor rounded-xl">
            <img  src={options.image} className="rounded-t-xl" />
            <div className="p-7">
                <h5 className="text-call uppercase text-sm font-semibold">{options.date}</h5>
                <h4 className="my-3 text-2xl font-medium">{options.head}</h4>
                <p className="text-gray-400">{options.content}</p>
            </div>
          
        </div>
    )
})
const Blogs =() =>{
    return(
        <div className="px-20">

            <div className="flex items-start justify-between w-full">
                <Header
                title="blog news"
                heading="Articles From Meddic"
                />
                <a href="#" className="block mt-5 p-3 w-40 bg-call text-center rounded-full text-white border-4  border-serviceBorder">More Article</a>
            </div>

            <div className="flex py-5 gap-x-10">
                {dataforblogs}
            </div>
        </div>
    )
}
export default Blogs;