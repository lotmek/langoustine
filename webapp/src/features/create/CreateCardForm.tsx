import React from "react";
import { Button } from "../../components/Button";
import styled from "styled-components";
import tw from "twin.macro";

const StyledLabel = styled.label`
  ${tw`font-medium`}
`;

export const CreateCardForm = () => {
  return (
    <form tw="flex flex-col h-full bg-amber-400 p-5 rounded-lg w-full">
      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <StyledLabel htmlFor="formPhrase">Phrase</StyledLabel>
        <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
          <input tw="flex-[3] p-2" type="text" id="formPhrase" name="formPhrase" />
          <select tw="flex-1" name="cars" id="cars">
            <option value="volvo">French</option>
            <option value="saab">English</option>
          </select>
        </div>
      </div>

      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <StyledLabel htmlFor="formTranslation">Translation</StyledLabel>
        <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
          <input tw="flex-[3] p-2" type="text" id="formTranslation" name="formTranslation" />
          <select tw="flex-1" name="cars" id="cars">
            <option value="volvo">French</option>
            <option value="saab">English</option>
          </select>
        </div>
      </div>

      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <StyledLabel htmlFor="formPhraseDefinition">
          Definition <span tw="italic">- Optional</span>
        </StyledLabel>
        <textarea
          id="formPhraseDefinition"
          name="formPhraseDefinition"
          rows={2}
          placeholder="Add the definition of the phrase"
          tw="p-2"
        ></textarea>
      </div>

      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <StyledLabel htmlFor="formPhraseExample">Example in the source language</StyledLabel>
        <textarea id="formPhraseExample" name="formPhraseExample" rows={2} placeholder="Use the phrase in a sentence" tw="p-2"></textarea>
      </div>

      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <StyledLabel htmlFor="formTranslationExample">Example in the source language</StyledLabel>
        <textarea
          id="formTranslationExample"
          name="formTranslationExample"
          rows={2}
          placeholder="Use the phrase in a sentence"
          tw="p-2"
        ></textarea>
      </div>

      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <StyledLabel htmlFor="formPhrase">
          Image URL <span tw="italic">- Optional</span>
        </StyledLabel>
        <input tw="flex-[3] p-2" type="text" id="formPhrase" name="formPhrase" />
      </div>

      <div tw="w-full m-auto flex justify-center">
        <Button>Create the card</Button>
      </div>
    </form>
  );
};
