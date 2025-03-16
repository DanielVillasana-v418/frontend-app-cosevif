import React from "react";
import "./App.css";
import logo from "./images/logos_Cosevif/LogoCosevif-removed.png";
import portada from "./images/imagenes/cosevif-portada.jpg"; // Ajusta el nombre según tu archivo

function App() {
  return (
    <div className="container">
      <div className="login-container">
        {/* Sección del formulario */}
        <div className="login-box">
          <div className="logo-container">
            <img src={logo} alt="Logo Cosevif" className="logo-img" />
          </div>
          <h2>Bienvenido a Cosevif</h2>
          <p>Inicia sesión con tu cuenta</p>

          <form>
            <div className="input-group">
              <input type="email" placeholder="Correo electrónico" required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Contraseña" required />
            </div>

            <button type="submit" className="btn-marron">
              Iniciar sesión
            </button>
          </form>

          <p className="register-link">
            ¿No tienes cuenta? <a href="#">Regístrate</a>
          </p>
        </div>

        {/* Sección de la imagen */}
        <div className="image-container">
          <img src={portada} alt="Imagen de Cosevif" />
        </div>
      </div>
    </div>
  );
}

export default App;
