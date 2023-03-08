export const SingleCustomerDetails = ({ customer, index }) => {
  return (
    <div>
      <h1 key={index}>
        {customer.firstName} {customer.lastName}
      </h1>
    </div>
  );
};
