import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar";
import { UserProvider } from "./hooks/useUser";

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen w-full overflow-x-hidden overflow-y-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <NavBar />
        <main className="mt-5 sm:mt-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  );
}
export default App;
