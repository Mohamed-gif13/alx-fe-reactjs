// src/services/githubService.js

const BASE_URL = "https://api.github.com";

export async function fetchUserData(username) {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  return response.json();
}

export async function fetchAdvancedUserSearch(username, location, minRepos, page = 1) {
  let query = [];
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const searchQuery = query.join("+");
  const url = `${BASE_URL}/search/users?q=${searchQuery}&page=${page}&per_page=30`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Search failed");
  }

  const data = await response.json();
  return data.items || [];
}
