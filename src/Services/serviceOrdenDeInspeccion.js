import axios from 'axios';



const getOrdenDeInspeccion = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/ordenesInspeccion`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching orden de inspeccion:', error);
    throw error;
  }
}

const getMotivosDeInspeccion = async () => {
  try {
    const response = await axios.get('/motivosInspeccion'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching motivos de inspeccion:', error);
    throw error;
  }
  
}


export default{ getOrdenDeInspeccion, getMotivosDeInspeccion};

