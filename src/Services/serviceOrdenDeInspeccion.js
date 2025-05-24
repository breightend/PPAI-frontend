import axios from "axios";

const getOrdenesDeInspeccion = async () => {
  try {
    const response = await axios.get(
      "https://localhost:7200/ordenes-inspeccion"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching orden de inspeccion:", error);
    throw error;
  }
};

const getMotivosDeInspeccion = async () => {
  try {
    const response = await axios.get("https://localhost:5200/motivos");
    return response.data;
  } catch (error) {
    console.error("Error fetching motivos de inspeccion:", error);
    throw error;
  }
};

const getUsuarioLogueado = async () => {
  try {
    const response = await axios.get("https://localhost:5200/empleado-logueado");
    return response.data;
  } catch (error) {
    console.error("Error fetching sesion:", error);
    throw error;
  }
};

const postMotivosDeInspeccion = async (motivo) => {
  try {
    const response = await axios.post("/", motivo);
    return response.data;
  } catch (error) {
    console.error("Error posting motivo de inspeccion:", error);
    throw error;
  }
};

export default { getOrdenesDeInspeccion, getMotivosDeInspeccion, postMotivosDeInspeccion, getUsuarioLogueado };
