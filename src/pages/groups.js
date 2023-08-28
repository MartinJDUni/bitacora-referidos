import React from 'react';
import TableGroups from "@/components/tablegroups";
import Header from '@/components/header';
const data = [
    { dato1: 'Juan', dato2: '60', dato3: '@gmail.com', dato4: 'referido' },
    { dato1: 'Carlos', dato2: '60', dato3: '@gmail.com', dato4: 'referido' },
    { dato1: 'Maria', dato2: '60', dato3: '@gmail.com', dato4: 'referido' },
    { dato1: 'Frank', dato2: '60', dato3: '@gmail.com', dato4: 'referido' },
    { dato1: 'Lucia', dato2: '60', dato3: '@gmail.com', dato4: 'referido' },
    { dato1: 'Diego', dato2: '60', dato3: '@gmail.com', dato4: 'referido' },
    { dato1: 'Lucas', dato2: '60', dato3: '@gmail.com', dato4: 'referido' },
    { dato1: 'Karen', dato2: '60', dato3: '@gmail.com', dato4: 'referido' },
    { dato1: 'Jorge', dato2: '60', dato3: '@gmail.com', dato4: 'referido' },
    { dato1: 'Wendy', dato2: '60', dato3: '@gmail.com', dato4: 'referido' },
]

function Groups() {0
    return (
        <div className="container-groups">
            <Header/>
            <br/>
            <div className="filter-groups">
                <input className='label-filter-groups' type="text" name="filter-groups" />
                <div>
                    <button className="Button-filter-groups">Filtrar Trabajador</button>
                </div>
            </div>
            <div className="Buttons-container-groups">
                <button className="Button-add-groups">Agregar</button>
                <button className="Button-edit-groups">Editar</button>
                <button className="Button-delete-groups">Eliminar</button>
            </div>
            <p>Lista de Trabajadores:</p>
            <div className="table-groups">
                <TableGroups datos={data} />
            </div>
        </div>
    );
}

export default Groups;