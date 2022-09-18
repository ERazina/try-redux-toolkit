import "./App.css";
import { store } from "./store.js";
import { Provider } from "react-redux";
import Counter from "./Counter/Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
