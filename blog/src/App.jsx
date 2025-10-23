import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./modules/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="bg-gray-200 flex flex-col min-h-screen justify-center items-center min-w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
