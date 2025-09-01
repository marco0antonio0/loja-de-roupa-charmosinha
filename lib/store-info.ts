export interface StoreInfo {
  whatsapp: string
  telefone: string
  sobre: string
}

export async function getStoreInfo(): Promise<StoreInfo | null> {
  try {
    const response = await fetch("https://api-charmosinha.netlify.app/api/endpoint/NygKm957MaH6e8y5qLyL")
    const data = await response.json()

    // Get the first item from the API response
    if (data.items && data.items.length > 0) {
      const firstItem = data.items[0]
      return {
        whatsapp: firstItem.data.whatsapp,
        telefone: firstItem.data.telefone,
        sobre: firstItem.data.sobre,
      }
    }

    return null
  } catch (error) {
    console.error("Error fetching store info:", error)
    return null
  }
}
