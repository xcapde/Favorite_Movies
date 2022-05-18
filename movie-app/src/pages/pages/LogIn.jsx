import { Component } from "react";
import { Link } from 'react-router-dom';


export class Login extends Component  {

    render() {
        return <div className="pages">
                    <h1>HOLA!! SÓC EN LOGIN!! 😎</h1>        
                    
                    <div className="pages_buttons">
                        <Link to="/">
                            <button><i class="fa-solid fa-house"></i></button>
                        </Link>

                        <Link to="/movie_detail">
                            <button><i class="fa-solid fa-arrow-left-long"></i></button>
                        </Link>
                    </div>
                </div>
    };
}