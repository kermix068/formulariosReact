import { useState } from "react";


const FormularioControlado = () => {

  const [todo, setTodo] = useState({
    todoName:"",
    todoDescripcion:"",
    todoEstado:"pendiente",
    todoCheck:false
  })

  const [error, setError] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const {todoName,todoDescripcion} = {...todo}
    if (!todoName.trim() || !todoDescripcion.trim()) {
      setError(true);
      return
    }
    setError(false);
  }
  const handleChange = (e) => {
    const {value, type,checked,name} = e.target
    setTodo({
      ...todo,
      [name]:type === "checkbox" ? checked: value
    })
  }

  const MensajeErrores = ()=>(
    <div className="alert alert-danger">Por favor llenar todos los Campos.</div>
  )
  return (
    <>
       <h1>Formulario Controlados</h1>
       {
         error && <MensajeErrores />
       }
      <form onSubmit={handleSubmit}>
        <input 
        type="text" placeholder="Ingrese Todo" name="todoName" 
        className="form-control mb-2"
        onChange={handleChange}
        value={todo.todoName}
        />
        <textarea name="todoDescripcion" className="form-control mb-2" placeholder="Ingrese la descripcion"
        onChange={handleChange}
        value={todo.todoDescripcion}
        />
        <select name="todoEstado" className="form-control mb-2"
        onChange={handleChange}
        value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-check">
          <input
            type="checkbox" 
            id="flexCheckDefault"
            className="form-check-input"
            name="todoCheck"
            onChange={handleChange}
            checked={todo.todoCheck}
            />
          <label 
            htmlFor="flexCheckDefault"
            className="form-check-label"
            >
            Dar prioridad
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </>
  )
}

export default FormularioControlado
