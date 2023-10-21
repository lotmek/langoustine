import * as React from "react";
import { Button } from "../../components/Button";
import styled from "styled-components";
import tw from "twin.macro";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FullCard } from "../../domain/model/card";
import { Language } from "domain/enum/language";

const StyledLabel = styled.label`
  ${tw`font-medium`}
`;

export const CreateCardForm: React.FC = () => {
  const initialValues: FullCard = {
    input: "",
    inputLanguage: Language.FR,
    outputLanguage: Language.EN,
    inputDefinition: "",
    inputExample: "",
    output: "",
    outputExample: "",
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
          <StyledLabel htmlFor="input">Phrase</StyledLabel>
          <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
            <Field tw="flex-[3] p-2" type="text" id="input" name="input" />
            <Field as="select" tw="flex-1" name="inputLanguage" id="inputLanguage">
              <option value="french">French</option>
              <option value="english">English</option>
            </Field>
          </div>
          <ErrorMessage name="input" component="div" />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="output">Translation</StyledLabel>
          <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
            <Field tw="flex-[3] p-2" type="text" id="output" name="output" />
            <Field as="select" tw="flex-1" name="outputLanguage" id="outputLanguage">
              <option value="french">French</option>
              <option value="english">English</option>
            </Field>
          </div>
          <ErrorMessage name="output" component="div" />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="inputDefinition">
            Definition <span tw="italic">- Optional</span>
          </StyledLabel>
          <Field
            as="textarea"
            id="inputDefinition"
            name="inputDefinition"
            rows={2}
            placeholder="Add the definition of the phrase"
            tw="p-2"
          />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="inputExample">Example in the source language</StyledLabel>
          <Field
            as="textarea"
            id="inputExample"
            name="inputExample"
            rows={2}
            placeholder="Use the input in a sentence"
            tw="p-2"
          />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="outputExample">Example in the target language</StyledLabel>
          <Field
            as="textarea"
            id="outputExample"
            name="outputExample"
            rows={2}
            placeholder="Use the input in a sentence"
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
