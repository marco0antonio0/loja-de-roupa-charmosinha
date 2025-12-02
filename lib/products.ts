export interface Product {
  id: string // Changed from number to string to match API
  name: string
  price: number
  image: string
  category: string
  sizes?: string[]
  description?: string
  inStock?: boolean
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://api-charmosinha.netlify.app/api/endpoint/yUeLxgrmtSOKU8joYhJF", {
      cache: "no-store" // Sempre busca dados frescos da API
    })

    const data = await response.json()

    // Transform API data to match our Product interface
    const products = data.items.map((item: any) => ({
      id: item.id,
      name: item.data.titulo,
      price: Number(item.data.preco),
      image: item.data.imagem,
      category: item.data.categoria || "geral",
      sizes: ["P", "M", "G", "GG"], 
      description: item.data.titulo,
      inStock: true,
    }))

    return products || []
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProducts()
  return products.find(p => p.id === id)
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await getProducts()
  
  // Se for "Geral", retorna TODOS os produtos
  if (category.toLowerCase() === "geral") {
    return products
  }
  
  // Caso contrário, filtra pela categoria específica
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await fetch("https://api-charmosinha.netlify.app/api/endpoint/nAZdbrp0Nfk1NXknU16J", {
      cache: "no-store" // Sempre busca dados frescos da API
    })
    const data = await response.json()
    
    // Extract category names from API and capitalize first letter
    const categories = data.items.map((item: any) => {
      const nome = item.data.nome as string
      return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
    })
    
    return categories.sort()
  } catch (error) {
    console.error("Error fetching categories:", error)
    // Fallback to products categories if API fails
    const products = await getProducts()
    const categories = Array.from(new Set(products.map(p => p.category)))
    return categories.sort()
  }
}
