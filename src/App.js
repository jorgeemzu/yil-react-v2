import "./App.css";

// import AutoGrid from "./components/autoGrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AutoDetails from "./components/AutoDetails";
// import NavBar from "./components/NavBar";
import Autos from "./components/Autos";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/auto/detalles/:carId">
            <AutoDetails />
          </Route>

          <Route path="/autos">
            <Autos />
          </Route>

          <Route exact path="/contacto">
            <Contacto />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
