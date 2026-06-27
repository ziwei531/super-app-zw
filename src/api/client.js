const baseUrl = "https://dummyjson.com/quotes"

export async function getRandomQuote() {
  const res = await fetch(`${baseUrl}/random`)
  const data = await res.json()
  return { content: data.quote, author: data.author }
}
