import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://afternoon-woodland-49409.herokuapp.com/service`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services];
};

export default useServices;
