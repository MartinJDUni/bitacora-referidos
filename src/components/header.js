import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/login" className="nav-link">Inicio</a></li>
                    <li className="nav-item"><a href="/opportunities" className="nav-link">Oportunidades</a></li>
                    <li className="nav-item"><a href="/task" className="nav-link">Tareas</a></li>
                    <li className="nav-item"><a href="/reports" className="nav-link">Informes</a></li>
                    <li className="nav-item"><a href="/groups" className="nav-link">Trabajadores</a></li>
                    <li className="nav-item"><a href="/notes" className="nav-link">Notas</a></li>
                   
                   
                </ul>
            </nav>
        </header>
    );
}

export default Header;
