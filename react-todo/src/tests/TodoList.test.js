// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList"; // Assure-toi que le chemin est correct

// Test: Vérification du rendu initial
test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Apprendre React")).toBeInTheDocument();
  expect(screen.getByText("Faire les exercices ALX")).toBeInTheDocument();
  expect(screen.getByText("Créer une app Todo")).toBeInTheDocument();
});

// Test: Ajout d'une tâche
test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Ajouter une tâche"); // Assure-toi que cet élément existe
  const button = screen.getByText("➕"); // Vérifie si le bouton est correctement représenté
  
  fireEvent.change(input, { target: { value: "Nouvelle tâche" } });
  fireEvent.click(button);
  
  // Vérifie que la nouvelle tâche a été ajoutée
  expect(screen.getByText("Nouvelle tâche")).toBeInTheDocument();
});

// Test: Toggle d'une tâche
test("toggles todo completion", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Apprendre React");
  
  // Simule un clic pour marquer la tâche comme terminée
  fireEvent.click(todoItem);
  
  // Vérifie si la tâche a la classe "completed"
  expect(todoItem).toHaveClass("completed");
});

// Test: Suppression d'une tâche
test("deletes a todo", () => {
  render(<TodoList />);
  
  // Sélectionne la tâche à supprimer
  const todoItem = screen.getByText("Apprendre React");
  
  // Sélectionne le bouton de suppression
  const deleteButton = screen.getByText("❌");
  
  // Clique sur le bouton pour supprimer la tâche
  fireEvent.click(deleteButton);
  
  // Vérifie si la tâche a été supprimée de la liste
  expect(todoItem).not.toBeInTheDocument();
});
