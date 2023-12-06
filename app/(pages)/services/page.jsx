"use client"
import react, { useEffect, useState } from "react"
import Card from "./card"

export default function Services() {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
        .then(data=>setServices(data))
    }
        , [])

    
    return (
        <div className="space-y-10">
            <div className="space-y-12  text-center" >
                <h1 className="text-5xl pt-8 ">Our Services</h1>
            <p>Your Trusted Car Care Partner. Our expert team delivers precision automotive services,<br /> from routine maintenance to specialized repairs. </p>
            </div>
            <div className="lg:grid grid-cols-3 pt-4	">
                {
                    services.map((service) => <Card 
                        key={service.serviceId}
                        service={service}
                     />
                    )
                }
      </div>
            
        </div>
    )
}

// "use client"
// // Import react, useEffect, useState, and the Card component
// import React, { useEffect, useState } from "react";
// import Card from "./Card"; // Assuming the Card component is in the same directory

// export default function Services() {
//   const [services, setServices] = useState([]); // Use an array to store services

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetch('servicesData.json')
//       .then((res) => res.json())
//       .then((data) => setServices(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <div>
//         <h1 className="text-5">Our Services</h1>
//         <p>
//           Your Trusted Car Care Partner. Our expert team delivers precision
//           automotive services, <br /> from routine maintenance to specialized
//           repairs.
//         </p>
//       </div>
//       <div>
//         {services.map((service) => (
//           // Use parentheses for the return statement
//           <Card key={service.serviceId} service={service} />
//         ))}
//       </div>
//     </div>
//   );
// }
