import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation(); //? invocamos el use location para saber en que ruta estamos
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  // const EMAIL = "ejemplo@gmail.com";
  // const PASSWORD = "unaPassword";

  //*nueva funcion login
  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

  //? funcion login vieja
  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function onSearch(id) {
    // if (characters.includes())
    //*url vieja = `https://rickandmortyapi.com/api/character/${id}
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} random={random} />
      ) : (
        ""
      )}
      {/* <Nav onSearch={onSearch} random={random} /> */}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Error />} />

        <Route path="/" element={<Form login={login} />} />
      </Routes>
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
    </div>
  );
}

export default App;
