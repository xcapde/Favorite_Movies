import { Component } from "react";
import { Link } from 'react-router-dom';
import './style/pages_style.css';

export class MovieDetail extends Component  {

    render() {
        return <div className="pages">
                    <h1>HOLA!! SÓC LA MOVIE DETAIL 😊</h1>
                    
                    <div className="pages_buttons">
                        <Link to="/">
                            <button><i class="fa-solid fa-house"></i></button>
                        </Link>
                            
                        <Link to="/movie_detail/subpage">
                            <button>SUBPAGE</button>
                        </Link>

                        <Link to="/login">
                            <button>LOGIN</button>
                        </Link>
                    </div>
                </div>
    };
}