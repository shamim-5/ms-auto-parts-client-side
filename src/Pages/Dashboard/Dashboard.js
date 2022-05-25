import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="drawer bg-transparent">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  text-center py-6 relative">
          <h2 className="text-3xl text-center font-serif">WelCome To Dashboard</h2>
          <label htmlFor="my-drawer" className="btn btn-primary btn-sm rounded-none rounded-t-sm drawer-button absolute right-0 top-0 ">
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-transparent">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-gradient-to-r from-transparent to-secondary">
            <li>
              <Link className="pr-0 pl-3 hover:text-primary" to="/dashboard">
                My Orders
              </Link>
            </li>
            <li>
              <Link className="pr-0 pl-3 hover:text-primary" to="/dashboard/profile">
                My Profile
              </Link>
            </li>
            <li>
              <Link className="pr-0 pl-3 hover:text-primary" to="/dashboard/users">
                All Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
