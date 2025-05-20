import { useLocation } from "wouter";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [, setLocation] = useLocation();

  const handleClick = () => {
    setLocation("/cerrarOrden");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <button
          className="btn btn-primary p-6 text-xl font-semibold text-white rounded-lg shadow-lg transition duration-300 ease-in-out"
          onClick={handleClick}
        >
          Cerrar Orden de Inspección
        </button>
      </div>
    </>
  );
}

export default App;
