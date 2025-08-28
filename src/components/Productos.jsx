
// Importación del componente de navegación superior
import Navbar from './Navbar.jsx';
// Importación de hooks para manejar estado y efectos en el componente
import { useState, useEffect } from 'react';


// Componente de la página "Productos"
// Muestra información sobre los productos y una imagen de construcción
export default function Acerca() {
  // Estado local para el carrito (no se usa en esta página, pero se mantiene por estructura)
  const [carrito, setCarrito] = useState([]);
  // Estado para los productos de la API (no se muestran aquí, pero se podría usar en el futuro)
  const [apiProductos, setApiProductos] = useState([]);
  // Estado para saber si la API está cargando
  const [loadingAPI, setLoadingAPI] = useState(false);
  // Estado para guardar errores de la API
  const [apiError, setApiError] = useState(null);

  // Efecto que se ejecuta al montar el componente para cargar productos desde la API
  useEffect(() => {
    setLoadingAPI(true);
    setApiError(null);
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setApiProductos(data))
      .catch(err => {
        console.error("Error fetching API:", err);
        setApiError("No se pudieron cargar los productos.");
      })
      .finally(() => setLoadingAPI(false));
  }, []);

  // Renderizado de la página
  return (
    <>
      {/* Encabezado con la barra de navegación */}
      <header>
        <Navbar carrito={carrito} setCarrito={setCarrito} />
      </header>
      {/* Contenido principal de la página */}
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Productos de nuestra tienda</h2>
        {/* Mensaje temporal mientras se construye la página */}
        <p>Ups! Esta página aún se está construyendo…</p>
        {/* Imagen ilustrativa */}
        <img 
          src="https://thumbs.dreamstime.com/b/retrato-adorable-de-tortuga-un-contratista-con-sombrero-duro-para-engranaje-seguridad-encantador-closet-una-brillante-amarillo-371348939.jpg" 
          alt="Castores trabajando" 
          style={{ maxWidth: '400px', width: '100%', borderRadius: '8px', marginTop: '1rem' }}
        />
      </div>
    </>
  );
}