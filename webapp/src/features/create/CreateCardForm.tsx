import React, { useState } from "react";
import { Button } from "../../components/Button";
import styled from "styled-components";
import tw from "twin.macro";
import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";
import { FullCard } from "../../domain/model/card";
import { Language } from "domain/enum/language";
import { useTranslation } from "react-i18next";
import { Loader } from "../../components/Loader";
import { cardService } from "../../service/card/card-service";

const StyledLabel = styled.label`
  ${tw`font-medium`}
`;

export const CreateCardForm: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: FullCard = {
    input: "",
    inputLanguage: Language.FR,
    outputLanguage: Language.EN,
    inputExample: "",
    output: "",
    outputExample: "",
  };

  const onSubmit = (values: FullCard) => {
    setIsLoading(true);
    cardService
      .createCard(values)
      .then(() => {
        alert("The card was created successfully");
      })
      .catch((err) => {
        alert("An error occured while creating the card");
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validate = (values: FullCard): FormikErrors<FullCard> => {
    const errors: FormikErrors<FullCard> = {};
    if (!values.input) {
      errors.input = t("createCard.manualForm.requiredField");
    }
    if (!values.output) {
      errors.output = t("createCard.manualForm.requiredField");
    }
    return errors;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
      {({ isValid }) => (
        <Form tw="flex flex-col h-full bg-amber-400 p-5 rounded-lg w-full max-w-3xl relative">
          {isLoading && (
            <div tw="absolute inset-0 flex justify-center items-center bg-gray-500 opacity-30">
              <Loader />
            </div>
          )}
          <div tw="w-full gap-y-2 flex flex-col mb-4">
            <StyledLabel htmlFor="input">{t("createCard.manualForm.input")}</StyledLabel>
            <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
              <Field tw="flex-[3] p-2" type="text" id="input" name="input" autoComplete="off" />
              <Field as="select" tw="flex-1" name="inputLanguage" id="inputLanguage">
                <option value={Language.FR}>{t("language.french")}</option>
                <option value={Language.EN}>{t("language.english")}</option>
              </Field>
            </div>
            <ErrorMessage name="input" component="div" />
          </div>

          <div tw="w-full gap-y-2 flex flex-col mb-4">
            <StyledLabel htmlFor="output">{t("createCard.manualForm.output")}</StyledLabel>
            <div tw="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
              <Field tw="flex-[3] p-2" type="text" id="output" name="output" autoComplete="off" />
              <Field as="select" tw="flex-1" name="outputLanguage" id="outputLanguage">
                <option value={Language.FR}>{t("language.french")}</option>
                <option value={Language.EN}>{t("language.english")}</option>
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
            />
          </div>

          <div tw="w-full gap-y-2 flex flex-col mb-4">
            <StyledLabel htmlFor="imageUrl">
              {t("createCard.manualForm.imageUrl")}{" "}
              <span tw="italic">- {t("createCard.manualForm.optional")}</span>
            </StyledLabel>
            <Field tw="flex-[3] p-2" type="text" id="imageUrl" name="imageUrl" autoComplete="off" />
          </div>

          <div tw="w-full m-auto flex justify-center">
            <Button type="submit" disabled={!isValid}>
              {t("createCard.manualForm.create")}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
