class ProductsService {
    constructor() {
        this.products = [
            {
                id: 101,
                name: "product1",
                customers: [1, 3]
            },
            {
                id: 102,
                name: "product2",
                customers: [1, 3]
            },
            {
                id: 103,
                name: "product3",
                customers: [2]
            },
            {
                id: 104,
                name: "product4",
                customers: [1, 2]
            },
            {
                id: 105,
                name: "product5",
                customers: [2,3]
            }
        ];
    }
    
    getAll() {
        return this.products;
    }

    getById(id) {
        const prod = this.products.find((product) => product.id === id)
        return prod
    }

    getPurchace(customerUsername) {
        const purchase = this.products.filter((product)=> product.customers.includes(customerUsername))
        return purchase
    }
}

export default new ProductsService()