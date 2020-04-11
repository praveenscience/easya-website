import React from "react";
import WMCALIntro from "./_WMCALIntro";
import WMCALBoard from "./_WMCALBoard";
import WMCALApproach from "./_WMCALApproach";
import WMCALBlogs from "./_WMCALBlogs";
import TMReviews from "../TeachingMethods/_TMReviews";
import WMCALPrinciples from "./_WMCALPrinciples";

const WMCAL = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="WMCAL">
      <WMCALIntro />
      <WMCALBoard />
      <WMCALBlogs />
      <WMCALApproach />
      <TMReviews />
      <WMCALPrinciples />
    </main>
  );
};

export default WMCAL;
