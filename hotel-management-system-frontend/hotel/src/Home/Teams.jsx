import React from "react";
import { getSocialIcons, team } from "../Components/Data"; // Importing the updated function and array

export default function Teams() {
  // Get the social icons array
  const socialIcons = getSocialIcons();

  return (
    <>
      <div>
        <h2>Our Team</h2>
        <div className="row g-4">
          {team.map((item, index) => (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={index}
            >
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  {/* Set src attribute dynamically based on item's image */}
                  <img className="img-fluid" src={item.image} alt="img" />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    {socialIcons.map((val, index) => ( // Using socialIcons directly
                      <a
                        href={val.url} // Link to the social media URL
                        target="_blank" // Open link in new tab
                        rel="noopener noreferrer" // Required for security reasons
                        className="btn btn-square btn-primary mx-1" // Assuming this is a button class
                        key={index}
                      >
                        {val.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">{item.name}</h5>
                  <small>{item.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
