import { useState } from "react";
import "./Faqs.css";
import { useSiteData } from "../../context/SiteDataContext";

const FAQ = ({
  index,
  question,
  answer,
  toggleAnswer,
  handleToggleAnswer,
}: {
  index: number;
  question: string;
  answer: string;
  toggleAnswer: number | null;
  handleToggleAnswer: (index: number) => void;
}) => {
  const handleSetToggleAnswer = () => {
    handleToggleAnswer(index);
  };

  return (
    <div className="faq-question">
      <h2
        onClick={handleSetToggleAnswer}
        className={toggleAnswer === index ? "open" : ""}
      >
        {question}
        <svg
          className={`arrow-icon ${toggleAnswer === index ? "rotate" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </h2>
      <div className={`answer ${toggleAnswer === index ? "show" : ""}`}>
        {answer}
      </div>
    </div>
  );
};

export default function Faqs() {
  const [toggleAnswer, setToggleAnswer] = useState<number | null>(null);

  const handleToggleAnswer = (index: number) => {
    setToggleAnswer((prevToggleAnswer) =>
      prevToggleAnswer === index ? null : index,
    );
  };

  const data = useSiteData();

  if (!data) {
    return <></>;
  }

  return (
    <section className="faq">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        {data.faqs.map((item, index) => (
          <FAQ
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            toggleAnswer={toggleAnswer}
            handleToggleAnswer={handleToggleAnswer}
          />
        ))}
      </div>
    </section>
  );
}
