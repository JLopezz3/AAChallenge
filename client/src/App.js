import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="app">
        <AnimatePresence>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>

            <Route path="/">
              <Home />
              <Footer />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
