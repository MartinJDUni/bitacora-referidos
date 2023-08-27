import React from 'react';
import TableTask from "@/components/tabletask"

const data = [
    { dato1: 'Seguros', dato2: 'Seguros con las casas', dato3: 'Activo' },
    { dato1: 'Tarjetas', dato2: 'solicitud de tarjetas de credito', dato3: 'Activo' },
    
];

function Task() {
    return (
        <div className="conteiner-task">
            <div className="filter">
                <input className='label-filter' type="text" name="filter" />
                <div>
                    <button className="Button-filter"></button>
                </div>
            </div>
            <div className="Buttons-conteiner">
                <button className="Button-event">Agregar</button>
                <button className="Button-event">Editar</button>
                <button className="Button-event">Eliminar</button>
            </div>
            <div className="table-task">
                <TableTask datos={data} />
            </div>
        </div>
    );
}
export default Task;