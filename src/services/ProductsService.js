class ProductsService {
    constructor() {
        this.products = [
            {
                id: 101,
                name: "product1"
            },
            {
                id: 102,
                name: "product2"
            },
            {
                id: 103,
                name: "product3"
            },
            {
                id: 104,
                name: "product4"
            },
            {
                id: 105,
                name: "product5"
            }
        ];
    }
    
    getAll() {
        return this.products;
    }
}

export default new ProductsService()