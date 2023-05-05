import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
