import { Component } from "react";
import { Link } from 'react-router-dom';

export class SubPage extends Component  {

    render() {
        return  <div className="pages">
                    <h1>EIIIIII!! SÓC UNA SUBPAGE, JUJU 😏</h1>                        
                    
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