import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id);
  const handleFavClick = (e) => {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
    };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.primaryImage} alt={movie.originalTitle} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={handleFavClick}
          >
            ♥
          </button>
          <h4>{movie.genres?.toString()}</h4>
          <p>{movie.description}</p>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.originalTitle}</h3>
        <h3>⭐{movie.averageRating}</h3>
      </div>
      <div className="movie-info">
        <p>{movie.releaseDate?.split("-")[0]}</p>
        <p>{movie.runtimeMinutes} Mins</p>
      </div>
    </div>
  );
};

export default MovieCard;
