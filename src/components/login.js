import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    //Aqui se pretende hacer la autent
    router.push('/homePage');
  };

  return (
    <>
      <div className="container">
        <div className="login-form">
            <img src="./image/bcr.png" alt="Logo-login" className="logo-login" />
            
          <h2>Inicio de Sesión</h2>
          <form onSubmit={handleLogin}>
            <input className="input" type="text" placeholder="Username" />
            <input className="input" type="password" placeholder="Password" />
            <button className="button" type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
