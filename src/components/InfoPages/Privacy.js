import React from "react";
import InfoPage from "../Shared/InfoPage/InfoPage";
import Markdown from "markdown-to-jsx";
import _ from "../../constants/Translations/Translations";
import Scrolltop from "../Home/_scrolltop";
const Privacy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { Title, MarkDownContent } = _.Privacy;
  return (
    <InfoPage Heading={Title}>
      {MarkDownContent && <Markdown>{MarkDownContent}</Markdown>}
      <Scrolltop/>
    </InfoPage>
    
  );
};

export default Privacy;
