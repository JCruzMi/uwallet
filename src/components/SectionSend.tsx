import Avatar from "./Avatar";

export default function SectionSend() {
  return (
    <div className="flex gap-4">
      {
        Array.from({ length: 5 }).map((item, index) =>
          <Avatar key={index} />
        )
      }
    </div>
  )
}