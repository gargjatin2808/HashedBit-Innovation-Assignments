import { useNavigate } from "react-router-dom";
import movies from "./data";

function MovieList() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Movie List</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {movies.map(movie => (
          <div key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
