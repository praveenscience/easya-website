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
        <a href="https://itunes.apple.com/us/app/easya/id1478549100">
          <img src={FooterAppleLogo} alt="Apple" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=io.easya.easya">
          <img src={FooterGoogleLogo} alt="Google" />
        </a>
      </div>
      <p>Copyright &copy; 2020 EasyA Ltd.</p>
    </section>
  );
};

export default FooterAbout;
