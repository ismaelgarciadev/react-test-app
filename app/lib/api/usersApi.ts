import { ofetch } from "ofetch";
import type { User } from "../../../types";

// TODO: move to env
const API_URL = "http://localhost:3001";

export const getUsers = async () => {
  return ofetch<User[]>(`${API_URL}/users`);
};

export const createUser = async (user: User) => {
  return ofetch<User>(`${API_URL}/users`, {
    method: "POST",
    body: user,
  });
};

export const updateUser = async (user: User) => {
  return ofetch<User>(`${API_URL}/users/${user.id}`, {
    method: "PUT",
    body: user,
  });
};

export const deleteUser = async (id: number) => {
  return ofetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });
};

export const getUser = async (id: number) => {
 return ofetch(`${API_URL}/users/${id}`);
};
