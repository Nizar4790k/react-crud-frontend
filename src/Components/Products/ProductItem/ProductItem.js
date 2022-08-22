import react from "react";

const ProductItem = ({ product,row}) => {

    return (
        
            <tr>
                <th scope="row">{row}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                
            </tr>
        
    );

}

export default ProductItem;