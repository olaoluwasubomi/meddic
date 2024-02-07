export const navLinks = [
    {
        display: "Home",
        path: "home",
    },

    {
        display: "About",
        path: "about",
    },

    {
        display: "Services",
        path: "services",
        children: [
            {
                display: "Services",
                path: "#",
            },
        
            {
                display: "Service Detail",
                path: "#",
            },
        ]
    },

    {
        display: "Pages",
        path: "#",
        children: [
            {
                display: "Appointment",
                path: "#",
            },
        
            {
                display: "Doctors",
                path: "#",
            },
            {
                display:"Doctor Detail",
                path:"#",
            },
            {
                display:"FAQ",
                path:"#",
            },
            {
                display:"Packages",
                path:'#'
            },
            {
                display:"Testimonial",
                path:"#"
            },
            {
                display:"Blog",
                path:"#"
            },
            {
                display:"Single Post",
                path:'#'
            },
            {
                display:"404 Page",
                path:"#"
            }
        ]
    },

    {
        display: "Contact",
        path: "contact",
    },
]