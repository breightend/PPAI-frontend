import Navbar from "./Navbar";

export default function CerrarOrden() {
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
                <input
                  type="radio"
                  name="radio-inspeccion"
                  className="radio radio-primary mr-3"
                  defaultChecked
                  id="opcion1"
                />
                <label
                  htmlFor="opcion1"
                  className="cursor-pointer text-gray-700"
                >
                  Opcion 1
                </label>
              </div>
              <div className="flex items-center rounded-md border border-gray-200 p-3 hover:bg-gray-50">
                <input
                  type="radio"
                  name="radio-inspeccion"
                  className="radio radio-primary mr-3"
                  id="opcion2"
                />
                <label
                  htmlFor="opcion2"
                  className="cursor-pointer text-gray-700"
                >
                  Opcion 2
                </label>
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
              placeholder="Ingrese sus observaciones aquí..."
              className="textarea textarea-bordered textarea-primary h-24 w-full resize-none p-3 text-gray-700 focus:ring  focus:ring-opacity-50"
            />
          </div>

          <button className="btn btn-success btn-block text-lg">
            Confirmar Cierre
          </button>
        </div>
      </div>
    </>
  );
}
