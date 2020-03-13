import React from "react";
import SearchBar from "../SearchBar";

function Table({users}) {
  function dobDate(date) {
    const dobDate = new Date(date);

return dobDate.toDateString();
  }
  return (
    <>
    <SearchBar/>

    <table className="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name (First and Last)</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, email, dob, phone, picture }) => {
          return (
            <tr>
              <th scope="row"><img src={picture.large} alt=" Not Loading" /></th>
              <td>{name.first + " " + name.last}</td> 
              <td>{phone}</td> 
              <td>{email}</td> 
              <td>{dobDate(dob.date)}</td> 
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}

export default Table;

