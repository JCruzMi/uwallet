import Button from "./Button";

export default function SectionButtons() {
  return <div className="flex gap-4 w-full max-w-sm">
    <Button icon="default" text="Send" click={() => {}} />
    <Button icon="default" text="Receive" click={() => {}}/>
    <Button icon="default" text="Withdraw" click={() => {}}/>
    <Button icon="default" text="Others" click={() => {}}/>
  </div>
}