import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import HandleQuantity from "./HandleQuantity";
import PurchaseModal from "./PurchaseModal";

const Purchase = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { name, img, details, quantity, available, price } = service;
  const [user] = useAuthState(auth);

  //manage quantity
  const [order, setOrder] = useState(0);
  const [restQuantity, setRestQuantity] = useState(100);
  const [orderPrice, setOrderPrice] = useState(null);
  const [manageState, setManageState] = useState(null);

  useEffect(() => {
    fetch(`https://afternoon-woodland-49409.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="container py-6">
      <h2 className="text-4xl text-center">Confirm Purchase</h2>
      <div className="hero bg-transparent my-4">
        <div className="hero-content flex-col lg:flex-row">
          <img className="md:w-2/6" src={img} alt="" />
          <div className="md:w-1/2">
            <h2 className="card-title text-2xl text-[#cbd5e1]">{name}</h2>
            <p className="text-[#cbd5e1] text-normal">{details}</p>
            <div className="text-sm py-2 font-thin">
              <h3>Min. Order: {quantity} Pieces</h3>
            </div>
            <h3 className="text-xl text-primary font-bold pb-6">
              {" "}
              Price:<span className="font-normal"> ${price}</span>
              <span className="text-sm font-thin text-[#cbd5e1]"> / Piece</span>
            </h3>
            <HandleQuantity
              order={order}
              setOrder={setOrder}
              restQuantity={restQuantity}
              setRestQuantity={setRestQuantity}
              orderPrice={orderPrice}
              setOrderPrice={setOrderPrice}
              price={price}
              manageState={manageState}
              setManageState={setManageState}
            ></HandleQuantity>

            <div>
              {manageState === true ? (
                <button className="btn bg-gradient-to-tr from-primary to secondary hover:bg-transparent w-full max-w-xs text-white">
                  Quantity Too Low
                </button>
              ) : (
                <label
                  htmlFor="purchase-modal"
                  className="btn bg-gradient-to-tr from-primary to secondary hover:bg-transparent w-full max-w-xs text-white"
                >
                  Confirm Order
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
      {manageState === false && (
        <PurchaseModal setManageState={setManageState} user={user} name={name} orderQuantity={order}></PurchaseModal>
      )}
    </div>
  );
};

export default Purchase;
