import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import EmployeeLogin from "./components/Login/EmployeeLogin";
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import TicketSearch from "./pages/TicketSearch/TicketSearch";
import TicketSearch2 from "./pages/TicketSearch2/TicketSearch2";
import CustomerSearchTix from "./pages/CustomerSearchTix/CustomerSearchTix";
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
            <Route path="/employee-login">
              <EmployeeLogin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/checkout">
              <Navbar />
              <TicketSearch />
            </Route>
            <Route path="/employee">
              <Navbar />
              <TicketSearch2 />
            </Route>
            <Route path="/search-tickets">
              <Navbar />
              <CustomerSearchTix />
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
