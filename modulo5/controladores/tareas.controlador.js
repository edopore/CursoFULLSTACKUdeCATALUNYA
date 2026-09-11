class TareasControlador {
  obtenerTareas = (req, res) => {
    console.log("get tareas");
    return res.send("get tareas");
  };

  crearTarea = (req, res) => {
    console.log("post tareas");
    return res.send("post tareas");
  };

  actualizarTarea = (req, res) => {
    console.log("put tareas");
    return res.send("put tareas");
  };

  eliminarTarea = (req, res) => {
    console.log("delete tareas");
    return res.send("delete tareas");
  };
}

export default TareasControlador;
