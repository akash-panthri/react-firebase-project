// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth.js";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRed = collection(db, "movie");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRed);
        const fileteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(fileteredData);
        setMovieList(fileteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieList();
  }, []);
  return (
    <div className="App">
      <Auth />
      
      {movieList.map((movie) => {
        return (
          <div>
            <h1 style={{ color: movie.receivedOscar ? "green" : "red" }}>{movie.title}</h1>{" "}
            <p> Date: {movie.releaseYear} </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
