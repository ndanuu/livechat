import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
// import CustomerPage from "./components/customer/CustomerPage";
import "bootstrap/dist/js/bootstrap.min.js";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatPopup from "./components/customer/ChatPopup";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/chatpopup" component={ChatPopup} />

          <ChatPopup />
          {/* <Modal /> */}
        </Switch>
        <MainLayout />
        {/* <ChatPopupForm/> */}
      </Router>
    </Provider>
  );
}

export default App;
