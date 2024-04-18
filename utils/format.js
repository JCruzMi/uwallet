export default function Format(valor) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  })
    .format(valor)
    .replace("$", "$ ");
}
