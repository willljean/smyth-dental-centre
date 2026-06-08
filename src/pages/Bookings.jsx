import { useState } from "react";

function Bookings({ setCurrentPage }) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Dental Cleaning",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bookings-page">
        <div className="booking-confirmation-layout">
          <div className="appointment-summary-card">
            <h2>Appointment Summary</h2>

            <div className="summary-row">
              <span className="summary-icon">✦</span>
              <strong>Service</strong>
              <p>{formData.service}</p>
            </div>

            <div className="summary-row">
              <span className="summary-icon">▣</span>
              <strong>Preferred Date</strong>
              <p>{formData.date}</p>
            </div>

            <div className="summary-row">
              <span className="summary-icon">◷</span>
              <strong>Preferred Time</strong>
              <p>{formData.time}</p>
            </div>
          </div>

          <div className="confirmation-message">
            <h1>Thank you, {formData.fullName.split(" ")[0]}.</h1>
            <p>
              Your appointment request has been received. Our team will contact
              you shortly to confirm your appointment.
            </p>

            <button
              className="primary-button confirmation-button"
              onClick={() => setCurrentPage("home")}
            >
              Return Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bookings-page">
      <div className="bookings-layout">
        <div className="bookings-intro">
          <h1>Book an Appointment</h1>
          <p>Not sure about what you might need?</p>

          <button
            className="secondary-button booking-services-button"
            onClick={() => setCurrentPage("services")}
          >
            View our Services
          </button>
        </div>

        <form className="booking-form-card" onSubmit={handleSubmit}>
          <label>
            <span>Full Name</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane.doe@gmail.com"
              required
            />
          </label>

          <label>
            <span>Phone Number</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(613) 123-4567"
              required
            />
          </label>

          <label>
            <span>Service Type</span>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option>Dental Cleaning</option>
              <option>Root Canal</option>
              <option>Cosmetics</option>
              <option>Consultation</option>
              <option>Emergency Care</option>
            </select>
          </label>

          <label>
            <span>Preferred Date</span>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span>Preferred Time</span>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>

          <label className="notes-field">
            <span>Notes</span>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Optional"
            />
          </label>

          <button className="primary-button booking-submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Bookings;