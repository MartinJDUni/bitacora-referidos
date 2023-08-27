import React from 'react';
import TableTask from "@/components/tabletask";

const data = [
    { dato1: 'Seguros', dato2: 'Seguros con las casas', dato3: 'Activo' },
    { dato1: 'Tarjetas', dato2: 'solicitud de tarjetas de crédito', dato3: 'Activo' },
];



function Task() {
    return (
        <div className="container-task">
            <div className="filter">
                <input className='label-filter' type="text" name="filter" />
                <div>
                    <button className="Button-filter">Filtrar</button>
                </div>
            </div>
            <div className="Buttons-container">
                <button className="Button-add">Agregar</button>
                <button className="Button-edit">Editar</button>
                <button className="Button-delete">Eliminar</button>
            </div>
            <div className="table-task">
                <TableTask datos={data} />
            </div>
        </div>
    );
}

export default Task;