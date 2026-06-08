import { useState } from "react";
import servicesData from "../data/servicesData";
import rootCanalImage from "../assets/root-canal.png";
import cleaningImage from "../assets/cleaning.png";
import cosmeticsImage from "../assets/cosmetics.png";
import consultationImage from "../assets/consultation.png";
import emergencyImage from "../assets/emergency.png";

function Services({ setCurrentPage }) {
  const [selectedServiceId, setSelectedServiceId] = useState("cleanings");

  const selectedService = servicesData.find(
    (service) => service.id === selectedServiceId
  );

  return (
    <section className="services-page">
      <div className="services-layout">
        <aside className="services-menu">
          <h1>Services</h1>

          <div className="service-list">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={
                  selectedServiceId === service.id
                    ? "service-tab active-service"
                    : "service-tab"
                }
                onClick={() => setSelectedServiceId(service.id)}
              >
                <span>{service.title}</span>
                <span className="service-info-icon">i</span>
              </button>
            ))}
          </div>
        </aside>

        <article className="service-card">
          <div className="service-card-text">
            <p className="eyebrow">Smyth Dental Centre</p>
            <h2>{selectedService.title}</h2>

            <p className="service-description">{selectedService.description}</p>

            <h3>{selectedService.pointsTitle}</h3>

            <ul>
              {selectedService.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="service-visual">
            
            {selectedService.id === "cleanings" && (
              <img
                src={cleaningImage}
                alt="Illustration of dental cleaning"
                className="service-image cleaning-image"
              />
            )}

            {selectedService.id === "root-canals" && (
              <img
                src={rootCanalImage}
                alt="Illustration of root canal treatment inside a tooth"
                className="service-image root-canal-image"
              />
            )}

            {selectedService.id === "cosmetics" && (
              <img
                src={cosmeticsImage}
                alt="Illustration of cosmetic dentistry procedures"
                className="service-image cosmetics-image"
              />
            )}

            {selectedService.id === "consultations" && (
              <img
                src={consultationImage}
                alt="Illustration of a dental consultation"
                className="service-image consultation-image"
              />
            )}

            {selectedService.id === "emergencies" && (
              <img
                src={emergencyImage}
                alt="Illustration of emergency dental care"
                className="service-image emergency-image"
              />
            )}

            {selectedService.id !== "root-canals" &&
              selectedService.id !== "cleanings" && 
              selectedService.id !== "cosmetics" && 
              selectedService.id !== "consultations" && 
              selectedService.id !== "emergencies" && (
                <div className="tooth-shape" aria-hidden="true">
                  <span>+</span>
                </div>
              )}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;