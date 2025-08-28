
// Importación de íconos y utilidades para la barra de navegación
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// Importación del componente para cambiar el tema
import TemaToggle from './TemaToggle.jsx';
// Importación de hooks y contexto global del carrito
import { useContext } from 'react';
import { CarritoContext } from "./context/CarritoContext.jsx";


// Componente de la barra de navegación principal
// Incluye logo, categorías, carrito y perfil
function Navbar() {
  // Obtiene el estado y función para modificar el carrito desde el contexto global
  const { carrito, setCarrito } = useContext(CarritoContext);

  // Renderiza la barra de navegación y sus elementos
  return (
    <>
      {/* Franja superior con mensajes de promociones */}
      <div className="franja">
        <div className="texto">
          <span>ENVÍOS GRATIS A PARTIR DE $3000</span>
          <span>10% OFF EN TU PRIMERA COMPRA</span>
          <span>NO HACEMOS RESTOCK</span>
          <span>ACEPTAMOS TODAS LAS TARJETAS</span>
        </div>
      </div>

      {/* Barra de navegación principal */}
      <nav className="navbar">
        <div className="logo-categorias">
          {/* Logo de la tienda, redirige al inicio */}
          <Link to="/" className="logo-redirect">
            <div className="logo">
              <img src="./sources/attachment_131590758-removebg-preview (1).png" alt="Logo" />
            </div>
          </Link>

          {/* Menú de categorías y submenús */}
          <ul className="nav-categorias">
            <li>
              <a href="#">Hombre</a>
              <ul className="submenu">
                <li><Link to="/acerca">Hoodies</Link></li>
                <li><Link to="/acerca">Buzos</Link></li>
                <li><Link to="/acerca">Remeras</Link></li>
                <li><Link to="/acerca">Pantalones</Link></li>
                <li><Link to="/acerca">Bermudas</Link></li>
                <li><Link to="/acerca">Accesorios</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Mujer</a>
              <ul className="submenu">
                <li><Link to="/acerca">Hoodies</Link></li>
                <li><Link to="/acerca">Buzos</Link></li>
                <li><Link to="/acerca">Remeras</Link></li>
                <li><Link to="/acerca">Pantalones</Link></li>
                <li><Link to="/acerca">Bermudas</Link></li>
                <li><Link to="/acerca">Accesorios</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Ofertas</a>
              <ul className="submenu">
                <li><Link to="/acerca">Exclusivo por Web</Link></li>
                <li><Link to="/acerca">Winter Sale</Link></li>
                <li><Link to="/acerca">Hasta 50% OFF</Link></li>
                <li><Link to="/acerca">New Arrivals</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Trabaja con nosotros</a>
              <ul className="submenu">
                <li><Link to="/acerca">Centro</Link></li>
                <li><Link to="/acerca">Pocitos</Link></li>
                <li><Link to="/acerca">Malvín</Link></li>
                <li><Link to="/acerca">Ciudad de la Costa</Link></li>
                <li><Link to="/acerca">Montevideo Shopping</Link></li>
                <li><Link to="/acerca">Tres Cruces Shopping</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Iconos de carrito, perfil y cambio de tema */}
        <div className="iconos">
          {/* Icono del carrito con total y menú desplegable */}
          <div className="carrito">
            <a href="#" className="carrito-icon tema-toggle-icon">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="carrito-count">
                ${carrito.reduce((acc, p) => acc + p.price * p.cantidad, 0).toFixed(2)}
              </span>
            </a>
            <ul className="submenu carrito-submenu">
              {carrito.length === 0 ? (
                // Mensaje si el carrito está vacío
                <li style={{ padding: "10px 20px", fontStyle: "italic" }}>Tu carrito está vacío.</li>
              ) : (
                // Lista de productos en el carrito
                carrito.map((p) => (
                  <li key={p.id} className="carrito-item">
                    <img src={p.image} alt={p.title} />
                    <div className="carrito-item-info">
                      <div className="nombre">{p.title}</div>
                      <div className="precio">${p.price.toFixed(2)}</div>
                    </div>
                    {/* Controles para modificar la cantidad de cada producto */}
                    <div className="carrito-item-cantidad">
                      <button
                        onClick={() => {
                          setCarrito(prev => {
                            return prev
                              .map(item =>
                                item.id === p.id
                                  ? { ...item, cantidad: item.cantidad - 1 }
                                  : item
                              )
                              .filter(item => item.cantidad > 0);
                          });
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{p.cantidad}</span>
                      <button
                        onClick={() => {
                          setCarrito(prev => prev.map(item =>
                            item.id === p.id
                              ? { ...item, cantidad: item.cantidad + 1 }
                              : item
                          ));
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Icono de perfil de usuario */}
          <div className="perfil">
            <a href="#" className="perfil-icon tema-toggle-icon">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>
          {/* Botón para cambiar el tema claro/oscuro */}
          <TemaToggle />
        </div>
      </nav>
    </>
  );
}

export default Navbar;