import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-and-name">
                    <img src="./image/bcr.png" alt="Logo" className="company-logo" />
                    <div className="company-name">Bitácora de Control de Referidos</div>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="/homePage" className="nav-link">Inicio</a></li>
                        <li className="nav-item"><a href="/opportunities" className="nav-link">Oportunidades</a></li>
                        <li className="nav-item"><a href="/task" className="nav-link">Tareas</a></li>
                        <li className="nav-item"><a href="/reports" className="nav-link">Informes</a></li>
                        <li className="nav-item"><a href="/groups" className="nav-link">Trabajadores</a></li>
                        <li className="nav-item"><a href="/notes" className="nav-link">Notas</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
