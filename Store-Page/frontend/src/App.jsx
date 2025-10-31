import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavBar />
      <main className="mt-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;