import React, { Fragment,createContext,useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./layout/navbar";
import Home from "./layout/home";
import Main from "./layout/main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "./layout/order";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { products } from "./database/productsData";
import SignUp from "./layout/signup";
import LogIn from "./layout/login";
import { useDispatch } from "react-redux";
import { dispatchLogin } from "./Redux/actions/authActions";
import axios from "axios";
import Cart from "./layout/cart";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if(user){
      const res = {
        data: JSON.parse(user)
      }
        dispatch(dispatchLogin(res,true))
    }
    else{
      const res ={
        data: []
      }
      dispatch(dispatchLogin(res,false))
    }
  }, [dispatch])

  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cart" component={Cart} />
        
        </Switch>
      </Fragment>

    </Router>
  );
}

export default App;
