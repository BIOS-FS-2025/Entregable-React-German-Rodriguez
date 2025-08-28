// Importación de React y hooks necesarios para el contexto
import React, { createContext, useState } from 'react';


// Contexto global para el carrito de compras
// Permite compartir el estado del carrito y productos entre todos los componentes
export const CarritoContext = createContext();

// Componente Provider que envuelve la aplicación y provee el estado global
export function CarritoProvider({ children }) {
  // Estado para los productos agregados al carrito
  const [carrito, setCarrito] = useState([]);
  // Estado para los productos obtenidos de la API
  const [apiProductos, setApiProductos] = useState([]);
  // Estado para saber si la API está cargando
  const [loadingAPI, setLoadingAPI] = useState(false);
  // Estado para guardar errores de la API
  const [apiError, setApiError] = useState(null);

  // Se carga la API al montar el componente
  React.useEffect(() => {
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

  // Función para agregar un producto random de la API al carrito
  // Si el producto ya está en el carrito, aumenta la cantidad
  // Si no está, lo agrega con cantidad 1
  const agregarAlCarrito = async () => {
    if (apiProductos.length === 0) return;

    // Selecciona un producto aleatorio de la API
    const productoApi = apiProductos[Math.floor(Math.random() * apiProductos.length)];

    setCarrito(prev => {
      const existe = prev.find(p => p.id === productoApi.id);
      if (existe) {
        // Si ya existe, suma uno a la cantidad
        return prev.map(p =>
          p.id === productoApi.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      } else {
        // Si no existe, lo agrega al carrito
        return [...prev, { ...productoApi, cantidad: 1 }];
      }
    });
  };

  // Provee el estado y funciones a todos los componentes hijos
  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, apiProductos, loadingAPI, apiError, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}