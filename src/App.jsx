import Personajes from "./components/Personajes";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Encabezado from "./components/Encabezado";

function App() {


  const store = generateStore()

  return (
    <Provider store={store} >
      <Encabezado />
      <Personajes />
    </Provider>
  );
}

export default App;
