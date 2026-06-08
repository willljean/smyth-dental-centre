import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="site">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
        {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === "services" && <Services setCurrentPage={setCurrentPage} />}
        {currentPage === "bookings" && <Bookings setCurrentPage={setCurrentPage} />}
        {currentPage === "contact" && <Contact />}
      </main>
    </div>
  );
}

export default App;