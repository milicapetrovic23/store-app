import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import { SingleCustomerDetails } from "../components/SingleCustomerDetails";

export const AppCustomers = () => {
  const [customers, setCustomers] = useState(CustomerService.getAll());

  const handleRemoveCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
    CustomerService.removeCustomer(id);
  };

  const [newCustomer, setNewCustomer] = useState({
    firstName: "",
    lastName: "",
    id: "",
  });

  const handleFNameChange = (e) => {
    setNewCustomer({ ...newCustomer, firstName: e.target.value });
  };

  const handleLNameChange = (e) => {
    setNewCustomer({ ...newCustomer, lastName: e.target.value });
  };

  const handleIdChange = (e) => {
    setNewCustomer({ ...newCustomer, id: e.target.value });
  };

  const addCustomer = (e) => {
    e.preventDefault();
    setCustomers([...customers, newCustomer]);
    CustomerService.addCustomer(newCustomer);
    setNewCustomer({
      firstName: "",
      lastName: "",
      id: "",
    });
  };

  const history = useHistory();

  const showPurchaces = (id) => {
    history.push(`/customers/${id}`)
  }

  return (
    <div>
      <h2>List of customers</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            <SingleCustomerDetails customer={customer} index={customer.id} />
            <button onClick={() => showPurchaces(customer.id)}>
            Latest Purchaces
            </button>
            <button onClick={() => handleRemoveCustomer(customer.id)}>
              Remove customer
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={addCustomer}>
        <label>Name:</label>
        <input
          type="text"
          value={newCustomer.firstName}
          onChange={handleFNameChange}
        ></input>
        <label>Last name:</label>
        <input
          type="text"
          value={newCustomer.lastName}
          onChange={handleLNameChange}
        ></input>
        <label>Username</label>
        <input
          type="text"
          value={newCustomer.id}
          onChange={handleIdChange}
        ></input>
        <button type="submit">Add customer</button>
      </form>
    </div>
  );
};
