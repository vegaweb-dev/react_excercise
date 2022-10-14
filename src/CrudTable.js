import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>constellation</th>
            <th>actions</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} el={el} />)
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
