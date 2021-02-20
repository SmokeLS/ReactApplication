import React from "react";

export default function TableRow({
  id,
  firstName,
  lastName,
  email,
  phone,
  description,
  address,
  displaySelectedString,
}) {
  return (
    <tr
      onClick={() => {
        displaySelectedString(firstName, lastName, description, address);
      }}
    >
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}
