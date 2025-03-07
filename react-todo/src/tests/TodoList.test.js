import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../TodoList"; // Assure-toi que le chemin est correct

// Test: Vérification du rendu initial
test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Apprendre React")).toBeInTheDocument();
  expect(screen.getByText("Faire les exercices ALX")).toBeInTheDocument();
});

// Test: Ajout d'une tâche
test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Ajouter une tâche");
  const button = screen.getByText("➕");
  
  fireEvent.change(input, { target: { value: "Nouvelle tâche" } });
  fireEvent.click(button);
  
  expect(screen.getByText("Nouvelle tâche")).toBeInTheDocument();
});

// Test: Toggle d'une tâche
test("toggles todo completion", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Apprendre React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveClass("completed");
});

// Test: Suppression d'une tâche
test("deletes a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Apprendre React");
  const deleteButton = todoItem.nextSibling;
  
  fireEvent.click(deleteButton);
  expect(todoItem).not.toBeInTheDocument();
});
