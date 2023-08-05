import { render, fireEvent } from "@testing-library/react";
import { AnswerTextArea } from "./AnswerTextArea";

describe("AnswerTextArea", () => {
  it("should update the answer state on input change", () => {
    const setAnswerSubmitted = jest.fn();
    const { getByPlaceholderText } = render(
      <AnswerTextArea setAnswerSubmitted={setAnswerSubmitted} />
    );

    const inputElement = getByPlaceholderText("Your answer...") as HTMLTextAreaElement;

    fireEvent.change(inputElement, { target: { value: "Test answer" } });

    expect(inputElement.value).toBe("Test answer");
  });

  it("should call setAnswerSubmitted when the form is submitted", () => {
    const setAnswerSubmitted = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <AnswerTextArea setAnswerSubmitted={setAnswerSubmitted} />
    );

    const inputElement = getByPlaceholderText("Your answer...");
    const submitButton = getByText("Send message");

    fireEvent.change(inputElement, { target: { value: "Test answer" } });
    fireEvent.click(submitButton);

    expect(setAnswerSubmitted).toHaveBeenCalledWith(true);
  });

  it("should call setAnswerSubmitted when Enter key is pressed", () => {
    const setAnswerSubmitted = jest.fn();
    const { getByPlaceholderText } = render(
      <AnswerTextArea setAnswerSubmitted={setAnswerSubmitted} />
    );

    const inputElement = getByPlaceholderText("Your answer...");

    fireEvent.change(inputElement, { target: { value: "Test answer" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(setAnswerSubmitted).toHaveBeenCalledWith(true);
  });
});
