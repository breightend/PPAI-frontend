import Navbar from "./Navbar";
import service from "../Services/serviceOrdenDeInspeccion";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


export default function CerrarOrden() {
  const [ordenes, setOrdenes] = useState([]);
  const [motivos, setMotivos] = useState([]);
  const [selectedOrden, setSelectedOrden] = useState(null);
  const [selectedMotivo, setSelectedMotivo] = useState(null);
  const [observaciones, setObservaciones] = useState("");
  const [formData, setFormData] = useState({
    numero: "",
    observacionOrden: "",
    motivo: "",
    observacionMotivo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordenesData = await service.getOrdenesDeInspeccion();
        const motivosData = await service.getMotivosDeInspeccion();
        setOrdenes(ordenesData);
        setMotivos(motivosData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOrdenChange = (event) => {
    setSelectedOrden(event.target.value);
  };
  const handleMotivoChange = (event) => {
    setSelectedMotivo(event.target.value);
  };
  const handleObservacionesChange = (event) => {
    setObservaciones(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Orden seleccionada:", selectedOrden);
    console.log("Motivo seleccionado:", selectedMotivo);
    console.log("Observaciones:", observaciones);
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src=".\src\assets\ingeUsuario.jpg"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                
                Tienes un mail nuevo!
              </p>
              <p className="mt-1 text-sm text-gray-500">
                La operacion fue hecha con exito
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Cerrar
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center  p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
          <h1 className="mb-6 text-center text-2xl font-bold text-gray-700">
            Cerrar Orden de Inspección
          </h1>

          <div className="mb-6">
            <label className="label mb-2 block">
              <span className="label-text text-lg font-semibold text-gray-600">
                Orden de Inspeccion
              </span>
            </label>
            <div className="space-y-2">
              <div className="flex items-center rounded-md border border-gray-200 p-3 hover:bg-gray-50">
                {ordenes &&
                  ordenes.map((orden) => (
                    <div key={orden.numero} className="flex items-center">
                      <input
                        type="radio"
                        name="numero"
                        className="radio radio-primary mr-3"
                        id={`orden-${orden.numero}`}
                        value={orden.numero}
                        onChange={handleOrdenChange}
                        checked={selectedOrden === String(orden.numero)}
                      />
                      <label
                        htmlFor={`orden-${orden.numero}`}
                        className="cursor-pointer text-gray-700"
                      >
                        {orden.numero} - {orden.fechaFin} - {orden.nombreEstacion}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="observacion" className="label mb-2 block">
              <span className="label-text text-lg font-semibold text-gray-600">
                Observaciones
              </span>
            </label>
            <textarea
              id="observacion"
              name="observaciones"
              placeholder="Ingrese sus observaciones aquí..."
              className="textarea textarea-bordered textarea-primary h-24 w-full resize-none p-3 text-gray-700 focus:ring  focus:ring-opacity-50"
              value={observaciones}
              onChange={handleObservacionesChange}
            />
          </div>

          <div>
            <span className="label-text text-lg font-semibold text-gray-600">
              Motivos fuera servicio Sismografo
            </span>
           
          </div>

          <div className="mb-6">
            <div className="space-y-2">
              {motivos && motivos.length > 0 ? (
                <div className="flex items-center rounded-md border border-gray-200 p-3 hover:bg-gray-50">
                  {motivos.map((motivo) => (
                    <div key={motivo.id} className="flex items-center">
                      <input
                        type="radio"
                        name="motivo-inspeccion"
                        className="radio radio-primary mr-3"
                        id={`motivo-${motivo.id}`}
                        value={motivo.id}
                        onChange={handleMotivoChange}
                        checked={selectedMotivo === String(motivo.id)}
                      />
                      <label
                        htmlFor={`motivo-${motivo.id}`}
                        className="cursor-pointer text-gray-700"
                      >
                        {motivo.descripcion}
                      </label>
                      <textarea
                        name=""
                        id=""
                        placeholder="Obersevacion"
                      ></textarea>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center rounded-md border border-gray-200 p-3 hover:bg-gray-50">
                  <p>No se encontraron motivos de inspección</p>
                </div>
              )}
            </div>
          </div>

          <button
            className="btn btn-success btn-block text-lg"
            onClick={handleSubmit}
          >
            Confirmar cierre de orden de inspeccion
          </button>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      </div>
    </>
  );
}
