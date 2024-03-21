type Card = {
  amount?: number
  name?: string
  category?: string
}

export default function Card({amount, name, category}: Card) {
  return (
    <div className="min-h-40 rounded-lg bg-gradient-to-r from-pink-300 to-purple-500">
    </div>
  )
}