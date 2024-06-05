// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth.js";
import { db } from "./config/firebase";
import { getDocs, doc,collection,addDoc, deleteDoc } from "firebase/firestore";

function App() {
  const [movieList, setMovieList] = useState([]);
  //states to create/submit new movie
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);
  const moviesCollectionRef = collection(db, "movie");


  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
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
  useEffect(() => {
   
    getMovieList();
  }, []);
  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseYear: newReleaseDate,
        receivedOscar: isNewMovieOscar,
      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };
  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movie", id);
    await deleteDoc(movieDoc);
    await getMovieList();
  };
  return (
    <div className="App">
      <Auth />
      <div>
        <input
          type="text"
          placeholder="Movie title..."
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release Date..."
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={isNewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <label> Received an Oscar</label>
        <button onClick={onSubmitMovie}> Submit Movie</button>
      </div>
      {movieList.map((movie) => {
        return (
          <div key={movie.id}>
            <h1 style={{ color: movie.receivedOscar ? "green" : "red" }}>
              {movie.title}
            </h1>{" "}
            <p> Date: {movie.releaseYear} </p>
            <button onClick={() => deleteMovie(movie.id)}> Delete Movie</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
