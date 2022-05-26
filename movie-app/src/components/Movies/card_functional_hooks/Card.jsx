import { Link } from 'react-router-dom';
import '../card_functional_hooks/card.css';
// export const Card = (props) => { --> també es pot declarar com a variable = funció
export function Card (props) {
    const movie = props.movie;

    const markFavorite = (movie) => {
        // setMovieIsFavorite({movieIsFavorite:!this.state.movieIsFavorite});
        // console.log(`mark state ${this.state.movieIsFavorite}`)

        // let favoriteStatus=movie.movieIsFav
        // if(this.state.movieIsFavorite===true){
        //     favoriteStatus=true}
        // else {favoriteStatus=false}

        // console.log(`mark status ${favoriteStatus}`);
        console.log(movie)
    };

    const editMovie = (movie) => {
        props.editMovie(movie);
    };

    const deleteMovie = (id) => {
        props.deleteMovie(id);
    };

    return (
            // <div className={this.state.movieIsFavorite? "movie_card fav_card":"movie_card"}>
                        <div className='movie_card'>
                        <div className="movie_img">
                            <Link to={`/movie_detail/${movie.id}`}>                            
                                <img src={movie.imgURL} alt="movie cover"/>
                                <button className="movie_detail_button"><i className="fa-solid fa-info"></i></button>
                            </Link>
                            <button onClick={()=>markFavorite(movie)} className="favorite_button"><i className="fa-solid fa-star"></i></button>
                            {/* <button onClick={()=>markFavorite(movie)} className={this.state.movieIsFavorite? "favorite_button fav_true":"favorite_button"}><i className="fa-solid fa-star"></i></button> */}
                        </div>
                        <div className="movie_info">
                            <div className="card_text">
                                <h1>{movie.title}</h1>
                                <h2>{movie.genres}</h2>
                                <h2>{movie.year}</h2>
                            </div>
                            <div className="card_buttons">
                                <button onClick={()=>editMovie(movie)} className="edit_button"><i className="fa-solid fa-pencil"></i></button>
                                <button onClick={()=>deleteMovie(movie.id)} className="delete_button"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>
        )
        
}