import react from "react";
import NavBar from "../../NavBar/NavBar";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";

const ProductList = (props) => {

    const { user, onSignOut } = props;

    const products = [
    {name:"Manzana Roja",price:10},
    {name:"Coca Cola",price:15},
    {name:"Pan",price:5},
    {name:"Pica Pollo",price:200}
    ]

    return (
        <div>

            <NavBar fullName={user.fullName} onSignOut={onSignOut} selectedTab="ProductList" />
            <h1>Lista de productos</h1>

            <div class="container">
                <br />
                <br />
                <button type="button" class="btn btn-success btn-lg">Agregar Producto</button>
                <br />
                <br />
                <table class="table table-striped table-bordered table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>

                        </tr>
                    </thead>
                    <tbody>
                        
                        {products.map((product,row)=>{
                            return <ProductItem product={product} row={row+1}/>
                        })} 
                        

                    </tbody>
                </table>

            </div>

        </div>
    );

}

export default ProductList;