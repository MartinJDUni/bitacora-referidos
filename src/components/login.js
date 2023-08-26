import { LazyResult } from 'postcss';
import React from 'react';

function Login() {
    return (
        <div className="form">
            <form className="sub-form">
                <div className="upper-form">
                    <h2 className="h2-form">Inicio de sesion</h2>
                    <label className="label-form">Usuario</label> <br />
                    <input className="input-form" type="text" name="username"/> <br />
                    <label className="label-form">Contraseña</label> <br />
                    <input className="input-form" type="password" name="username"/> <br />
                    <div className="btn">
                        <button type="submit">Iniciar</button> <br />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;