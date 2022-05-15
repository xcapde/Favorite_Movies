import { Component } from "react";
import { MovieCard } from "../card/MovieCard";
import { FormBinding } from "../form binding/FormBinding";
// import { MovieForm } from "../form/MovieForm"; /*ESTÀ COMENTAT PER FER EL BIND DEL FORM A SOBRE*/

export class MovieList extends Component{
    constructor(){ 
        super();    

        this.state = {
            movies:[
                {
                    id: 1,
                    title: "Interstellar",
                    year: 2014,
                    imgURL: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                    genres: "Adventure, Drama, Sci-Fi"
                },
                {
                    id: 2,
                    title: "The Island",
                    year: 2005,
                    imgURL: "https://m.media-amazon.com/images/I/51nDms-dZZL.jpg",
                    genres: "Action, Sci-Fi, Thriller"
                },
                {
                    id: 3,
                    title: "The Lion King",
                    year: 1994,
                    imgURL: "https://static.posters.cz/image/750/posters/lion-king-cover-i11508.jpg",
                    genres: "Animation, Adventure, Drama"
                },
                {
                    id: 4,
                    title: "Intouchables",
                    year: 2011,
                    imgURL: "https://www.ethanproductions.com/movies-newDB/images/8436535541282.jpg",
                    genres: "Biography, Comedy, Drama"
                },
                {
                    id: 5,
                    title: "Wall-E",
                    year: 2008,
                    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfXIhUhNKZ1CY_KaKQUIEwsZKHLyY8QU0Nh_oZQxMuQRZETcSMbpCRvCXZLS0xezMQzQ&usqp=CAU",
                    genres: "Animation, Adventure, Family"
                },
                {
                    id: 6,
                    title: "The Avengers",
                    year: 2012,
                    imgURL: "https://wannagotothemovies.files.wordpress.com/2012/04/1-poster8.jpg",
                    genres: "Action, Adventure, Sci-Fi"
                },
                {
                    id: 7,
                    title: "Braveheart",
                    year: 1995,
                    imgURL: "https://i.ytimg.com/vi/eBjvpfmxJG8/movieposter.jpg",
                    genres: "Biography, Drama, History"
                },
                {
                    id: 8,
                    title: "Coco",
                    year: 2017,
                    imgURL: "https://tietarteve.com/wp-content/uploads/2015/11/Coco2.jpg",
                    genres: "Animation, Adventure, Comedy"
                },
                {
                    id: 9,
                    title: "The Truman Show",
                    year: 1993,
                    imgURL: "https://es.web.img3.acsta.net/medias/nmedia/18/90/27/81/20482778.jpg",
                    genres: "Comedy, Drama"
                },
            ],
        }
    };

    addMovie = (data) =>  {
        let lastIndex = this.state.movies[this.state.movies.length-1].id;
        let newIndex = lastIndex+1;
        let newMovie = {id:newIndex,...data};

        this.setState({movies:[newMovie,...this.state.movies]});
    };

    deleteMovie = (id) => {

        // let deleteConfirmation = FALTA POSAR UN AVÍS PER CONFIRMAR ES VOL ELIMINAR 

        let selectedMovies = this.state.movies.filter(movie => movie.id !== id);

        this.setState({movies: selectedMovies});
    };

    render() {
        return (<section>
                    {/* < MovieForm addMovie = {this.addMovie} /> *//*ESTÀ COMENTAT PER FER EL BIND DEL FORM A SOTA*/}
                    <FormBinding addMovie = {this.addMovie}/>
                    <div className="movies_list">               
                        
                        {this.state.movies.map((movie,key) => (
                        <MovieCard key={key} movie={movie} deleteMovie={this.deleteMovie} />
                        ))}

                        <button type="button" name="openForm" className="button_open_form"><i className="fa-solid fa-plus"></i></button>


                    </div>
                </section>)
    };
}