import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import Reviews from "./Pages/Home/Reviews";
import Premium from "./Pages/Home/Premium";
import SpareParts from "./Pages/SpareParts/SpareParts";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Orders/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth"
import Blogs from "./Pages/Shared/Blogs/Blogs";

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
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
