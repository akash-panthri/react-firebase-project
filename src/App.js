// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth.js";
import { db } from "./config/firebase";
import {getDocs, collection} from 'firebase/firestore'

function App() {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRed = collection(db, 'movie')

  useEffect(()=>{
    const getMovieList =async () => {
      try {
        const data = await getDocs(moviesCollectionRed)
        console.log(data)
        const fileteredData = data.docs.map(doc =>({...doc.data()}))
        
      } catch (error) {
        console.error(error)
        
      }
    };
    getMovieList()
  },[])
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
