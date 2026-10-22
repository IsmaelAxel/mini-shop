const API_URL = 'https://dummyjson.com/products?limit=8'

export async function getProducts() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('No se pudieron obtener los productos.')
  }

  const data = await response.json()

  return data.products
}