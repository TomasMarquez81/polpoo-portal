export const API_BASE_URL = "https://api.polpoo.com"

export const apiClient = async (endpoint: string) => {

  const response = await fetch(`${API_BASE_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error("API error")
  }

  return response.json()
}