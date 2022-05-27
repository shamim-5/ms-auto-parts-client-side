import React from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 gap-9 py-12 text-lg">
      <div className="py-3">
        <h3 className="text-4xl pt-2 pb-6 uppercase">List of technologies</h3>
        <hr className="text-[#bab1b1]" />
        <p className="pt-6 text-2xl">
          HTML5, CSS3, JAVA SCRIPT, ES6, BOOTSTRAP, TAILWIND, DAISY UI, NODE JS, MONGODB, REACT, FIREBASE ETC.
        </p>
        <ul>
          <p className="pt-6 text-2xl">Live Website Link</p>
          <li>
            <Link to=""> https://warehouse-management-1a464.web.app/ </Link>
          </li>
          <li>
            <Link to=""> https://independent-service-prov-619a5.firebaseapp.com/</Link>
          </li>
          <li>
            <Link to=""> home https://product-analysis-website123.netlify.app/home</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-3xl pb-9 uppercase">My Portfolio</h3>
        <p>Name*</p> Md. Shamim Somadder
        <hr className="text-[#bab1b1] pt-6" />
        <p>Email Address*</p> <span className="text-[#3448C5]">mss38k@gmail.com</span>
        <hr className="text-[#bab1b1] pt-6" />
        <p>Educational Background*</p> Diploma in Electrical Engineering
        <hr className="text-[#bab1b1] pt-6" />
      </div>
    </div>
  );
};

export default MyPortfolio;
