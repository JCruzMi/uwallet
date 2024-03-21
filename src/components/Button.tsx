type Button = {
  icon?: string
  text?: string
  click?: Function
}

export default function Button({icon, text, click}: Button) {
  return (
    <button className="w-full aspect-square bg-primary rounded-2xl text-black bg-pink-200">
      {text}
    </button>
  )
}