const { app, initDb } = require("./app");

const PORT = process.env.PORT || 3001;

// Inicia el servidor y conecta a la base de datos.
app.listen(PORT, async () => {
  console.log(`Servidor backend escuchando en puerto ${PORT}`);
  await initDb();
});
