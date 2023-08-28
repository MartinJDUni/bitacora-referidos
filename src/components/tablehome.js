import React from 'react';
import { useState } from 'react';

function TableHome({ datos }) {

  const [RowCheck, setRowCheck] = useState([]);

  const CheckRow = (index) => {
    const Rows = [...RowCheck];
    if (Rows.includes(index)) {
      const indexfound = Rows.indexOf(index);
      Rows.splice(indexfound, 1);
    } else {
      Rows.push(index);
    }
    setRowCheck(Rows);
  };

  const AllRowCheck = () => {
    if (RowCheck.length === datos.length) {
      setRowCheck([]);
    } else {
      setRowCheck([...Array(datos.length).keys()]);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={RowCheck.length === datos.length}
              onChange={AllRowCheck}
            />
          </th>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, index) => (
          <tr key={index} className={RowCheck.includes(index) ? 'fila-marcada' : ''}>
            <td>
              <input
                type="checkbox"
                checked={RowCheck.includes(index)}
                onChange={() => CheckRow(index)}
              />
            </td>
            <td>{fila.dato1}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default  TableHome;