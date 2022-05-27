import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Reviews from "./Pages/Home/Reviews";
import Premium from "./Pages/Home/Premium";
import SpareParts from "./Pages/SpareParts/SpareParts";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Orders/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth";
import Blogs from "./Pages/Shared/Blogs/Blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import MyReview from "./Pages/Dashboard/MyReview";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AllProduct from "./Pages/Dashboard/AllProduct";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  const styles = {
    header: {
      backgroundImage:
        "url(https://res.cloudinary.com/dskmjlma4/image/upload/v1653235495/manufacturer-website-assignment/assets/bg-photo/bg_cusibk.png)",
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },

    content: {
      height: "100%",
      overflow: "auto",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  };
  return (
    <div style={styles.header} className="bg-[#000000]">
      <div style={styles.content} className="text-white text-xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="review" element={<Reviews />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="portfolio" element={<MyPortfolio />} />
          <Route path="premium" element={<Premium />} />
          <Route path="spare" element={<SpareParts />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="purchase/:id"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyOrders />}></Route>
            <Route path="profile" element={<MyProfile />}></Route>
            <Route path="review" element={<MyReview />}></Route>
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <AllUsers />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="add"
              element={
                <RequireAdmin>
                  <AddProduct />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="product"
              element={
                <RequireAdmin>
                  <AllProduct />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageProduct"
              element={
                <RequireAdmin>
                  <ManageProduct />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageOrder"
              element={
                <RequireAdmin>
                  <ManageOrder />
                </RequireAdmin>
              }
            ></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
