import React from "react";

function Table({ users }) {
  function dobDate(date) {
    const dobDate = new Date(date);

    return dobDate.toDateString();
  }
  return (
    <>
      {/* <SearchBar/> */}

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
          {users.length
            ? users.map((user, i) => {
                let { name, picture, phone, email, dob } = user;
                let dobDate = new Date(dob.date);
                let formatDob = dobDate.toString().split(" ");
                let string = `${formatDob[1]} ${formatDob[2]}, ${formatDob[3]}`;
                return (
                  <tr key={`${user}-${i}`}>
                    <th scope="row">
                      <img src={picture.medium} alt=" Not Loading" />
                    </th>
                    <td>{name.first + " " + name.last}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{string}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
}

export default Table;
