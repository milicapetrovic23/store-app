import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import { SingleCustomerDetails } from "../components/SingleCustomerDetails";

export const AppCustomers = () => {
  const [customers, setCustomers] = useState(CustomerService.getAll());

  const handleRemoveCustomer = (username) => {
    setCustomers(customers.filter((customer) => customer.username !== username));
    CustomerService.removeCustomer(username);
  };

  const [newCustomer, setNewCustomer] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  const handleFNameChange = (e) => {
    setNewCustomer({ ...newCustomer, firstName: e.target.value });
  };

  const handleLNameChange = (e) => {
    setNewCustomer({ ...newCustomer, lastName: e.target.value });
  };

  const handleUsernameChange = (e) => {
    if((customers.find((customer)=> customer.username === e.target.value)) === undefined) {
    setNewCustomer({ ...newCustomer, username: e.target.value })}
  };

  const addCustomer = (e) => {
    e.preventDefault();
    if(newCustomer.username != "") {
    setCustomers([...customers, newCustomer]);
    CustomerService.addCustomer(newCustomer);
    setNewCustomer({
      firstName: "",
      lastName: "",
      username: "",
    });
  }};

  const history = useHistory();

  const showPurchaces = (username) => {
    history.push(`/customers/${username}`)
  }

  return (
    <div>
      <h2>List of customers</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            <SingleCustomerDetails customer={customer} index={customer.username} />
            <button onClick={() => showPurchaces(customer.username)}>
            Latest Purchaces
            </button>
            <button onClick={() => handleRemoveCustomer(customer.username)}>
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
          value={newCustomer.username}
          onChange={handleUsernameChange}
        ></input>
        <button type="submit">Add customer</button>
      </form>
    </div>
  );
};
