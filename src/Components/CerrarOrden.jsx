import Navbar from "./Navbar";
import getOrdenDeInspeccion from "../Services/serviceOrdenDeInspeccion";
import { useEffect, useState } from "react";

export default function CerrarOrden() {
  const [ordenes, setOrdenes] = useState([]);
  const [motivos, setMotivos] = useState([]);
  const [selectedOrden, setSelectedOrden] = useState(null);
  const [selectedMotivo, setSelectedMotivo] = useState(null);
  const [observaciones, setObservaciones] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordenesData = await getOrdenDeInspeccion.getOrdenDeInspeccion();
        const motivosData = await getOrdenDeInspeccion.getMotivosDeInspeccion();
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
                  ordenes.map(orden => (
                    <div key={orden.id} className="flex items-center">
                      <input
                        type="radio"
                        name="orden-inspeccion"
                        className="radio radio-primary mr-3"
                        id={`orden-${orden.numero}`}
                        value={orden.id}
                        onChange={handleOrdenChange}
                        checked={selectedOrden === String(orden.id)} 
                      />
                      <label
                        htmlFor={`orden-${orden.id}`}
                        className="cursor-pointer text-gray-700"
                      >
                        {orden.descripcion}
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
              Motivos de Inspección
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
                      <textarea name="" id="" placeholder="Obersevacion"></textarea>
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
            Confirmar Cierre
          </button>
        </div>
      </div>
    </>
  );
}
