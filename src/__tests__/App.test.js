import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("pizza checkbox is initially unchecked", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  expect(addPepperoni).not.toBeChecked(); // Correct usage of toBeChecked() assertion
});

test("toppings list initially contains only cheese", () => {
  render(<App />);
  expect(screen.getByText("Cheese")).toBeInTheDocument();
  expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument(); // Correctly query the text
});

test("checkbox appears as checked when user clicks it", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked(); // Correct usage of toBeChecked() assertion
});

test("topping appears in toppings list when checked", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(screen.getAllByRole("listitem").length).toBe(2); // Ensure both Cheese and Pepperoni are listed
  expect(screen.getByText("Cheese")).toBeInTheDocument();
  expect(screen.getByText("Pepperoni")).toBeInTheDocument();
});

test("selected topping disappears when checked a second time", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni); // Add pepperoni
  userEvent.click(addPepperoni); // Remove pepperoni
  expect(addPepperoni).not.toBeChecked(); // Ensure the checkbox is unchecked after the second click
  expect(screen.getByText("Cheese")).toBeInTheDocument();
  expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument(); // Ensure Pepperoni is no longer in the list
});
