import { Component } from "react";
import { Link } from 'react-router-dom';
import './style/pages_style.css';
import { movieServices } from "../../services_APIs/movieServices";

export class MovieDetails extends Component  {
    constructor(){
        super();
        this.state = {
            movieInfo:{},
        };
    };

    seeMovieDetailsById = (id) => {
        movieServices.getMovieById(id).then(res => {
            this.setState({movieInfo:res});
            // console.log(this.state.movieInfo)
        })
    };

    componentDidMount() {
        this.seeMovieDetailsById();     
    };


    render() {
        return <div className="pages">
                    <h1>{`HOLA!! SÓC LA MOVIE DETAIL ${this.state.movieInfo.id} 😊`}</h1>
                    
                    <div className="pages_buttons">
                        <Link to="/">
                            <button><i className="fa-solid fa-house"></i></button>
                        </Link>
                    </div>
                </div>
    };
}