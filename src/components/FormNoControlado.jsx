import { useRef } from "react";

const FormNoControlado = () => {
  const formulario = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const datos = new FormData(formulario.current);
  
    const objetoDatos = Object.fromEntries([...datos.entries()]);
  
    const {todoName,todoDescripcion,todoEstado} = objetoDatos
    if(!todoName.trim() || !todoDescripcion.trim()){
      console.log("se encuentra vacio");
      return
    }
  }
  return (
    <>
      <h1>Formulario No Controlados</h1>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input 
        type="text" placeholder="Ingrese Todo" name="todoName" 
        className="form-control mb-2"
        defaultValue="tarea01"
        />
        <textarea name="todoDescripcion" className="form-control mb-2" placeholder="Ingrese la descripcion"
        defaultValue="descripcion de todo lo dicho anteriormente"
        />
        <select name="todoEstado" className="form-control mb-2">
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </>
  )
}

export default FormNoControlado
