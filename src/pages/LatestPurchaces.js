import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ProductsList } from "../components/ProductsList";
import { SingleCustomerDetails } from "../components/SingleCustomerDetails"
import CustomerService from "../services/CustomerService";
import ProductsService from "../services/ProductsService"

export const LatestPurchaces = () => {
    const [customer, setCustomer] = useState({});
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    

    const history = useHistory();

    const handleGetCustomer = () => {
        const theCustomer = CustomerService.get(id)
        if (!theCustomer) {
             history.push("/customers")
        }
        setCustomer(theCustomer);
    }

    useEffect(() => {
        handleGetCustomer();
    }, [id]);

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
            <SingleCustomerDetails customer={customer} index={customer.id}/>
            <ProductsList products={products}/></div>
    )
}