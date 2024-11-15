import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "", // Campo de edad
  });
  const [successMessage, setSuccessMessage] = useState(false); // Estado para el mensaje de éxito

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    // Mostrar el mensaje de "Registrado correctamente"
    setSuccessMessage(true);

    // Después de 1.5 segundos, ocultar el mensaje y cerrar el popup
    setTimeout(() => {
      setSuccessMessage(false);
      onClose(); // Cierra el formulario
      navigate("/preferencias"); // Redirige a Preferencias
    }, 1500); // 1.5 segundos
  };

  return (
    <div className="modal-overlay">
      <div className="register-form">
        <button className="close-button" onClick={onClose}>X</button> {/* Botón de cerrar */}
        
        <h2>Registrarse</h2>

        {/* Mensaje de éxito */}
        {successMessage && (
          <div className="success-message">
            <p>¡Registrado correctamente!</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label>
            Nombre de usuario:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </label>
          
          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </label>
          
          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </label>

          <label>
            Edad:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </label>

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
