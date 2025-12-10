import React from "react";

const contact_standard_data = [
  {
    id: 1,
    icon: "fas fa-envelope",
    title: "Mail Here",
    info_1: "-",
    info_2: "-",
  },
  {
    id: 2,
    icon: "fas fa-map-marker-alt",
    title: "Visit Here",
    info_1:
      "Jl. Lemahwungkuk No.19, Lemahwungkuk, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat 45117",
    info_2: "",
  },
  {
    id: 3,
    icon: "fas fa-phone",
    title: "Call Here",
    info_1: "-",
    info_2: "-",
  },
];

const ContactStandardArea = () => {
  return (
    <>
      <section className="contact-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            {contact_standard_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact-box text-center mb-30">
                  <i className={item.icon}></i>
                  <h3>{item.title}</h3>
                  <p>{item.info_1}</p>
                  {item.info_2 && <p>{item.info_2}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactStandardArea;
