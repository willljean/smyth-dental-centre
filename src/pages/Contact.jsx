function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-layout">
        <div className="contact-left">
          <h1>
            Have questions about <br />
            your dental care?
          </h1>

          <p>
            Our team is here to help you understand your options before you book
            an appointment.
          </p>

          <div className="contact-actions">
            <a className="contact-button" href="tel:6131111111">
              <span className="contact-button-icon">☎</span>
              <span>(613) 111-1111</span>
            </a>

            <a className="contact-button email-button" href="mailto:info@smythdental.ca">
              <span className="contact-button-icon">✉</span>
              <span>info@smythdental.ca</span>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <div className="hours-list">
            <p>
              <strong>Monday - Thursday</strong>
              <span>8:00 – 6:00</span>
            </p>

            <p>
              <strong>Friday</strong>
              <span>8:00 – 4:00</span>
            </p>

            <p>
              <strong>Saturday</strong>
              <span>9:00 – 2:00</span>
            </p>

            <p>
              <strong>Sunday</strong>
              <span>Closed</span>
            </p>
          </div>

          <div className="address-row">
            <img
              className="location-pin-img"
              src="/src/assets/location-pin.png"
              alt="Location pin"
            />

            <p>
              123 Main Street, Suite 200 <br />
              Ottawa, ON K1A 0A1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;