
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Encabezado from "./components/Encabezado";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personajes from "./components/Personajes";
import Episodios from "./components/Episodios";

function App() {


  const store = generateStore()

  return (
    <> 
      
    <Provider store={store} >        
    <Router>
      <Encabezado />
        <Routes>
          <Route path='/personajes' element = {<Personajes/>} />            
          <Route path='/episodios' element = {<Episodios/>} />            
          <Route path='/' element = {<Personajes/>} />            
        </Routes>
      </Router>
    </Provider>
    </>
  );
}

export default App;
