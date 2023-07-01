import React, { useState } from "react";
import "twin.macro";
import { FlippingCard } from "./FlippingCard";
import { AnswerTextArea } from "./AnswerTextArea";

export const Review = () => {
  const [isAnswerSubmitted, setAnswerSubmitted] = useState(false);
  return (
    <div tw="w-full md:max-w-3xl h-full flex flex-col items-center p-8 m-auto overflow-hidden z-10">
      <h1 tw="text-center text-primary m-5">Let&apos;s review some words/sentences</h1>
      <FlippingCard isAnswerSubmitted={isAnswerSubmitted} />
      <AnswerTextArea setAnswerSubmitted={setAnswerSubmitted} />
    </div>
  );
};
