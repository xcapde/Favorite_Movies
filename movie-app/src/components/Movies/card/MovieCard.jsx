import { Component } from "react";
import { Link } from 'react-router-dom';

export class MovieCard extends Component {

    render() {
        // props --> per passar estats o variables de pare (movieList) a fill (cardList)
        // nova variable per igualar tots els atributs de l'ítem "movie" al del seu pare. 
        let movie = this.props.movie;

        return (
            <div className="movie_card">
                        {/* <Link to="/movie_detail"> */}
                        <div className="movie_img">                            
                            <img src={movie.imgURL} alt="movie cover"/>
                            <button className="favorite_button"><i className="fa-solid fa-star"></i></button>
                            <Link to="/movie_detail"><button className="movie_detail_button"><i className="fa-solid fa-info"></i></button></Link>
                        </div>
                        {/* </Link> */}
                        <div className="movie_info">
                            <div className="card_text">
                                <h1>{movie.title}</h1>
                                <h2>{movie.genres}</h2>
                                <h2>{movie.year}</h2>
                            </div>
                            <div className="card_buttons">
                                <button onClick={()=>this.props.editMovie(movie.id)} className="edit_button"><i className="fa-solid fa-pencil"></i></button>
                                <button onClick={()=>this.props.deleteMovie(movie.id)} className="delete_button"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>
            )
        }
}