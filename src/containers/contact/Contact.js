import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "../../components/Fade/Fade";
import email from "../../assets/lottie/email.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const whatsappNumber = contactInfo.number
    ? contactInfo.number.replace(/\D/g, "")
    : "";

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        className="main contact-margin-top"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-div-main">
          <div className="contact-header">
            <h2 className="heading contact-title" id="contact-title">
              {contactInfo.title}
            </h2>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <div className="contact-phone-block">
                  <a
                    className="contact-detail"
                    href={`tel:${contactInfo.number}`}
                    aria-label={`Call ${contactInfo.number}`}
                  >
                    {contactInfo.number}
                  </a>
                  <div className="contact-actions">
                    <a
                      className="contact-action-button call"
                      href={`tel:${contactInfo.number}`}
                      aria-label={`Call ${contactInfo.number}`}
                    >
                      <i className="fas fa-phone-alt" aria-hidden="true"></i>
                      Call
                    </a>
                    <a
                      className="contact-action-button whatsapp"
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp ${contactInfo.number}`}
                    >
                      <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <DisplayLottie animationData={email} />
          </div>
        </div>
      </section>
    </Fade>
  );
}
