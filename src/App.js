import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import home from "./pages/Home";
import about from "./pages/About";
import portfolio from "./pages/Portfolio";
import travelhome from "./pages/TravelHome";
import sayulita from "./pages/Sayulita";
import munich from "./pages/Munich";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/portfolio" component={portfolio} />
        <Route exact path="/travelhome" component={travelhome} />
        <Route exact path="/sayulita" component={sayulita} />
        <Route exact path="/munich" component={munich} />

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
