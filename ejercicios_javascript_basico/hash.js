// Función asíncrona para hashear un mensaje de texto
async function hashConSHA256(mensaje) {
  // 1. Codificar el mensaje de texto a un formato de bytes (Uint8Array)
  const encoder = new TextEncoder();
  const data = encoder.encode(mensaje);

  // 2. Usar la API de Crypto para calcular el hash
  //    crypto.subtle.digest devuelve el hash en un formato llamado ArrayBuffer
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // 3. Convertir el ArrayBuffer a un string hexadecimal (lo que vemos usualmente)
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

// --- Cómo usarlo ---
const miTexto = "Hola mundo";

hashConSHA256(miTexto).then((hashResultado) => {
  console.log(`Texto original: ${miTexto}`);
  console.log(`Hash SHA-256: ${hashResultado}`);
});

// Si cambiamos el texto solo un poco
hashConSHA256("hola mundo").then((hashResultado) => {
  console.log(`\nTexto original: hola mundo`);
  console.log(`Hash SHA-256: ${hashResultado}`);
  console.log("¡Nota el 'Efecto Avalancha'!");
});
