import React from "react";
import "twin.macro";
import { Button } from "../../components/Button";

export const CreateCardForm = () => {
  return (
    <form tw="flex flex-col h-full bg-amber-300 p-5 rounded-lg w-full">
      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <label htmlFor="formPhrase">Phrase</label>
        <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
          <input tw="flex-[3] p-2" type="text" id="formPhrase" name="formPhrase" />
          <select tw="flex-1" name="cars" id="cars">
            <option value="volvo">French</option>
            <option value="saab">English</option>
          </select>
        </div>
      </div>

      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <label htmlFor="formTranslation">Translation</label>
        <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
          <input tw="flex-[3] p-2" type="text" id="formTranslation" name="formTranslation" />
          <select tw="flex-1" name="cars" id="cars">
            <option value="volvo">French</option>
            <option value="saab">English</option>
          </select>
        </div>
      </div>

      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <label htmlFor="formPhraseDefinition">
          Definition <span tw="italic">- Optional</span>
        </label>
        <textarea
          id="formPhraseDefinition"
          name="formPhraseDefinition"
          rows={2}
          placeholder="Add the definition of the phrase"
          tw="p-2"
        ></textarea>
      </div>

      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <label htmlFor="formPhraseExample">Example in the source language</label>
        <textarea id="formPhraseExample" name="formPhraseExample" rows={2} placeholder="Use the phrase in a sentence" tw="p-2"></textarea>
      </div>

      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <label htmlFor="formTranslationExample">Example in the source language</label>
        <textarea
          id="formTranslationExample"
          name="formTranslationExample"
          rows={2}
          placeholder="Use the phrase in a sentence"
          tw="p-2"
        ></textarea>
      </div>

      <div tw="w-full gap-y-2 flex flex-col mb-4">
        <label htmlFor="formPhrase">
          Image URL <span tw="italic">- Optional</span>
        </label>
        <input tw="flex-[3] p-2" type="text" id="formPhrase" name="formPhrase" />
      </div>

      <div tw="w-full m-auto flex justify-center">
        <Button>Create the card</Button>
      </div>
    </form>
  );
};
