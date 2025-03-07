import { Product, CreateProductDto, UpdateProductDto } from "@/types/product";
import { User } from "@/types/user";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// Helper function to get the authorization header
const getAuthHeader = (): Record<string, string> => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Helper function to handle API errors
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.message || response.statusText || "An error occurred";
    throw new Error(errorMessage);
  }
  return response.json();
};

// Auth API Functions
export const registerUser = async (userData: { email: string; password: string; name: string }): Promise<User> => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  
  return handleResponse(response);
};

export const loginUser = async (credentials: { email: string; password: string }): Promise<{ user: User; token: string }> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  
  return handleResponse(response);
};

// Product API Functions
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`, {
    headers: {
      ...getAuthHeader(),
    },
  });
  
  return handleResponse(response);
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    headers: {
      ...getAuthHeader(),
    },
  });
  
  return handleResponse(response);
};

export const createProduct = async (productData: CreateProductDto): Promise<Product> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(productData),
  });
  
  return handleResponse(response);
};

export const updateProduct = async (id: string, productData: UpdateProductDto): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(productData),
  });
  
  return handleResponse(response);
};

export const deleteProduct = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(),
    },
  });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.message || response.statusText || "An error occurred";
    throw new Error(errorMessage);
  }
};