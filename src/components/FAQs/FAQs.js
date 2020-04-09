import React from "react";
import FAQList from "./_FAQList";
import FAQHelp from "./_FAQHelp";

const FAQs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const List = [
    {
      Question: "What is EasyA?",
      Answer:
        "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask.",
      defaultOpen: true
    },

    {
      Question: "Who are EasyA's super tutors?",
      Answer:
        "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask."
    },

    {
      Question: "How does EasyA differ from traditional tutoring?",
      Answer:
        "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask."
    },

    {
      Question: "How does it work?",
      Answer:
        "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask."
    },

    {
      Question: "Is the EasyA app available for download yet?",
      Answer:
        "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask."
    },

    {
      Question: "Is it really unlimited?",
      Answer:
        "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask."
    },

    {
      Question: "Is EasyA safe?",
      Answer:
        "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask."
    },

    {
      Question: "How can I get started?",
      Answer:
        "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask."
    },

    {
      Question: "What subjects do you tutor?",
      Answer:
        "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask."
    },

    {
      Question: "Who are EasyA's super tutors?",
      Answer:
        "EasyA is an app that provides students with instant, on-demand GCSE maths help. Simply snap a picture of your question and you’ll be connected with one of our super tutors in under 60 seconds. Once connected, you can ask."
    }
  ];
  return (
    <main className="FAQs">
      <h1>Frequently Asked Questions</h1>
      <FAQList List={List} />
      <FAQHelp />
    </main>
  );
};

export default FAQs;
