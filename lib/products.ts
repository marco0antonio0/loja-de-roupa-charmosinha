export interface Product {
  id: string // Changed from number to string to match API
  name: string
  price: number
  image: string
  category?: string
  sizes?: string[]
  description?: string
  inStock?: boolean
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://api-charmosinha.netlify.app/api/endpoint/Az2YrSZjvVgj3USlfCJO")
    const data = await response.json()

    // Transform API data to match our Product interface
    return data.items.map((item: any) => ({
      id: item.id,
      name: item.data.titulo,
      price: item.data.preco,
      image: item.data.imagem,
      category: "Roupas",
      sizes: ["P", "M", "G", "GG"], // Default sizes since API doesn't provide them
      description: item.data.titulo,
      inStock: true,
    }))
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export function getProductById(id: string): Product | undefined {
  // This will need to be async in real usage, but keeping sync for compatibility
  return undefined
}

export function getProductsByCategory(category: string): Product[] {
  // This will need to be async in real usage, but keeping sync for compatibility
  return []
}

export const categories = ["Roupas"]
