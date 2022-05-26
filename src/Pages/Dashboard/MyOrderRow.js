import React from "react";

const MyOrderRow = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-primary">Order deleted successfully !</h3>

          <div className="modal-action">
            <label htmlFor="my-modal" className=" btn btn-primary btn-sm bg-transparent text-primary hover:text-white">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderRow;
