import axios from "axios";

//constantes
const inicialData = {
  array: [],
  page: 1
};

//types
const OBTENER_PERSONAJES_OK = "OBTENER_PERSONAJES_OK";
const SIGUIENTE_PERSONAJES_OK = "SIGUIENTE_PERSONAJES_OK";

//reducers
export default function rickReducer(state = inicialData, action) {
  switch (action.type) {
    case OBTENER_PERSONAJES_OK:
      return { ...state, array: action.payload };
    case SIGUIENTE_PERSONAJES_OK:
      return { ...state, array: action.payload.array, page:action.payload.page };
    default:
      return state;
  }
}

//acciones
export const obtenerPersonajesAccion = () => async (dispatch, getState) => {
  
  try {
    const respuesta = await axios.get(
      `https://rickandmortyapi.com/api/character?page=1`
    );
    dispatch({
      type: OBTENER_PERSONAJES_OK,
      payload: respuesta.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const siguenterPersonajesAccion = () => async (dispatch, getState) => {
  const page = getState().personajes.page;
  console.log("getState , "+ getState().personajes.page)
  const siguiente = page + 1;
  console.log("siguiente "+siguiente)

  try {
    const respuesta = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${siguiente}`
    );
    dispatch({
      type: SIGUIENTE_PERSONAJES_OK,
      payload: {
        array: respuesta.data.results,
        page: siguiente,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
