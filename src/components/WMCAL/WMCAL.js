import React from "react";
import WMCALIntro from "./_WMCALIntro";
import WMCALBoard from "./_WMCALBoard";
import WMCALApproach from "./_WMCALApproach";
import WMCALBlogs from "./_WMCALBlogs";
import TMReviews from "../TeachingMethods/_TMReviews";

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
    </main>
  );
};

export default WMCAL;
