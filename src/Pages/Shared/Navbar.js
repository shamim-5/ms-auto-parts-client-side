import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo_2.png";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link className="pr-0 pl-3 hover:text-primary" to="/">
          Home
        </Link>
      </li>
      <li>
        {user && (
          <Link className="pr-0 pl-3 hover:text-primary" to="/dashboard">
            Dashboard
          </Link>
        )}
      </li>
      <li>
        <Link className="pr-0 pl-3 hover:text-primary" to="/spare">
          Parts
        </Link>
      </li>
      <li>
        <Link className="pr-0 pl-3 hover:text-primary" to="/review">
          Review
        </Link>
      </li>
      <li>
        <Link className="pr-0 pl-3 hover:text-primary" to="/premium">
          Premium Area
        </Link>
      </li>
      <li>
        <Link className="pr-0 pl-3 hover:text-primary" to="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        {user ? (
          <Link onClick={logout} className="pr-0 pl-5 hover:text-primary" to="/login">
            Log{"\u00a0"}Out
          </Link>
        ) : (
          <Link className="pr-0 pl-5 hover:text-primary" to="/signup">
            Sign{"\u00a0"}Up
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="container">
      <div className="pt-4 ">
        <div className="navbar flex-col-reverse md:flex-row flex justify-between">
          <div className="">
            <Link to="/" className="btn btn-ghost normal-case md:text-xl pl-0">
              Free shipping on orders over $75. Call us 123-456-789
            </Link>
          </div>
          <div className="">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="border py-1 px-4 text-xl border-white rounded-full bg-transparent"
              />
            </div>
            <div className="dropdown dropdown-end ml-6">
              <div className="flex flex-row items-center ">
                {user ? (
                  <>
                    <img className="h-6 w-6 rounded-full" src={user?.photoURL} alt="" />
                  </>
                ) : (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                )}
                <div className="text-xl mx-3">
                  <li className="list-none">
                    {user ? (
                      <Link to="/" className="capitalize">
                        {user.displayName}
                      </Link>
                    ) : (
                      <Link to="login" className="capitalize hover:text-primary">
                        Log{"\u00a0"}in
                      </Link>
                    )}
                  </li>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="navbar">
        <div className="navbar-start">
          <img style={{ width: "50px" }} src={logo} alt="header-logo" />
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            MS Auto Parts
          </Link>
        </div>
        <div className="navbar-end ">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden pr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-48 relative right-0"
            >
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
