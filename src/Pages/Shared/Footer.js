import React from "react";
import logo from "../../assets/icon/logo_2.png";

const Footer = () => {
  return (
    <div className="py-12">
      
      <div className="md:py-16 py-6">
        <div className="text-sm text-white md:text-xl  grid md:grid-cols-5 grid-cols-1 uppercase">
          <div>
            <div className="navbar-start flex">
              <img style={{ width: "40px" }} src={logo} alt="header-logo" />
              <h2 className="btn btn-ghost normal-case text-xl">MS Car Parts</h2>
            </div>
            <p className="text-sm text-[#6d6d6d] mt-4 w-1/2">
              {" "}
              <small> </small>{" "}
            </p>
          </div>
          <div>
            <h3>Shop </h3>
            <p className="text-sm text-[#6d6d6d] mt-4 w-1/2">
              {" "}
              <small>Shop Parts Wheels {"&"} Rims Engine Vehicle Body Parts Accessories Wholesale </small>{" "}
            </p>
          </div>
          <div>
            <h3>The Company </h3>
            <p className="text-sm text-[#6d6d6d] mt-4 w-1/2">
              {" "}
              <small>About Us Reviews Premium Area FAQ </small>{" "}
            </p>
          </div>
          <div>
            <h3>Contact Us </h3>
            <p className="text-sm text-[#6d6d6d] mt-4 w-1/2">
              {" "}
              <small>info@mysite.com 500 Terry Francois St. San Francisco, CA 94158 Tel: 123-456-7890</small>{" "}
            </p>
          </div>
          <div>
            <h3>Follow Us </h3>
            <p className="text-sm text-[#6d6d6d] mt-4 w-1/2">
              {" "}
              <small>Facebook Instagram Youtube Twitter </small>{" "}
            </p>
          </div>
        </div>
      </div>
      <hr className="text-[#6d6d6d]" />
      <div>
        <div className="md:text-lg text-sm capitalize text-white  grid md:grid-cols-5 grid-cols-5 py-6 text-center">
          <div>
            <p className="md:text-lg text-sm capitalize text-[#6d6d6d]">
              {" "}
              <small>Terms {"&"} Conditions </small>{" "}
            </p>
          </div>
          <div>
            <p className="md:text-lg text-sm capitalize text-[#6d6d6d]">
              {" "}
              <small>Privacy Policy </small>{" "}
            </p>
          </div>
          <div>
            <p className="md:text-lg text-sm capitalize text-[#6d6d6d]">
              {" "}
              <small>Shipping Policy</small>{" "}
            </p>
          </div>
          <div>
            <p className="md:text-lg text-sm capitalize text-[#6d6d6d]">
              {" "}
              <small>Refund Policy</small>{" "}
            </p>
          </div>
          <div>
            <p className="md:text-lg text-sm capitalize text-[#6d6d6d]">
              {" "}
              <small>Cookie Policy </small>{" "}
            </p>
          </div>
        </div>
      </div>
      <hr className="text-[#6d6d6d]" />
      <div className="py-6">
        <h2 className="text-center">Payment Methods</h2>
        <div className="flex justify-center pt-6 items-center ">
          <img
            className="mr-4 w-9 md:w-16"
            src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1653235498/manufacturer-website-assignment/assets/primium/Visa_hodhml.png`}
            alt="card"
          />
          <img
            className="mr-4 w-9 md:w-16"
            src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1653235497/manufacturer-website-assignment/assets/primium/China_Union_Pay_ws928w.png`}
            alt="card"
          />
          <img
            className="mr-4 w-9 md:w-16"
            src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1653235497/manufacturer-website-assignment/assets/primium/Discover_gktbcb.png`}
            alt="card"
          />
          <img
            className="mr-4 w-9 md:w-16"
            src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1653235497/manufacturer-website-assignment/assets/primium/Master_Card_vpdmxs.png`}
            alt="card"
          />
          <img
            className="mr-4 w-9 md:w-16"
            src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1653235497/manufacturer-website-assignment/assets/primium/Diners_zazz5d.png`}
            alt="card"
          />
          <img
            className="mr-4 w-9 md:w-16"
            src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1653235496/manufacturer-website-assignment/assets/primium/American_Express_m7uuvy.png`}
            alt="card"
          />
        </div>
      </div>
      <hr className="text-[#6d6d6d]" />
      <p className="text-center pt-6">
        <small>Copyright © 2022 - MS Car Parts All right reserved</small>
      </p>
    </div>
  );
};

export default Footer;
