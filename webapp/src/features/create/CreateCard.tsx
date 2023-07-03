import React from "react";
import "twin.macro";
import { CreateCardForm } from "./CreateCardForm";
export const CreateCard = () => {
  return (
    <div tw="w-full md:max-w-3xl h-full flex flex-col items-center p-8 m-auto z-10">
      <h1 tw="text-center text-primary m-5 font-semibold">Let&apos;s review some words/sentences</h1>
      <CreateCardForm />
    </div>
  );
};
