import React, {useState,useEffect} from 'react';
import fire from './fire';
import './App.css';
import Login from "./Login";
import Recycle from "./Recycle";

const  App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
          switch (err.code){
            case "auth/invalid-email": //prosljeđena vrjednost za email usera nije validna
            case "auth/user-disabled": //da li je korisnik "moguc"
            case "auth/user-not-found": //Ne postoji postojeći korisnički zapis koji odgovara prosljeđenim podacima
              setEmailError(err.message);
              break;
            case "auth/wrong-password": //preslab pass
              setPasswordError(err.message);
              break;
          }
        });
  };
  const handleSignUp = () => {
    clearErrors();
    fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
          switch (err.code){
            case "auth/email-already-in-use": //email vec postoji, vaki mora biti jedinsven
            case "auth/invalid-email": //nije validna email adresa data
              setEmailError(err.message);
              break;
            case "auth/weak-password": //password preslab
              setPasswordError(err.message);
              break;
          }
        });
  };


  const handleLogout = () => {
    fire.auth().signOut();
  };

  //promjene tokom procesa autentifikacije
  //kada je user signin-ovana, trenutni user odlogovovan, ili kad se trenutni user promjenio
  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  },[]);


  return(
      <div className="App">
        {user ? (
            <Recycle handleLogout={handleLogout}/>
        ):(
        <Login
            email = {email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}
            handleLogin = {handleLogin}
            handleSignUp = {handleSignUp}
            hasAccount = {hasAccount}
            setHasAccount = {setHasAccount}
            emailError = {emailError}
            passwordError = {passwordError}
        />)}

      </div>
  )
}
export default App;
