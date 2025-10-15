import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders SmartAura header", () => {
  render(<App />);
  const linkElement = screen.getByText(/SmartAura/i);
  expect(linkElement).toBeInTheDocument();
});
