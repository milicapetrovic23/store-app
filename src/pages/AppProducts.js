import { useEffect, useState } from "react";
import { ProductsList } from "../components/ProductsList";
import ProductsService from "../services/ProductsService";

export const AppProducts = () => {
    const [products, setProducts] = useState([]);

    const handleGetProducts = () => {
        const prod = ProductsService.getAll()
        console.log(prod)
        setProducts(prod)
    }

    useEffect(() => {
        handleGetProducts();
    }, []);

    return (
        <div>
            <ProductsList products={products}/>
        </div>
    )

};
