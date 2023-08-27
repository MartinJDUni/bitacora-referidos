import React from 'react';
import { useState } from 'react';

function TableTask({ datos }) {

  const [filasMarcadas, setFilasMarcadas] = useState([]);

  const marcarFila = (index) => {
    const filas = [...filasMarcadas];
    if (filas.includes(index)) {
      // Si ya está marcada, desmárcala
      const indexEncontrado = filas.indexOf(index);
      filas.splice(indexEncontrado, 1);
    } else {
      // Si no está marcada, márcala
      filas.push(index);
    }
    setFilasMarcadas(filas);
  };

  const marcarTodasLasFilas = () => {
    if (filasMarcadas.length === datos.length) {
      // Si todas las filas están marcadas, desmárcalas
      setFilasMarcadas([]);
    } else {
      // Si no todas están marcadas, márcalas todas
      setFilasMarcadas([...Array(datos.length).keys()]);
    }
  };


  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={filasMarcadas.length === datos.length}
              onChange={marcarTodasLasFilas}
            />
          </th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, index) => (
          <tr key={index} className={filasMarcadas.includes(index) ? 'fila-marcada' : ''}>
            <td>
              <input
                type="checkbox"
                checked={filasMarcadas.includes(index)}
                onChange={() => marcarFila(index)}
              />
            </td>
            <td>{fila.dato1}</td>
            <td>{fila.dato2}</td>
            <td>{fila.dato3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableTask;