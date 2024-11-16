"use client";

import React from "react";
import ContactForm from "@components/ContactForm";
import Link from "next/link";

function ContactPageContent() {
  return (
    <>
      {/* About Section */}
      <section>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="mil-mb-90">
                <h2 className="mil-upper mil-up mil-mb-30">Info Contact</h2>
                <p className="mil-up mil-mb-40">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more or less
                  normal distribution of letters.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mil-relative">
              <div className="mil-contact-sidebar">
                <img
                  src="img/photo/2.jpg"
                  alt="img"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "0 -60px",
                  }}
                  className="mil-mb-30"
                />

                <div className="mil-sidebar-info">
                  <h6 className="mil-upper mil-up mil-mb-30">Address</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-30">
                    <li>UK</li>
                    <li>77 Vancouver Road, Edgwaret</li>
                    <li>Middlesex, HA8 5DG</li>
                  </ul>
                  <h6 className="mil-upper mil-up mil-mb-30">E-mail</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-30">
                    <li>info@buteconstruction.co.uk</li>
                    <li>buteconstruction@outlook.com</li>
                  </ul>
                  <h6 className="mil-upper mil-up mil-mb-30">Phone</h6>
                  <ul className="mil-list mil-dark mil-up">
                    <li>+44 7809 106913</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Map Section */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9912..."
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Map Section End */}

      {/* Contact Section */}
      <section className="mil-relative">
        <div className="container mil-p-120-30">
          <div className="mil-background-grid mil-softened" />
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="mil-mb-90">
                <h2 className="mil-upper mil-up mil-mb-30">
                  We’d love to talk
                </h2>
                <p className="mil-up mil-mb-30">
                  Have a question? We’d love to hear from you. Send us a note to
                  get the conversation started—or click on an office above and
                  talk to us. Especially about designing something, or something
                  we’ve designed.
                </p>
                <div className="mil-divider-lg mil-up mil-mb-30" />
                <div className="mil-up">
                  <Link href="/team" className="mil-link mil-upper">
                    Join Us{" "}
                    <span className="mil-arrow">
                      <img src="/img/icons/1.svg" alt="arrow" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
}

export default ContactPageContent;
