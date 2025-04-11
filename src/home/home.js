import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Bem-vindo à Home Page!</h1>
      <div>
        <Link to="/ApiCard">
          <button>API - RICK & MORTY</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        {/* <Link to="/page3">
          <button>Ir para Página 3</button>
        </Link> */}
      </div>
    </div>
  );
}

export default HomePage;
