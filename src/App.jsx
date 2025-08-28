// Importación de estilos y dependencias principales
import './App.css'
import { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faTruckFast, faEnvelope, faClock, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram, faCcVisa, faCcMastercard, faCcPaypal, faCcApplePay, faReact } from '@fortawesome/free-brands-svg-icons'

// Importación de componentes y utilidades de React Router
import { Routes, Route, Link } from 'react-router-dom'
import TemaToggle from './components/TemaToggle.jsx'
import OutfitPreview from './components/OutfitPreview.jsx'
import CarritoManager from './components/CarritoManager.jsx'
import Acerca from './components/Acerca.jsx'
import Productos from './components/Productos.jsx'
import Navbar from './components/Navbar.jsx'

// Importación del contexto global del carrito
import { CarritoProvider, CarritoContext } from './components/CarritoContext.jsx'

// Componente principal de la aplicación
// Aquí se definen las rutas y la estructura general de la página
function App() {
  return (
    // El componente Routes gestiona la navegación entre páginas
    <Routes>
      {/* Ruta principal (home) */}
      <Route path="/" element={
        <>
          {/* Encabezado con la barra de navegación */}
          <header>
            <Navbar />
          </header>

          {/* Banner principal de la tienda */}
          <div className="banner">
            <div className="banner-overlay"></div>
            <div className="banner-content">
              <h1>Germán Ezequiel Rodríguez Rotunno</h1>
              {/* Frase de bienvenida */}
              <p id="texto-banner">Tu tienda online de moda y estilo</p>
              {/* Botón para ir a la página de productos */}
              <Link to="/productos"><button className="banner-btn" id="boton-banner">Ver productos</button></Link>
            </div>
          </div>

          {/* Sección de información sobre envíos */}
          <div className="delivery-wrapper">
            <section className="delivery-banner">
              <h2>¡Recibí tu compra en el día!</h2>
              <h3>Comprá antes de las 15hs y recibí tu pedido en Montevideo hoy. <FontAwesomeIcon icon={faTruckFast} /></h3>
            </section>
          </div>

          {/* Sección de productos destacados */}
          <CarritoManager />
          {/* Sección de outfit destacado */}
          <OutfitPreview />

          {/* Pie de página con información de contacto, métodos de pago y ubicación */}
          <div className="footer-wrapper">
            <footer>
              <div className="footer-container">
                {/* Información de contacto */}
                <div className="footer-section">
                  <h4>Contacto</h4>
                  <ul>
                    <li className="wpp"><FontAwesomeIcon icon={faWhatsapp} /> <a href="https://wa.me/123456789" target="_blank">+598 123 456 789</a></li>
                    <li className="ig"><FontAwesomeIcon icon={faInstagram} /> <a href="https://instagram.com/tuempresa" target="_blank">@tuempresa</a></li>
                    <li className="gm"><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@tuempresa.com">info@tuempresa.com</a></li>
                    <li><FontAwesomeIcon icon={faClock} /> Lun - Vie: 9:00 - 18:00</li>
                  </ul>
                </div>

                {/* Información sobre la empresa */}
                <div className="footer-section">
                  <h4>Sobre Nosotros</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae justo in urna facilisis sollicitudin.</p>
                </div>

                {/* Métodos de pago aceptados */}
                <div className="footer-section">
                  <h4>Métodos de Pago</h4>
                  <div className="payment-icons">
                    <FontAwesomeIcon icon={faCcVisa} />
                    <FontAwesomeIcon icon={faCcMastercard} />
                    <FontAwesomeIcon icon={faCcPaypal} />
                    <FontAwesomeIcon icon={faCcApplePay} />
                  </div>
                </div>

                {/* Mapa de ubicación de la tienda */}
                <div className="footer-section map-container">
                  <h4>Ubicación</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1945.543673790286!2d-56.14076744740925!3d-34.90641432607595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1756233958413!5m2!1ses-419!2suy"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Sección inferior del pie de página */}
              <div className="footer-bottom">
                <span>&copy; 2025 Todos los derechos reservados</span>
                <a href="#" className="gerdev-link"><FontAwesomeIcon icon={faReact} /><span> By GerDev</span></a>
              </div>
            </footer>
          </div>
        </>
      }/>

      {/* Ruta para la página "Acerca de" */}
      <Route path="/acerca" element={<Acerca />} />
      {/* Ruta para la página de productos */}
      <Route path="/productos" element={<Productos />} />
    </Routes>
  )
}

export default App