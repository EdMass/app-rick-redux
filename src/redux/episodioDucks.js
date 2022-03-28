import axios from "axios";

//constantes
const inicialData = {
  array: [],
  page: 1,
};

//types
const OBTENER_EPISODIO_OK = "OBTENER_EPISODIO_OK";
const SIGUIENTE_EPISODIO_OK = "SIGUIENTE_EPISODIO_OK";
const ANTERIOR_EPISODIO_OK = "ANTERIOR_EPISODIO_OK";

//reducers
export default function episodioReducer(state = inicialData, action) {
  switch (action.type) {
    case OBTENER_EPISODIO_OK:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };
    case SIGUIENTE_EPISODIO_OK:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };
      case ANTERIOR_EPISODIO_OK:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };
    default:
      return state;
  }
}

//acciones
export const obtenerEpisodioAccion = () => async (dispatch, getState) => {
  try {
    const respuesta = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=1`
    );
    dispatch({
      type: OBTENER_EPISODIO_OK,
      payload: {
        array: respuesta.data.results,
        page: 1,
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const siguenterEpisodioAccion = () => async (dispatch, getState) => {
  const page = getState().episodios.page;

  const siguiente = page + 1;

  try {
    const respuesta = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${siguiente}`
    );
    dispatch({
      type: SIGUIENTE_EPISODIO_OK,
      payload: {
        array: respuesta.data.results,
        page: siguiente,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const anteriorEpisodioAccion = () => async (dispatch, getState) => {
  const page = getState().episodios.page;
  function anterior() { 
    if(page<=1){
        return page
    }return page -1
 }

  
  try {
    const respuesta = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${anterior()}`
    );
    dispatch({
      type: ANTERIOR_EPISODIO_OK,
      payload: {
        array: respuesta.data.results,
        page: anterior(),
      },
    });
  } catch (error) {
    console.log(error);
  }
};