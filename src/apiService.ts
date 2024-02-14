export async function fetchData(text: string) {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/historicalevents?text=${text}`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': import.meta.env.VITE_SECRET_KEY ?? '',
          'Content-Type': 'application/json',
        },
      },
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export default fetchData
