import express from "express";
import tareasRuta from "./rutas/tareas.rutas.js";

const app = express();
const PORT = 3000;
const tareas = [
  {
    id: 1,
    title: "Tarea 1",
    descripcion: "descripcion tarea 1",
    completed: false,
  },
  {
    id: 2,
    title: "Tarea 2",
    descripcion: "descripcion tarea 2",
    completed: true,
  },
];

//console.log(tareas);

app.get("/", (req, res) => {
  //   console.log(req);
  //   console.log(res);
  return res.send({ message: "hi lucky!!" });
});

// app.get("/tareas", (req, res) => {
//   return res.json(tareas);
// });

app.use("/tareas", tareasRuta);

app.listen(PORT, (req, res) => {
  console.log("Listen on port " + PORT);
});
