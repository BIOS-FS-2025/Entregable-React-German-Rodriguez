
// Importación de React y hooks para manejar el contexto
import React from "react";
import { useContext } from "react";
// Importación del componente para mostrar cada producto destacado
import MensajesAPI from "./MensajesAPI.jsx";
// Importación del contexto global del carrito
import { CarritoContext } from "./context/CarritoContext.jsx";


// Componente para mostrar la sección de productos destacados en la página principal
export default function CarritoManager() {
  // Obtiene el estado de carga de la API desde el contexto global
  const { loadingAPI } = useContext(CarritoContext);

  // Lista de productos destacados que se muestran en la página principal
  const featured = [
    { id: 1, nombre: "Jean Ultra Baggy Denim", precio: 1500, imgDefault: "./sources/prenda1.webp", imgHover: "./sources/prenda1.1.webp" },
    { id: 2, nombre: "Jean Ultra Baggy Hueso", precio: 1890, imgDefault: "./sources/prenda2.webp", imgHover: "./sources/prenda2.2.webp" },
    { id: 3, nombre: "Jean Ultra Baggy Black", precio: 1990, imgDefault: "./sources/prenda4.webp", imgHover: "./sources/prenda4.4.webp" },
    { id: 4, nombre: "Bermuda Baggy Denim", precio: 1990, imgDefault: "./sources/prenda3.webp", imgHover: "./sources/prenda3.3.webp" },
    { id: 5, nombre: "Pulsera Rosarios de Acero", precio: 240, imgDefault: "./sources/pulceraconcrucesd.webp", imgHover: "./sources/pulceraconcrucesg.webp" },
  ];

  // Renderiza la sección de productos destacados
  return (
    <div className="mas-vendidos">
      {/* Título de la sección */}
      <h2>Productos Destacados</h2>
      {/* Grid de productos destacados */}
      <div className="productos-grid">
        {featured.map(p => (
          <MensajesAPI 
            key={p.id} 
            producto={p} 
            loadingAPI={loadingAPI}
          />
        ))}
      </div>
    </div>
  );
}