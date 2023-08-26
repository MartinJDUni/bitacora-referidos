import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/login" className="nav-link">Inicio</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">Cuentas</a></li>
                    <li className="nav-item"><a href="/accounts" className="nav-link">Contacto</a></li>
                    <li className="nav-item"><a href="/candidates" className="nav-link">Candidatos</a></li>
                    <li className="nav-item"><a href="/opportunities" className="nav-link">Oportunidades</a></li>
                    <li className="nav-item"><a href="/tasks" className="nav-link">Tareas</a></li>
                    <li className="nav-item"><a href="/calendar" className="nav-link">Calendario</a></li>
                    <li className="nav-item"><a href="/reports" className="nav-link">Informes</a></li>
                    <li className="nav-item"><a href="/groups" className="nav-link">Grupos</a></li>
                    <li className="nav-item"><a href="/notes" className="nav-link">Notas</a></li>
                    <li className="nav-item"><a href="/forecasts" className="nav-link">Previsiones</a></li>
                    <li className="nav-item"><a href="/mail" className="nav-link">Correos</a></li>
                    <li className="nav-item"><a href="/files" className="nav-link">Archivos</a></li>
                    <li className="nav-item"><a href="/budget" className="nav-link">Presupuesto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
