import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        {/* <Route exact path="/about" component={about} />
        <Route exact path="/portfolio" component={portfolio} />
        <Route exact path="/travel" component={travel} /> */}

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
