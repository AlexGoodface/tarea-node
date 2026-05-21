const express = require("express");
const app = express();

app.use(express.json());

// 👇 RUTA DE TAREAS ARRIBA DE TODO
app.get("/tareas", (req, res) => {
  const tareas = [
    { id: 1, titulo: "Hacer tarea", completado: false },
    { id: 2, titulo: "Estudiar Node.js", completado: true },
    { id: 3, titulo: "Enviar proyecto", completado: false }
  ];

  res.json(tareas);
});

// 👇 luego lo demás
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

app.post("/guardar", (req, res) => {
  console.log("Datos recibidos:", req.body);
  res.status(201).json({ mensaje: "Guardado correctamente" });
});

app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});