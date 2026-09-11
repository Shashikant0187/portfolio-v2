const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export const api = {
  // Authentication
  login: (email, password) =>
    apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  register: (email, password) =>
    apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  // Public projects
  getProjects: () =>
    apiRequest("/projects"),

  // Selected/private projects
  getSelectedProjects: (accessCode) =>
    apiRequest("/projects/selected", {
      headers: {
        "X-Project-Access-Code": accessCode,
      },
    }),

  // Admin project management
  createProject: (project) =>
    apiRequest("/projects", {
      method: "POST",
      body: JSON.stringify(project),
    }),

  updateProject: (id, project) =>
    apiRequest(`/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(project),
    }),

  deleteProject: (id) =>
    apiRequest(`/projects/${id}`, {
      method: "DELETE",
    }),
};