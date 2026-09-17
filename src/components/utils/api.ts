// utils/api.ts

// Base URL for the backend API. Defaults to the deployed backend so existing
// behavior is unchanged; override with NEXT_PUBLIC_API_URL for local testing.
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://bankapi-qks3.onrender.com";

export const fetchApi = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}), // merge custom headers
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }

  return res.json();
};
