import React from "react";

class Table extends React.Component {

// const results = {
//     picture:
//     name:
//     phone:
//     email:
//     dob:
// }




  render() {
    return (
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
          <tr>
            <th scope="row">Image</th>
            <td>Joe Shields</td>
            <td>219-378-8500</td>
            <td>jshields@smith.com</td>
            <td>04-25-1925</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
// Results.picture