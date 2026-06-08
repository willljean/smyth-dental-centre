import logo from "../assets/smyth-logo.svg";
import homeIcon from "../assets/icons/home-icon.svg";
import servicesIcon from "../assets/icons/services-icon.svg";
import bookingsIcon from "../assets/icons/bookings-icon.svg";
import contactIcon from "../assets/icons/contact-icon.svg";
function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => setCurrentPage("home")}>
        <img src={logo} alt="Smyth Dental Centre logo" className="brand-logo" />
      </button>

<nav className="nav" aria-label="Main navigation">
        <button
          className={currentPage === "home" ? "active" : ""}
          onClick={() => setCurrentPage("home")}
        >
          <img src={homeIcon} alt="" className="nav-img-icon" />
          Home
        </button>

        <button
          className={currentPage === "services" ? "active" : ""}
          onClick={() => setCurrentPage("services")}
        >
          <img src={servicesIcon} alt="" className="nav-img-icon" />
          Services
        </button>

        <button
          className={currentPage === "bookings" ? "active" : ""}
          onClick={() => setCurrentPage("bookings")}
        >
          <img src={bookingsIcon} alt="" className="nav-img-icon" />
          Bookings
        </button>

        <button
          className={currentPage === "contact" ? "active" : ""}
          onClick={() => setCurrentPage("contact")}
        >
          <img src={contactIcon} alt="" className="nav-img-icon" />
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Header;