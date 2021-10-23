import { useState, useEffect } from "react";
import "./App.scss";


import Nav from "./components/Nav/Nav";
import Carousel from "./components/Carousel/Carousel";
import Home from "./containers/Home/Home";

import { provider, auth } from "./firebase.js";
import { signInWithRedirect, onAuthStateChanged, signOut } from "@firebase/auth";
import { collection, getDocs, deleteDoc, setDoc, doc } from "@firebase/firestore";
import { db } from "./firebase";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  // Firebase
  const [authUser, setAuthUser] = useState(null);

  useEffect( () => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  },[]);

  const handleLogout = () => {
    signOut(auth);
  };

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  }
  // Firebase database
  const [firebaseFavourites, setFirebaseFavourites] = useState([]);

  // Create
  const addToFavourites = (name) => {
    if(!firebaseFavourites.includes(name)){
      setDoc(doc(db, authUser.displayName, name), {
        name: name,
      });
    }
  }

  // Update
  const getFavourites = () => {
    getDocs(collection(db, (authUser ? authUser.displayName : "Karan"))).then(docs => {
      const favouriteBeers = [];
      docs.forEach(doc => {
        favouriteBeers.push(doc.data().name);
      });
      setFirebaseFavourites(favouriteBeers);
    });
  };

  // Delete
  const deleteFavourites = (name) => {
    deleteDoc(doc(db, authUser.displayName, name));
  };

  useEffect(() => {
    getFavourites();
  },[authUser, firebaseFavourites]);

  // Search Logic
  const [searchWord, setSearchWord] = useState("");
  const searchHandler = (searchWord) => {
    setSearchWord(searchWord);
  }

  // Classic Logic
  const [isClassic, setIsClassic] = useState(false);
  const handleIsClassic = () => {
    setIsClassic(!isClassic);
  }

  // pH logic
  const [phLevel, setPhLevel] = useState(3);
  const handlePhLevel = (phLevel) => {
    setPhLevel(phLevel);
  }

  // ABV logic
  const [abvLevel, setAbvLevel] = useState(0);
  const handleAbvLevel = (abvLevel) => {
    setAbvLevel(abvLevel);
  }

  //get beers from api
  const [beers, setBeers] = useState([]);
  
  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?page=3&per_page=80").then(response=> {
      return response.json();
    }).then((data) => {
      setBeers(data);
    })
  }

  useEffect(() => {
    getBeers();
  }, [])

  const privateRoute = authUser ? "" : <Redirect to="/" />
  return (
    <Router>
      <div className="app">
        <Nav searchHandler={searchHandler} handleIsClassic={handleIsClassic} phLevel={phLevel} handlePhLevel={handlePhLevel} abvLevel={abvLevel} handleAbvLevel={handleAbvLevel} authUser={authUser} handleLogin={handleLogin} handleLogout={handleLogout} />
        <Switch>
          <Route path="/favourites">
            {privateRoute}
            <Carousel beers={beers} firebaseFavourites={firebaseFavourites}/>
          </Route>
          <Route path="/">
            <Home beers={beers} isClassic={isClassic} searchWord={searchWord} phLevel={phLevel} abvLevel={abvLevel} authUser={authUser} addToFavourites={addToFavourites} firebaseFavourites={firebaseFavourites} deleteFavourites={deleteFavourites} />
          </Route>
        </Switch>

      </div>
    </Router>
  );
};

export default App;