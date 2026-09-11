import { Router } from "express";
import TareasControlador from "../controladores/tareas.controlador.js";

const ruta = Router();
const tareasControlador = new TareasControlador();
ruta
  .get("/", tareasControlador.obtenerTareas)
  .post("/", tareasControlador.crearTarea)
  .put("/", tareasControlador.actualizarTarea)
  .delete("/", tareasControlador.eliminarTarea);

export default ruta;
