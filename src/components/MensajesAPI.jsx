
// Importación de React y hooks para manejar estado y efectos
import React, { useState, useEffect, useContext } from "react";
// Importación de íconos para el botón de carrito
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// Importación del contexto global del carrito
import { CarritoContext } from "./context/CarritoContext.jsx";



// Componente para mostrar cada producto destacado y su botón de agregar al carrito
export default function MensajesAPI({ producto, loadingAPI }) {
  // Obtiene la función para agregar productos al carrito desde el contexto
  const { agregarAlCarrito } = useContext(CarritoContext);

  // Estados para controlar la animación y mensajes del botón
  const [clicked, setClicked] = useState(false);
  const [msgState, setMsgState] = useState(null);
  const [showMsg, setShowMsg] = useState(false);
  const [animateMsg, setAnimateMsg] = useState(false);

  // Efecto para mostrar mensaje de carga si la API está cargando
  useEffect(() => {
    if (loadingAPI) {
      setMsgState("loading");
      setShowMsg(true);
      setAnimateMsg(true);

      // Oculta el mensaje después de 3 segundos
      const timer = setTimeout(() => {
        setShowMsg(false);
        setMsgState(null);
        setAnimateMsg(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loadingAPI]);

  // Maneja el click en el botón para agregar un producto random de la API al carrito
  const handleAgregarAlCarrito = async () => {
    setClicked(true);
    setMsgState("agregando");
    setShowMsg(true);
    setAnimateMsg(false);
    setTimeout(() => setAnimateMsg(true), 10);

    try {
      // Llama a la función global que agrega un producto random de la API
      await agregarAlCarrito();
    } catch (err) {
      setMsgState("error");
      setShowMsg(true);
      setAnimateMsg(false);
      setTimeout(() => setAnimateMsg(true), 10);
    }

    // Oculta el mensaje y animación después de 2.5 segundos
    setTimeout(() => {
      setClicked(false);
      setShowMsg(false);
      setMsgState(null);
      setAnimateMsg(false);
    }, 2500);
  };

  // Renderiza el producto destacado y el botón de agregar al carrito
  return (
    <a href="#" className="producto" onClick={e => e.preventDefault()}>
      {/* Botón para agregar al carrito */}
      <button
        className={`add-cart-btn${clicked ? ' clicked' : ''}`}
        onClick={handleAgregarAlCarrito}
        title="Agregar al carrito"
      >
        <FontAwesomeIcon icon={faCartShopping} />
      </button>

      {/* Imágenes del producto (normal y hover) */}
      <div className="img-container">
        <img src={producto.imgDefault} alt={producto.nombre} className="img-default" />
        <img src={producto.imgHover} alt={producto.nombre + " Hover"} className="img-hover" />
      </div>

      {/* Nombre y detalles del producto */}
      <h3>{producto.nombre}</h3>
      <p className="talles">Talles: XS, S, M, L, XL, XXL</p>
      <p className="precio">
        <span className="current-price">${producto.precio}</span>
      </p>

      {/* Mensaje de estado (cargando, agregando, error) */}
      {msgState && showMsg && (
        <div
          className={`producto-msg${animateMsg ? ' animate' : ''}`}
          style={{
            background:
              msgState === "loading"
                ? 'linear-gradient(90deg, #e6b800 60%, #b38f00 100%)'
                : msgState === "agregando"
                ? 'linear-gradient(90deg, #1abc9c 60%, #16a085 100%)'
                : 'linear-gradient(90deg, #e74c3c 60%, #c0392b 100%)'
          }}
        >
          {msgState === "loading" && "Cargando..."}
          {msgState === "agregando" && "Agregando producto..."}
          {msgState === "error" && "Error al agregar producto"}
        </div>
      )}
    </a>
  );
}