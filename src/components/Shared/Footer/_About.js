import React from "react";
import FooterAppleLogo from "../../../assets/apple.svg";
import FooterGoogleLogo from "../../../assets/google.svg";
import Logo from "../../../assets/logo.svg";

const FooterAbout = () => {
  return (
    <section className="Footer-About">
      <img src={Logo} className="Footer-About-Logo" alt="Footer Logo" />
      <p>
        The EasyA Math Tutoring App is built for students on their platform of
        choice - smartphones!
      </p>
      <div className="Footer-About-Vendors">
        <img src={FooterAppleLogo} alt="Apple" />
        <img src={FooterGoogleLogo} alt="Google" />
      </div>
      <p>Copyright &copy; 2020 EasyA Ltd.</p>
    </section>
  );
};

export default FooterAbout;
