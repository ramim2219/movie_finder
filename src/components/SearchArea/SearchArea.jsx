import React, { useState } from 'react';
import './SearchArea.css'; // Ensure you have the correct path

const SearchArea = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
            fetchMovies(query);
        }
    };
    const fetchMovies = async (searchQuery) => {
        setError(null);
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=33053c6345c133d0ef2d75b6ca2876bc&query=${searchQuery}`);
            console.log(response);
            const data = await response.json();
            if (response.ok) {
                setMovies(data.results || []);
            } else {
                setError(data.status_message || 'Error fetching movies');
            }
        } catch (error) {
            setError('Failed to fetch movies. Please try again later.');
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for movies..."
                    onChange={handleInputChange}
                />
                <button type="submit" className="search-button">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <div className="moviesBox">
            {movies.map((movie, index) => (
                <div className="movieCard">
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                        className="moviePoster"
                    />
                    <div className="movieDetails" key={index}>
                        <h3 className="movieTitle">{movie.title}</h3>
                        <p className="movieReleaseDate">
                            Release Date: {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
                        </p>
                        <p className="movieRating">IMDb Rating: {movie.vote_average || 'N/A'}</p>
                    </div>
                    <div className="card-action">
                        <a 
                            href={`https://www.themoviedb.org/movie/${movie.id}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="view-details-button"
                        >
                            View Details
                        </a>
                    </div>
                </div>
            ))}
            {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default SearchArea;
