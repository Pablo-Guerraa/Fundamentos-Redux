import { Provider } from "react-redux";
import EquipoSeleccionado from "../components/EquipoSeleccionado";
import store from "../store"
import Jugadores from "../components/Jugadores";

function App() {
  return (
    <Provider store={store}>
      <h1>EDmanager</h1>
      <Jugadores/>
      <EquipoSeleccionado/>
    </Provider>
  );
}

export default App;
