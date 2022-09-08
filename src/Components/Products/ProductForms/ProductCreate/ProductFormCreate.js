import react from 'react';
import { useNavigate } from "react-router";

const createProduct = async () => {

  const campoNombre = document.getElementById("nombre");
  const campoPrecio = document.getElementById("precio");


  const nombre = campoNombre.value;
  const precio = campoPrecio.value;

  const product = { nombre: nombre, precio: precio };

  const response = await fetch(`${process.env.REACT_APP_PROXY}/products`, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({ nombre: nombre, precio: precio })
  });

  console.log(response);

  if (response.status === 200) {
    alert("El producto fue insertado correctamente");

  } else {
    alert("Error al insertar producto");
  }

  campoNombre.value = "";
  campoPrecio.value = "";


}

const ProductFormCreate = () => {

  const navigate = useNavigate();

  const goToProductList = () => {
    navigate('/ProductList');

  }

  return (
    <div>
      <div className="form-horizontal">
        <h4>Crear Producto</h4>
        <hr />

        <div className="form-group">
          <label>Nombre</label>
          <div className="col-md-10">
            <input type="text" id="nombre" className="form-control" />
          </div>
        </div>

        <br />

        <div className="form-group">
          <label>Precio</label>
          <div className="col-md-10">
            <input type="text" id="precio" className="form-control" />
          </div>
        </div>

        <br />


        <br />
        <div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <button value="Create" className="btn btn-success" onClick={createProduct}>Create</button>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div>
          <button className='btn btn-danger' onClick={goToProductList}>Volver a la lista</button>
        </div>
      </div>
    </div>
  );
};



export default ProductFormCreate;
