


import React from 'react';

const TableRow = ({ label, value }) => {
  return (
    <tr style={{ borderBottom: '1px solid rgb(204, 204, 204)' }}>
      <td colSpan="3" />
      <td>{label}</td>
      <td>:</td>
      <td colSpan="3" />
      <td>{value}</td>
    </tr>
  );
};

export default TableRow; 

  