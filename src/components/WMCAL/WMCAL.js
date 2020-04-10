import React from "react";
import WMCALIntro from "./_WMCALIntro";
import WMCALBoard from "./_WMCALBoard";
import WMCALApproach from "./_WMCALApproach";

const WMCAL = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="WMCAL">
      <WMCALIntro />
      <WMCALBoard />
      <WMCALApproach />
    </main>
  );
};

export default WMCAL;
