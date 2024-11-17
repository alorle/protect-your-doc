import { Helmet } from "react-helmet";
import { describe, expect, it, vi } from "vitest";

import { render, screen } from "./__tests__/utils";
import App from "./App";

vi.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("App", () => {
  it("should render the App component", async () => {
    render(<App />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent("Protect your doc");
  });

  it("should change document's title", () => {
    render(<App />);

    const helmet = Helmet.peek();
    expect(helmet.title).to.equal("Protect your doc");
  });
});
