function Home({ setCurrentPage }) {
  return (
    <section className="home-page">
      <div className="hero-content">
        <h1>Dental Care for Every Smile.</h1>

        <p>
          Book cleanings, exams, emergency care, and consultations with our
          experienced dental team.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-button"
            onClick={() => setCurrentPage("bookings")}
          >
            Book an Appointment
          </button>

          <button
            className="secondary-button"
            onClick={() => setCurrentPage("services")}
          >
            View our Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;