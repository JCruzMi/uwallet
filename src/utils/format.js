// #region Functions (1)

export default function Format(valor) {
  return new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
    maximumFractionDigits: 0,
  }).format(valor);
}

// #endregion Functions (1)
