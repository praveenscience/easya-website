import React from "react";
import InfoPage from "../Shared/InfoPage/InfoPage";
import Markdown from "markdown-to-jsx";
import _ from "../../constants/Translations/Translations";

const Terms = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { Title, MarkDownContent } = _.Terms;
  return (
    <InfoPage Heading={Title}>
      {MarkDownContent && <Markdown>{MarkDownContent}</Markdown>}
    </InfoPage>
  );
};

export default Terms;
