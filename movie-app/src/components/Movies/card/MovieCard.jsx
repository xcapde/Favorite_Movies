import { Component } from "react";

export class MovieCard extends Component {

    render() {
        // props --> per passar estats o variables de pare (movieList) a fill (cardList)
        // nova variable per igualar tots els atributs de l'ítem "movie" al del seu pare. 
        let movie = this.props.movie;

        return (
            <div className="movie_card">
                        <div className="movie_img">
                            <img src={movie.imgURL} alt="movie cover"/>
                            <button className="favorite_button"><i className="fa-solid fa-star"></i></button>
                        </div>
                        <div className="movie_info">
                            <div className="card_text">
                                <h1>{movie.title}</h1>
                                <h2>{movie.genres}</h2>
                                <h2>{movie.year}</h2>
                            </div>
                            <div className="card_buttons">
                                <button onClick={()=>this.props.updateMovie(movie.id)} className="update_button"><i className="fa-solid fa-pencil"></i></button>
                                <button onClick={()=>this.props.deleteMovie(movie.id)} className="delete_button"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>
        )
    }
}