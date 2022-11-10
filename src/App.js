import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Lays from "./Lays";
import Skittles from "./Skittles";
import Snickers from "./Snickers";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/lays">
          <Lays />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
        <Route exact path="/skittles">
          <Skittles />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
