/**
 * Hook para copiar y pegar
 **/

import { useEffect, useState } from "react";

// Define tu hook personalizado
function useDefaultHook() {
  // Utiliza useState u otros hooks según sea necesario
  const [value, setValue] = useState();

  // Utiliza useEffect u otros hooks según sea necesario
  useEffect(() => {
    // Realiza operaciones o efectos secundarios aquí
    console.log("El valor ha cambiado:", value);
  }, [value]); // Especifica las dependencias si es necesario

  // Devuelve cualquier valor o función que desees exponer
  return {
    value,
    setValue,
  };
}

export default useDefaultHook;
