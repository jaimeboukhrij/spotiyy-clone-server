const app = require("./app");

// Define el puerto en el que deseas que tu aplicación escuche
const PORT = 3005;

// Configura tu aplicación para que escuche en todas las direcciones IP en el puerto especificado
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
