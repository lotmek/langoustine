import React, { useEffect, useState } from "react";
import "twin.macro";
import { FlippingCard } from "./FlippingCard";
import { AnswerTextArea } from "./AnswerTextArea";
import { Loader } from "../../components/Loader";
import { FullCard } from "../../domain/model/card";
import { cardService } from "../../service/card/card-service";
import { useTranslation } from "react-i18next";

export const ReviewCard: React.FC = () => {
  const { t } = useTranslation();
  const [isAnswerSubmitted, setAnswerSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [, setRandomCards] = useState<FullCard[]>([]);

  useEffect(() => {
    cardService
      .getRandomFullCards()
      .then((result) => {
        setRandomCards(result);
        console.log("Successful", result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("An error occured while retrieving review cards", err);
      });
  }, []);

  return (
    <div tw="w-full md:max-w-3xl h-full flex flex-col items-center p-8 m-auto overflow-hidden z-10">
      {isLoading ? (
        <div tw="absolute inset-0 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <h1 tw="text-center text-primary m-5 font-semibold">{t("reviewCard.title")}</h1>
          <FlippingCard isAnswerSubmitted={isAnswerSubmitted} />
          <AnswerTextArea setAnswerSubmitted={setAnswerSubmitted} />
        </>
      )}
    </div>
  );
};
