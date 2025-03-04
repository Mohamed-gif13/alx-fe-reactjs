import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders the todo list with initial items", () => {
  render(<TodoList />);
  expect(screen.getByText("Apprendre React")).toBeInTheDocument();
  expect(screen.getByText("Faire les courses")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Ajouter une tâche...");
  const button = screen.getByText("Ajouter");

  fireEvent.change(input, { target: { value: "Nouvelle tâche" } });
  fireEvent.click(button);

  expect(screen.getByText("Nouvelle tâche")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Apprendre React");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("❌")[0];

  fireEvent.click(deleteButton);
  expect(screen.queryByText("Apprendre React")).not.toBeInTheDocument();
});
