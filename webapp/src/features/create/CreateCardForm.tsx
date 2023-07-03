import React from "react";
import { Button } from "../../components/Button";
import styled from "styled-components";
import tw from "twin.macro";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FullCard } from "../../domain/model/card";

const StyledLabel = styled.label`
  ${tw`font-medium`}
`;

export const CreateCardForm = () => {
  const initialValues: FullCard = {
    phrase: "",
    phraseLanguage: "",
    translationLanguage: "",
    phraseDefinition: "",
    phraseExample: "",
    translation: "",
    translationExample: "",
    imageUrl: "",
  };

  const onSubmit = (values: FullCard) => {
    console.log(values);
  };

  const validate = (values: FullCard) => {
    console.log(values);
    const errors = {};
    return errors;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
      <Form tw="flex flex-col h-full bg-amber-400 p-5 rounded-lg w-full">
        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="phrase">Phrase</StyledLabel>
          <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
            <Field tw="flex-[3] p-2" type="text" id="phrase" name="phrase" />
            <Field as="select" tw="flex-1" name="phraseLanguage" id="phraseLanguage">
              <option value="french">French</option>
              <option value="english">English</option>
            </Field>
          </div>
          <ErrorMessage name="phrase" component="div" />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="translation">Translation</StyledLabel>
          <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
            <Field tw="flex-[3] p-2" type="text" id="translation" name="translation" />
            <Field as="select" tw="flex-1" name="translationLanguage" id="translationLanguage">
              <option value="french">French</option>
              <option value="english">English</option>
            </Field>
          </div>
          <ErrorMessage name="translation" component="div" />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="phraseDefinition">
            Definition <span tw="italic">- Optional</span>
          </StyledLabel>
          <Field
            as="textarea"
            id="phraseDefinition"
            name="phraseDefinition"
            rows={2}
            placeholder="Add the definition of the phrase"
            tw="p-2"
          />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="phraseExample">Example in the source language</StyledLabel>
          <Field
            as="textarea"
            id="phraseExample"
            name="phraseExample"
            rows={2}
            placeholder="Use the phrase in a sentence"
            tw="p-2"
          />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="translationExample">Example in the target language</StyledLabel>
          <Field
            as="textarea"
            id="translationExample"
            name="translationExample"
            rows={2}
            placeholder="Use the phrase in a sentence"
            tw="p-2"
          />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="imageUrl">
            Image URL <span tw="italic">- Optional</span>
          </StyledLabel>
          <Field tw="flex-[3] p-2" type="text" id="imageUrl" name="imageUrl" />
        </div>

        <div tw="w-full m-auto flex justify-center">
          <Button type="submit">Create the card</Button>
        </div>
      </Form>
    </Formik>
  );
};
