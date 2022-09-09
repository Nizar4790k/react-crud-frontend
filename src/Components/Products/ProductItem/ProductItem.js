import react from "react";

const deleteProduct = async (_id) => {



    const response = await fetch(`${process.env.REACT_APP_SERVER}/products`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: _id })
    });

    if (response.status === 200) {
        alert("Producto eliminado con exito");
    }

}

const ProductItem = ({ product, row }) => {

    return (

        <tr>
            <th scope="row">{row}</th>
            <td>{product.nombre}</td>
            <td>{product.precio}</td>
            <td><button className="btn btn-danger" onClick={() => { deleteProduct(product._id) }}>Eliminar</button></td>
        </tr>

    );

}

export default ProductItem;