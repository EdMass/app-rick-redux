//import Personajes from "./components/Personajes";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Encabezado from "./components/Encabezado";
import Episodios from "./components/Episodios";

function App() {


  const store = generateStore()

  return (
    <Provider store={store} >
      <Encabezado />
      <Episodios />
    </Provider>
  );
}

export default App;
