import React, {useEffect, useState} from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import './App.css';

import Header from "./components/Header/index"
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import SignUp from "./pages/SignUp";
import CreatePost from "./pages/CreatePost/index.js";
import Feed from "./pages/Feed/index.js"

const firebaseConfig = {
  apiKey: "AIzaSyBHS-03PLjmfmFU8pvHeRcCyqCR95_anIE",
  authDomain: "dwa-final.firebaseapp.com",
  databaseURL: "https://dwa-final.firebaseio.com",
  projectId: "dwa-final",
  storageBucket: "dwa-final.appspot.com",
  messagingSenderId: "511680695515",
  appId: "1:511680695515:web:439151a4e828374d38d0fe"
};


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(()=> {
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function (error) {
        console.log('error', error);
    });
  }, [firebaseConfig]);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user){
      if (user){
        setLoggedIn(true);
        setUser(user);
      }else{
        setLoggedIn(false);
        setUser({});
      }
    });
  }, [])

  function signUpFunction(e){
    e.preventDefault();
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error',error);
    });
  }
  function logInFunction(e){
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error',error);
    });
  }
  function logoutFunction(){
    firebase
      .auth()
      .signOut()
      .then(function(response){
        setLoggedIn(false);
      })
      .catch(function(error) {
        console.log('error',error);
    });
  }
  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
      <BrowserRouter>
        <Route exact path="/">
            { loggedIn ? <Feed user = {user} /> : <Redirect to="/login" /> } 
        </Route>
        <Route exact path='/sign-up'>
          {loggedIn ?  <Redirect to='/' /> : <SignUp signUpFunction = {signUpFunction}/> }
        </Route>
        <Route exact path='/login'>
          {loggedIn ? <Redirect to='/' /> : <Login logInFunction = {logInFunction}/> }
        </Route>
        <Route exact path="/user-profile">
          { loggedIn ?  <UserProfile user = {user} /> : <Login logInFunction={logInFunction}/> }
        </Route>
        <Route exact path="/create-post">
          { loggedIn ?  <CreatePost user = {user} /> : <Login logInFunction={logInFunction}/> }
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
