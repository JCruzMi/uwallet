import { toast } from "@/components/ui/use-toast";

// #region Functions (1)

//TODO: añadir toast de que copio el texto
export default function copyText(text: string) {
  navigator.clipboard.writeText(text);
  toast({
    title: "Copied",
    description: `${text}`,
    variant: "info",
  });
}

// #endregion Functions (1)
