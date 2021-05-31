import React from "react";
import ATBTIntro from "./_ATBTIntro";
import ATBTEmpathy from "./_ATBTEmpathy";
import ATBTEasyApply from "./_ATBTEasyApply";
import ATBTListen from "./_ATBTListen";
import Scrolltop from "../Home/_scrolltop";
const ATBT = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="ATBT">
      <ATBTIntro />
      <ATBTEmpathy />
      <ATBTEasyApply />
      <ATBTListen />
      <Scrolltop/>
    </main>
  );
};

export default ATBT;
