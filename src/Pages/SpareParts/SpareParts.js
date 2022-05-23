import React from 'react';
import useServices from "../../hooks/useServices";
import SparePart from './SparePart';


const SpareParts = () => {
   const [services] = useServices();

   
   return (
     <div className="container text-white pt-6">
       <div className="flex flex-row">
         <div className="flex-1">
           <h2 className="text-4xl text-center py-6">Available Spare Parts</h2>
         </div>
       </div>
       <div className="grid md:grid-cols-5 grid-cols-1 gap-6 pt-6">
         {services.map((service) => (
           <SparePart key={service._id} service={service}></SparePart>
         ))}
       </div>
     </div>
   );
};

export default SpareParts;