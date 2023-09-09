import React from "react";

function TableRow(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.amount}</td>
      <td>
        <button className="btn btn-primary btn-danger">View</button>
      </td>
    </tr>
  );
}

export default TableRow;
