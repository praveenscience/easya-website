import React from "react";
import FooterAppleLogo from "../../../assets/apple.svg";
import FooterGoogleLogo from "../../../assets/google.svg";
import FooterLogo from "../../../assets/footer-logo.png";
import Logo from "../../../assets/logo.png";

const FooterAbout = () => {
  return (
    <section className="Footer-About">
      <img
        src={FooterLogo}
        className="Footer-About-Desktop"
        alt="Footer Logo"
      />
      <img src={Logo} className="Footer-About-Mobile" alt="Footer Logo" />
      <p>
        The EasyA Math Tutoring App is built for students on their platform of
        choice - smartphones!
      </p>
      <div className="Footer-About-Vendors">
        <img src={FooterAppleLogo} alt="Apple" />
        <img src={FooterGoogleLogo} alt="Google" />
      </div>
      <p>@ copyrights easyA Inc.</p>
    </section>
  );
};

export default FooterAbout;
