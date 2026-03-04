import React from "react";
import "../../pages/Contact/ContactPage.css";
/* TypedJs */
import { TypeAnimation } from "react-type-animation";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Contact = () => (
  <section className="contactos" id="contactos">
    <h2 className="heading">
      <FormattedMessage id="contact" defaultMessage="Contact" />
    </h2>
    <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
      <FormattedMessage id="contact-info" defaultMessage="Contact me by: " />
      <TypeAnimation
        sequence={[
          "Gmail",
          1500,
          "WhatsApp",
          1500,
          "Instagram",
          1500,
          "Telegram",
          1500,
          "LinkedIn",
          1500,
          "GitHub",
          1500,
        ]}
        wrapper="b"
        repeat={Infinity}
        className="site-contacto"
      />
    </h3>

    <div className="icons">
      <a
        href="mailto:estebancarrizo619@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fas fa-envelope"></span>
        </div>
        <div className="text">Gmail</div>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=919384579716"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-whatsapp"></span>
        </div>
        <div className="text">Whatsapp</div>
      </a>
      <a
        href="https://www.instagram.com/s.a.n.t.h.o.s.h.k.u.m.a.r.s/"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-instagram"></span>
        </div>
        <div className="text">Instagram</div>
      </a>
      <a
        href="https://t.me/estebanU20"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-telegram"></span>
        </div>
        <div className="text">telegram</div>
      </a>
      <a
        href="https://www.linkedin.com/in/santhosh-subramani-7186a61b1/"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-linkedin-in"></span>
        </div>
        <div className="text">Linkedin</div>
      </a>
      <a
        href="https://github.com/SanthoshNumentica"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-github-square"></span>
        </div>
        <div className="text">GitHub</div>
      </a>
    </div>
  </section>
);

export default React.memo(Contact);
