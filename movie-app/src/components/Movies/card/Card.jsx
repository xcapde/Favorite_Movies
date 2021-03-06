import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../card/card.css';

export function Card (props) {
 
    const [movie, setMovie] = useState(props.movie);

    useEffect(() => {
        setMovie(props.movie)
    }, [props.movie])

    const markFavorite = (movie) => {
        props.markFavorite(movie);
    };

    const editMovie = (movie) => {
        props.editMovie(movie);
    };

    // const deleteMovie = (id) => {
    //     props.deleteMovie(id);
    // };

    return (
            <div className={movie.movieIsFav? "movie_card fav_card":"movie_card"}>
                        <div className="movie_img">
                            <Link to={`/movie_detail/${movie.id}`}>                            
                                <img src={movie.imgURL} alt="movie cover"/>
                                <button className="movie_detail_button"><i className="fa-solid fa-info"></i></button>
                            </Link>
                            <button onClick={()=>markFavorite(movie)} className={movie.movieIsFav? "favorite_button fav_true":"favorite_button"}><i className="fa-solid fa-star"></i></button>
                        </div>
                        <div className="movie_info">
                            <div className="card_text">
                                <h1>{movie.title}</h1>
                                <h2>{movie.genres}</h2>
                                <h2>{movie.year}</h2>
                            </div>
                            <div className="card_buttons">
                                <button onClick={()=>editMovie(movie)} className="edit_button"><i className="fa-solid fa-pencil"></i></button>
                                <button onClick={()=>props.runAskModal(movie.id)} className="delete_button"><i className="fa-solid fa-trash-can"></i></button>
                                {/* <button onClick={()=>deleteMovie(movie.id)} className="delete_button"><i className="fa-solid fa-trash-can"></i></button> */}
                            </div>
                        </div>
                    </div>
        )
        
}