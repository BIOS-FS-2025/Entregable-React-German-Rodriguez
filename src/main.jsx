// Importación de dependencias principales de React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Importación de React Router para manejar las rutas de la aplicación
import { BrowserRouter } from 'react-router-dom'

// Importación de archivos de estilos para toda la aplicación
import './styles/banner.css'
import './styles/delivery.css'
import './styles/destacados.css'
import './styles/footer.css'
import './styles/header.css'
import './styles/index.css'
import './styles/outfit.css'
import './styles/root.css'

// Importación del contexto global del carrito
import { CarritoProvider } from './components/CarritoContext.jsx'

// Punto de entrada principal de la aplicación
// Aquí se monta el árbol de componentes en el elemento 'root' del HTML
createRoot(document.getElementById('root')).render(
  // StrictMode ayuda a detectar posibles problemas en el desarrollo
  <StrictMode>
    {/* BrowserRouter permite la navegación entre páginas sin recargar */}
    <BrowserRouter>
      {/* CarritoProvider provee el estado global del carrito a toda la app */}
      <CarritoProvider>
        {/* App es el componente principal que contiene toda la lógica y estructura */}
        <App />
      </CarritoProvider>
    </BrowserRouter>
  </StrictMode>
)