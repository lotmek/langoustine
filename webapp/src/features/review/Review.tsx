import React from "react";
import "twin.macro";
import { FlippingCard } from "./FlippingCard";
import { AnswerTextArea } from "./AnswerTextArea";

export const Review = () => {
  return (
    <div tw="w-full md:max-w-3xl h-full flex flex-col items-center p-8 m-auto overflow-hidden">
      <h1 tw="text-center text-primary m-5">Let&apos;s review some words/sentences</h1>
      <FlippingCard />
      <AnswerTextArea />
    </div>
  );
};
