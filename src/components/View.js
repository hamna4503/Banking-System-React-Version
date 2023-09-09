import React from "react";
import TableRow from "./tableRow";

function View() {
  return (
    <div>
      <h1 className="text-dark text-center p-3">Customer Profiles</h1>
      <table class="table table-light table-striped table-borderless">
        <caption>List of Customers</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            id="1"
            name="Hamna Aamir"
            email="hamna@gmail.com"
            number="03320354435"
            amount="100000"
          />
          <TableRow
            id="1"
            name="Hamna Aamir"
            email="hamna@gmail.com"
            number="03320354435"
            amount="100000"
          />
          <TableRow
            id="1"
            name="Hamna Aamir"
            email="hamna@gmail.com"
            number="03320354435"
            amount="100000"
          />
          <TableRow
            id="1"
            name="Hamna Aamir"
            email="hamna@gmail.com"
            number="03320354435"
            amount="100000"
          />
          <TableRow
            id="1"
            name="Hamna Aamir"
            email="hamna@gmail.com"
            number="03320354435"
            amount="100000"
          />
        </tbody>
      </table>
    </div>
  );
}

export default View;
