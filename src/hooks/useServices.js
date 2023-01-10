import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://ms-auto-parts-server-side.vercel.app/service`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services];
};

export default useServices;
