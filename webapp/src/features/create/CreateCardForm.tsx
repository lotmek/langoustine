import * as React from "react";
import { Button } from "../../components/Button";
import styled from "styled-components";
import tw from "twin.macro";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FullCard } from "../../domain/model/card";
import { Language } from "domain/enum/language";
import { useTranslation } from "react-i18next";

const StyledLabel = styled.label`
  ${tw`font-medium`}
`;

export const CreateCardForm: React.FC = () => {
  const { t } = useTranslation();
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
    console.log("Submit !", values);
  };

  const validate = (values: FullCard) => {
    console.log("Validate !", values);
    const errors = {};
    return errors;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
      <Form tw="flex flex-col h-full bg-amber-400 p-5 rounded-lg w-full">
        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="input">{t("createCard.manualForm.input")}</StyledLabel>
          <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
            <Field tw="flex-[3] p-2" type="text" id="input" name="input" autocomplete="off" />
            <Field as="select" tw="flex-1" name="inputLanguage" id="inputLanguage">
              <option value="french">{t("language.french")}</option>
              <option value="english">{t("language.english")}</option>
            </Field>
          </div>
          <ErrorMessage name="input" component="div" />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="output">{t("createCard.manualForm.output")}</StyledLabel>
          <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
            <Field tw="flex-[3] p-2" type="text" id="output" name="output" autocomplete="off" />
            <Field as="select" tw="flex-1" name="outputLanguage" id="outputLanguage">
              <option value="french">{t("language.french")}</option>
              <option value="english">{t("language.english")}</option>
            </Field>
          </div>
          <ErrorMessage name="output" component="div" />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="inputDefinition">
            {t("createCard.manualForm.definition")}{" "}
            <span tw="italic">- {t("createCard.manualForm.optional")}</span>
          </StyledLabel>
          <Field
            as="textarea"
            id="inputDefinition"
            name="inputDefinition"
            rows={2}
            placeholder={t("createCard.manualForm.definitionPlaceholder")}
            tw="p-2"
            autocomplete="off"
          />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="inputExample">
            {t("createCard.manualForm.inputExample")}
          </StyledLabel>
          <Field
            as="textarea"
            id="inputExample"
            name="inputExample"
            rows={2}
            placeholder={t("createCard.manualForm.examplePlaceholder")}
            tw="p-2"
            autocomplete="off"
          />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="outputExample">
            {t("createCard.manualForm.outputExample")}
          </StyledLabel>
          <Field
            as="textarea"
            id="outputExample"
            name="outputExample"
            rows={2}
            placeholder={t("createCard.manualForm.examplePlaceholder")}
            tw="p-2"
            autocomplete="off"
          />
        </div>

        <div tw="w-full gap-y-2 flex flex-col mb-4">
          <StyledLabel htmlFor="imageUrl">
            {t("createCard.manualForm.imageUrl")}{" "}
            <span tw="italic">- {t("createCard.manualForm.optional")}</span>
          </StyledLabel>
          <Field tw="flex-[3] p-2" type="text" id="imageUrl" name="imageUrl" autocomplete="off" />
        </div>

        <div tw="w-full m-auto flex justify-center">
          <Button type="submit">{t("createCard.manualForm.create")}</Button>
        </div>
      </Form>
    </Formik>
  );
};
