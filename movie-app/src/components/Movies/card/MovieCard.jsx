import { Component } from "react";
import { Link } from 'react-router-dom';
import '../card/card.css';
export class MovieCard extends Component {
    constructor(){
        super();
        this.state={
            movieIsFav:false,
        };
    }

    markFavorite = (movie) => {
        this.setState({movieIsFav:!this.state.movieIsFav});
        // console.log(movie.movieIsFav);
        // let favorite=movie.movieIsFav;
        // favorite=true;
        // console.log(favorite);
        // console.log(movie)

        // this.setState({movieIsFav:favorite});
    };


    render() {
        // props --> per passar estats o variables de pare (movieList) a fill (cardList)
        // nova variable per igualar tots els atributs de l'ítem "movie" al del seu pare. 
        let movie = this.props.movie;
        // console.log(this.state)


        return (
            <div className={this.state.movieIsFav? "movie_card fav_card":"movie_card"}>
                        <div className="movie_img">                            
                            <img src={movie.imgURL} alt="movie cover"/>
                            <button onClick={()=>this.markFavorite(movie)} className={this.state.movieIsFav? "favorite_button fav_true":"favorite_button"}><i className="fa-solid fa-star"></i></button>
                            <Link to={`/movie_detail/${this.props.movie.id}`} >
                                <button className="movie_detail_button"><i className="fa-solid fa-info"></i></button>
                            </Link>
                        </div>
                        <div className="movie_info">
                            <div className="card_text">
                                <h1>{movie.title}</h1>
                                <h2>{movie.genres}</h2>
                                <h2>{movie.year}</h2>
                            </div>
                            <div className="card_buttons">
                                {/* OPCIÓ 2-A EDIT MOVIE PASSEM TOTA LA MOVIE PERQUÈ LA ID PER AGAFAR LA DATA A LIST*/}
                                <button onClick={()=>this.props.editMovie(movie)} className="edit_button"><i className="fa-solid fa-pencil"></i></button>
                                <button onClick={()=>this.props.deleteMovie(movie.id)} className="delete_button"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>
            )
        }
}