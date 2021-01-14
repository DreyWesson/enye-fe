import React, { useState } from "react";
import "./styles/Customers.css";
import { v4 as uuidv4 } from "uuid";
import { Pagination } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const Customers = ({ records }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(20);
  const [showMore, setShowMore] = useState(false);
  const [searchValue, setSearchValue] = useState(null);

  if (!records || records.length === 0) return <p>No customers, sorry</p>;
  const { profiles } = records.records,
    indexOfLastCustomer = currentPage * customersPerPage,
    indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;

  // Change page
  const handleChange = (event, value) => setCurrentPage(value);

  const searchRecord = () => {
    return profiles.filter((data) => {
      if (searchValue == null) return data;
      else if (
        data.CreditCardNumber.toLowerCase().includes(
          searchValue.toLowerCase()
        ) ||
        data.Longitude.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.Latitude.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.DomainName.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.Email.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.LastLogin.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.MacAddress.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.PhoneNumber.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.FirstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.LastName.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.UserName.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.Gender.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.PaymentMethod.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.URL.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.CreditCardType.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return data;
      }
    });
  };
  // searchRecord();
  let currentCustomers = searchValue === null ? profiles : searchRecord();
  currentCustomers = currentCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  console.log(currentCustomers.length);

  const pageNumbers = [];
  function setResultsPerPage(length) {
    for (let i = 1; i <= Math.ceil(length / customersPerPage); i++) {
      pageNumbers?.push(i);
    }
  }
  searchValue == null
    ? setResultsPerPage(records?.size)
    : setResultsPerPage(searchRecord().length);

  return (
    <div className="customers">
      <div className="customers__list">
        <p>
          <span>Success: </span>
          {records.size} records loaded
        </p>
      </div>
      <div className="customers__search">
        <label htmlFor="searchInput">Search</label>
        <input
          type="text"
          id="searchInput"
          className="customers__searchInput"
          placeholder="Search customer..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Search className="customers__searchIcon" />
      </div>

      <div className="customers__listContainer">
        {currentCustomers?.map(
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

                <div className={`${showMore || "customers__listMore"}`}>
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
