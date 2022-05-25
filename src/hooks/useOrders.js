import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);
  return [orders, setOrders];
};

export default useOrders;
