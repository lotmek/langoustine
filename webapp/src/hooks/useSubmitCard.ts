import { useState } from "react";
import { FullCard } from "../domain/model/card";

const useSubmitCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (card: FullCard) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("https://exemple.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
      });

      // Check the response from the server
      if (response.ok) {
        setSuccess(true);
      } else {
        throw new Error("An error occurred while submitting the form.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, success, submitForm };
};

export default useSubmitCard;
