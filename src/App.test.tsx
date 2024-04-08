import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  const questions = [
    {
      question: "How you feel today?",
      options: [
        "Brilliant! I have so much energy.",
        "Always can be worse.",
        "Please, end my misery.",
      ],
    },
    {
      question: "How you like the Opinary test?",
      options: [
        "It was great and so challenging.",
        "Not bad, but you can improve.",
        "It was a nightmare, never again.",
      ],
    },
  ];

  it("renders correctly with provided questions", () => {
    render(<App questions={questions} />);

    expect(
      screen.getByRole("heading", { name: "Let's Go!!" })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Reload" })).toBeInTheDocument();
  });
});
