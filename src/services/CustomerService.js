class CustomerService {
  constructor() {
    this.customers = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
      },
      {
        id: 2,
        firstName: "Jenna",
        lastName: "Doo",
      },
      {
        id: 3,
        firstName: "Jonna",
        lastName: "Dooe",
      },
    ];
  }

  getAll() {
    return this.customers;
  }

  get(id) {
    const customer = this.customers.find((customer) => customer.id == id)
    return customer
  }

  removeCustomer(id) {
    const newCustomers = this.customers.filter(
      (customer) => customer.id !== id
    );
    this.customers = newCustomers;
  }

  addCustomer(newCustomer) {
    const newCustomers = this.customers.push(newCustomer);
    return (this.customers = newCustomers);
  }
}

export default new CustomerService();
