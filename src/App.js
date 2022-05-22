import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import bg_image from "./assets/bg-photo/bg.png";

function App() {
  const styles = {
    header: {
      backgroundImage: `url(${bg_image})`,
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },

    content: {
      height: "100%",
      overflow: "auto",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <div style={styles.header} className="bg-[#000000]">
      <div style={styles.content} className="text-white text-xl container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
