import React from "react";
import useServices from "../../hooks/useServices";
import Service from "./Service";

const Services = () => {
  const [services] = useServices();

  return (
    <div className="container bg-gradient-to-br from-[#1d0000] to-black text-white pt-6 pb-9">
      <div className="flex flex-row">
        <div className="flex-1">
          <h2 className="text-4xl text-center">Top Three Spare Parts</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 py-6">
        {services.slice(0, 3).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
