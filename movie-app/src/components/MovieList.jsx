import { Component } from "react";

// FALTA POSAR BOTÓ PER ELIMINAR CARD i FORMULARI PER CREAR CARDS

export class MovieList extends Component{
    constructor(){ 
        super();    

        this.state = {
            titol: "Porjecte movies",
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
                    imgURL: "https://i.pinimg.com/originals/04/e8/21/04e8210c2048e31d2049a7876613f54d.jpg",
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
    }

    render() {
        return <section>
                        
            <div className="movies_list">
                {this.state.movies.map((movie,key) => (
                    
                    <div className="movie_card">
                        <div className="movie_img">
                            <img src={movie.imgURL} alt="movie cover"/>
                            <p className="img_year">{movie.year}</p>
                        </div>
                        <div className="movie_info">
                            <div className="card_text">
                                <h1>{movie.title}</h1>
                                <h2>{movie.genres}</h2>
                            </div>
                                <button className="card_button"><i className="fa-solid fa-star"></i></button>
                        </div>
                    </div>                
                    ))}

            </div>
            
        </section>
    }
}