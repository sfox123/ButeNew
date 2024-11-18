"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import AppData from "@data/app.json";

const ContactForm = ({ subtitleOffset }) => {
  const initialFormData = {
    fullname: "",
    email: "",
    number: "",
    query: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [btnState, setBtnState] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnState(true);
    const form = document.getElementById("contactForm");
    const status = document.getElementById("contactFormStatus");

    try {
      const response = await axios.post(
        "https://us-central1-bute-backend.cloudfunctions.net/app/mail",
        formData
      );
      toast.success("Successfully submitted!");
      // Reset the form data after successful submission
      setFormData(initialFormData);
      form.reset();
      status.innerHTML = "<h5>Thanks, your message is sent successfully.</h5>";
    } catch (error) {
      toast.error("Invalid email address!");
      console.error(error);
      status.innerHTML =
        "<h5>Oops! There was a problem submitting your form</h5>";
    }

    setBtnState(false);
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          fontSize: "2rem",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      {/* contact form */}
      <form
        onSubmit={handleSubmit}
        id="contactForm"
        action={AppData.settings.formspreeURL}
        className={
          subtitleOffset
            ? "mil-mt-suptitle-offset mil-mb-90 cform"
            : "mil-mb-90 cform"
        }
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
              <label className="mil-upper">
                <span>Full Name</span>
                <span className="mil-required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name Here"
                name="fullname"
                required="required"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
              <label className="mil-upper">
                <span>Email address</span>
                <span className="mil-required">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email Here"
                name="email"
                required="required"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
              <label className="mil-upper">
                <span>Phone</span>
                <span className="mil-required">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter Your Phone Here"
                name="number"
                required="required"
                onChange={handleChange}
                value={formData.tel}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
              <label className="mil-upper">
                <span>Message</span>
                <span className="mil-required">*</span>
              </label>
              <textarea
                placeholder="Enter Your Message Here"
                name="query"
                required="required"
                onChange={handleChange}
                value={formData.message}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="mil-checbox-frame mil-dark-input mil-up mil-mb-30">
              <input
                defaultChecked
                className="mil-checkbox"
                id="checkbox-1"
                type="checkbox"
                value="value"
                name="agree"
                required
              />
              <label htmlFor="checkbox-1" className="mil-text-sm">
                Accept the terms and conditions of personal data.
              </label>
            </div>
          </div>
          <div className="col-lg-12">
            <button
              type="submit"
              className="mil-button mil-up"
              disabled={btnState}
            >
              {btnState ? (
                <i className="fa fa-circle-o-notch fa-spin"></i>
              ) : (
                "Send Now"
              )}
            </button>
          </div>
        </div>
        <div
          className="form-status alert-success mil-mb-90"
          id="contactFormStatus"
          style={{ display: "none" }}
        />
      </form>
      {/* contact form end */}
    </>
  );
};

export default ContactForm;
