import { useParams, useNavigate } from "react-router-dom";
import movies from "./data";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <br />
      <button onClick={() => navigate("/book")}>Book Seat</button>
    </div>
  );
}

export default MovieDetails;
