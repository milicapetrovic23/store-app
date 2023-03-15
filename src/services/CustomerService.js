class CustomerService {
  constructor() {
    this.customers = [
      {
        username: 1,
        firstName: "John",
        lastName: "Doe"
      },
      {
        username: 2,
        firstName: "Jenna",
        lastName: "Doo"
      },
      {
        username: 3,
        firstName: "Jonna",
        lastName: "Dooe"
      }
    ];
  }

  getAll() {
    return this.customers;
  }

  get(username) {
    const customer = this.customers.find((customer) => customer.username == username)
    return customer
  }

  removeCustomer(username) {
    const newCustomers = this.customers.filter(
      (customer) => customer.username !== username
    );
    this.customers = newCustomers;
  }

  addCustomer(newCustomer) {
    const newCustomers = this.customers.push(newCustomer);
    return (this.customers = newCustomers);
  }
}

export default new CustomerService();
