import React from "react";

const Blogs = () => {
  return (
    <div className="container py-6">
      <div className="hero min-w-screen pb-4">
        <div className="hero-overlay bg-transparent border rounded"></div>
        <div className="hero-content text-center text-white">
          <div className="w-full">
            <h1 className="mb-5 text-3xl font-bold">How will you improve the performance of a React Application?</h1>
            <p className="mb-5 text-xl  text-[#a5f3fc]">
              Keeping component state local where necessary. Memoizing React components to prevent unnecessary
              re-renders. Code-splitting in React using dynamic import(). Windowing or list virtualization in React.
              Lazy loading images in React.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-w-screen pb-4">
        <div className="hero-overlay bg-transparent border rounded"></div>
        <div className="hero-content text-center text-white">
          <div className="w-full">
            <h1 className="mb-5 text-3xl font-bold">
              {" "}
              What are the different ways to manage a state in a React application?
            </h1>
            <p className="mb-5 text-xl  text-[#a5f3fc]">
              There are four main types of state you need to properly manage in your React apps: Local state, Global
              state, Server state, URL state.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-w-screen pb-4">
        <div className="hero-overlay bg-transparent border rounded"></div>
        <div className="hero-content text-center text-white">
          <div className="w-full">
            <h1 className="mb-5 text-3xl font-bold">How does prototypical inheritance work?</h1>
            <p className="mb-5 text-xl  text-[#a5f3fc]">
              The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is
              a method by which an object can inherit the properties and methods of another object. Traditionally, in
              order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-w-screen pb-4">
        <div className="hero-overlay bg-transparent border rounded"></div>
        <div className="hero-content text-center text-white">
          <div className="w-full">
            <h1 className="mb-5 text-3xl font-bold">4 Why you do not set the state directly in React.</h1>
            <p className="mb-5 text-xl  text-[#a5f3fc]">
              One should never update the state directly because of the following reasons: If you update it directly,
              calling the setState() afterward may just replace the update you made. When you directly update the state,
              it does not change this.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-w-screen pb-4">
        <div className="hero-overlay bg-transparent border rounded"></div>
        <div className="hero-content text-center text-white">
          <div className="w-full">
            <h1 className="mb-5 text-3xl font-bold">How will you implement a search to find products by name?</h1>
            <p className="mb-5 text-xl  text-[#a5f3fc]">
              Use filter if you want to find all items in an array that meet a specific condition. Use find if you want
              to check if that at least one item meets a specific condition. Use includes if you want to check if an
              array contains a particular value. Use indexOf if you want to find the index of a particular item in an
              array.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-w-screen pb-4">
        <div className="hero-overlay bg-transparent border rounded"></div>
        <div className="hero-content text-center text-white">
          <div className="w-full">
            <h1 className="mb-5 text-3xl font-bold">What is a unit test? Why should write unit tests?</h1>
            <p className="mb-5 text-xl  text-[#a5f3fc]">
              Unit tests are typically automated tests written and run by software developers to ensure that a section
              of an application (known as the "unit") meets its design and behaves as intended. In procedural
              programming, a unit could be an entire module, but it is more commonly an individual function or
              procedure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
