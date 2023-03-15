export const ProductsList = ({products}) => {
    
    return (
        <ul>
            {products.map((product, index) => (
                <li key={index}>{product.name}</li>
            ))}
        </ul>
    )
}