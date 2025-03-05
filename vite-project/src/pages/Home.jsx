import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import '../css/Home.css'
import { searchMovies, getPopularMovies } from "../services/api";

function Home(){

  const [searchQuery, setSearchQuery] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true)

    // const movies = [
    //     {id: 1, title: "film1", release_date: "2025"},
    //     {id: 2, title: "film2", release_date: "2025"},
    //     {id: 3, title: "film3", release_date: "2025"},
    //     {id: 4, title: "film4", release_date: "2025"},
    //     {id: 5, title: "film5", release_date: "2025"},
    //     {id: 6, title: "film6", release_date: "2025"},
    // ];

    const [movies, setMovies] = useState([]);
    useEffect(()=>{
      const loadPopularMovies = async()=>{
        try{
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies)
        }catch (err){
          console.log(err)
          setErr("Faild to load movies..")
        }
        finally {
          setLoading(false)
        }

      }
      loadPopularMovies()
    },[])

    const handleSearch = (e) =>{

      e.preventDefault()
      setSearchQuery("")

    }

  return(
    <div className="home">

      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search.." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type="submit" className="search-button">Search</button>
      </form>

      {err && <div className="error-message">{err}</div>}

      {loading ? <div className="loading">Loading</div> : (

        <div className="movies-grid">
        {movies
  .filter((movie) => searchQuery === "" || movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
  .map((movie) => <MovieCard movie={movie} key={movie.id} />)}

        </div>)}

    </div>
  )

}

export default Home;