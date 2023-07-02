import React, { useState } from "react";
import tw from "twin.macro";
import SubmitAnswerIcon from "../../assets/svg/submit-answer-icon.svg";
// Inspired by : https://flowbite.com/docs/forms/textarea/#chatroom-input

const TextAreaContainerStyle = tw`
  flex items-center px-3 py-2 my-6
  rounded-lg bg-secondary
`;

const TextAreaStyle = tw`
  block mx-4 p-2.5 w-full
  rounded-lg 
  text-sm text-gray-900
  bg-white
  border border-gray-300
  focus:ring-blue-500
  focus:border-blue-500
`;

const SubmitButtonStyle = tw`
  inline-flex justify-center p-2
  text-quaternary
  rounded-full cursor-pointer
  hover:bg-gray-600
`;

interface AnswerTextAreaProps {
  setAnswerSubmitted: (value: boolean) => void;
}

export const AnswerTextArea: React.FC<AnswerTextAreaProps> = ({ setAnswerSubmitted }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(answer);
    setAnswerSubmitted(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form tw="w-full" onSubmit={handleSubmit}>
      <label htmlFor="cardAnswer" tw="sr-only">
        Your message
      </label>
      <div css={TextAreaContainerStyle}>
        <textarea
          id="cardAnswer"
          rows={2}
          css={TextAreaStyle}
          placeholder="Your answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={handleKeyPress}
        ></textarea>
        <button type="submit" css={SubmitButtonStyle}>
          <SubmitAnswerIcon tw="w-6 h-6 rotate-90" />
          <span tw="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};
