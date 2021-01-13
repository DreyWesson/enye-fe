import React, { useState } from "react";
import "./styles/Customers.css";
import { v4 as uuidv4 } from "uuid";
import { Pagination } from "@material-ui/lab";
import { Button } from "@material-ui/core";

const Customers = ({ records }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(20);
  const [showMore, setShowMore] = useState(false);

  if (!records || records.length === 0) return <p>No customers, sorry</p>;
  const { profiles } = records.records,
    indexOfLastCustomer = currentPage * customersPerPage,
    indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomer = profiles.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(records?.size / customersPerPage); i++) {
    pageNumbers?.push(i);
  }

  // Change page
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="customers">
      <div className="customers__list">
        <p>Total records: {records.size} </p>
        <p>
          Status: <span>{records.status}</span>
        </p>
      </div>
      <div className="customers__listContainer">
        {currentCustomer?.map(
          ({
            FirstName,
            LastName,
            Gender,
            Longitude,
            Latitude,
            CreditCardNumber,
            CreditCardType,
            DomainName,
            Email,
            LastLogin,
            MacAddress,
            PaymentMethod,
            PhoneNumber,
            URL,
            UserName,
          }) => (
            <div key={uuidv4()} className="customers__listCard">
              <div className="customers__listDetails">
                <div className="customers__fullName">
                  <div>
                    <span>First Name </span>
                    <p>{FirstName}</p>
                  </div>
                  <div>
                    <span>Last Name </span>
                    <p>{LastName}</p>
                  </div>
                </div>
                <div className="customers__listDefault">
                  <p className="customers__detail">
                    <span>Username: </span>
                    {UserName}
                  </p>
                  <p className="customers__detail">
                    <span>Gender: </span>
                    {Gender}
                  </p>
                  <p className="customers__detail">
                    <span>Email: </span>
                    {Email}
                  </p>
                  <p className="customers__detail">
                    <span>Phone Number: </span>
                    {PhoneNumber}
                  </p>
                  <p className="customers__detail">
                    <span>Domain name: </span>
                    {DomainName}
                  </p>
                  <p className="customers__detail">
                    <span>Payment Method: </span>
                    {PaymentMethod}
                  </p>
                </div>

                <div className={showMore || "customers__listMore"}>
                  <p className="customers__detail">
                    <span>Longitude: </span>
                    {Longitude}
                  </p>
                  <p className="customers__detail">
                    <span>Latitude: </span>
                    {Latitude}
                  </p>
                  <p className="customers__detail">
                    <span>CreditCardNumber: </span>
                    {CreditCardNumber}
                  </p>
                  <p className="customers__detail">
                    <span>CreditCardType: </span>
                    {CreditCardType}
                  </p>
                  <p className="customers__detail">
                    <span>MacAddress: </span>
                    {MacAddress}
                  </p>
                  <p className="customers__detail">
                    <span>Last Login: </span>
                    {LastLogin}
                  </p>
                  <p className="customers__detail">
                    <span>URL: </span>
                    {URL}
                  </p>
                </div>
                <Button
                  onClick={(e) =>
                    !showMore ? setShowMore(true) : setShowMore(false)
                  }
                >
                  {showMore ? <>Show less</> : <>Show more</>}
                </Button>
              </div>
            </div>
          )
        )}
      </div>
      <div className="customers__pagination">
        <Pagination
          count={pageNumbers.length}
          variant="outlined"
          color="primary"
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Customers;
