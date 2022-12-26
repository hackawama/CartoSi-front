import apiClient from "./api";

export const getApiToken = (data) => apiClient.post("/token", data)
export const apiRegister = (data) => apiClient.post("/users", data)