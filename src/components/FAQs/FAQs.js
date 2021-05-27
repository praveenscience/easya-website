import React from "react";
import FAQList from "./_FAQList";
import FAQHelp from "./_FAQHelp";
import Scrolltop from "../Home/_scrolltop";
const FAQs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Answer =
    "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask.";
  const List = [
    {
      Question: "What is EasyA?",
      Answer,
      defaultOpen: true
    },
    {
      Question: "Who are EasyA's super tutors?",
      Answer
    },
    {
      Question: "How does EasyA differ from traditional tutoring?",
      Answer
    },
    {
      Question: "How does it work?",
      Answer
    },
    {
      Question: "Is the EasyA app available for download yet?",
      Answer
    },
    {
      Question: "Is it really unlimited?",
      Answer
    },
    {
      Question: "Is EasyA safe?",
      Answer
    },
    {
      Question: "How can I get started?",
      Answer
    },
    {
      Question: "What subjects do you tutor?",
      Answer
    },
    {
      Question: "Who are EasyA's super tutors?",
      Answer
    }
  ];
  return (
    <main className="FAQs">
      <h1>Frequently Asked Questions</h1>
      <FAQList List={List} />
      <FAQHelp />
      <Scrolltop/>
    </main>
  );
};

export default FAQs;
