"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DefaultFooter = () => {
  const asPath = usePathname();
  const [activeItem, setActiveItem] = useState(AppData.footer.menu[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLinkClick = (item) => {
    if (activeItem.label === item.label) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveItem(item);
      setIsTransitioning(false);
    }, 500); // Transition duration
  };
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* footer */}
      <footer className="mil-relative">
        <img
          src={activeItem.background}
          className={`mil-bg-img mil-parallax ${
            isTransitioning ? "mil-fade-out" : "mil-fade-in"
          }`}
          alt="background"
          style={{ objectPosition: "top" }}
          data-value-1="-25%"
          data-value-2="23%"
        />

        <div className="mil-overlay" />
        <div className="container mil-p-120-90">
          <div className="mil-background-grid" />

          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="mil-footer-navigation mil-up mil-mb-90">
                    <nav>
                      <ul>
                        {AppData.footer.menu.map((item, key) => (
                          <li
                            key={`footer-menu-item-${key}`}
                            className={
                              activeItem.label === item.label
                                ? "mil-active"
                                : ""
                            }
                          >
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(item);
                              }}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mil-footer-content mil-up mil-mb-90">
                    {activeItem.label !== "About" && activeItem.servicesList ? (
                      <ul
                        className="mil-services-list"
                        style={{ display: "flex", flexWrap: "wrap", gap: 20 }}
                      >
                        {activeItem.servicesList.map((service, index) => (
                          <li
                            className="mil-text-sm mil-up mil-light-soft"
                            key={`service-item-${index}`}
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        className="mil-text-sm mil-up mil-light-soft"
                        style={{ color: "white" }}
                      >
                        {activeItem.content}
                      </p>
                    )}
                  </div>
                  <div style={{ display: "flex" }}>
                    <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
                      <img
                        src={AppData.footer.logo.image}
                        alt={AppData.footer.logo.alt}
                        style={{ width: "130px" }}
                      />
                    </Link>
                    <div className="mil-footer-logo mil-up mil-mb-30">
                      <img
                        src={AppData.footer.elite.image}
                        alt={AppData.footer.elite.alt}
                        style={{ width: "130px" }}
                      />
                    </div>
                    <div className="mil-footer-logo mil-up mil-mb-30">
                      <img
                        src={AppData.footer.chas.image}
                        alt={AppData.footer.chas.alt}
                        style={{ width: "130px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="container-fluid">
          <div className="mil-footer-bottom">
            <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
            <p className="mil-light-soft mil-mb-15">VAT 345734879</p>
            <ul className="mil-light-soft mil-mb-15">
              {AppData.social.map((item, key) => (
                <li key={`footer-social-item-${key}`}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mil-light-soft mil-mb-15">
              <li>
                <a href="#" onClick={handleBackToTop}>
                  Back to top
                </a>
              </li>
              <li>
                <a href="https://sharasolutions.co.uk/" target="_blank">
                  Shara Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};

export default DefaultFooter;
