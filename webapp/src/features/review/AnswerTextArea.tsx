import React, { useState } from "react";
import tw from "twin.macro";
// Inspired by : https://flowbite.com/docs/forms/textarea/#chatroom-input

const TextAreaContainerStyle = tw`
  flex items-center px-3 py-2
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(answer);
    setAnswerSubmitted(true);
  };

  return (
    <form tw="w-full" onSubmit={(e) => handleSubmit(e)}>
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
        ></textarea>
        <button type="submit" css={SubmitButtonStyle}>
          <svg aria-hidden="true" tw="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
          <span tw="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};
