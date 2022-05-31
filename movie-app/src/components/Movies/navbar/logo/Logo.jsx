import '../logo/logo.css'
import '../styles/navbar_mobile.css'
import { Link } from "react-router-dom";

export function Logo() {

    return(
        <Link className="back_home" to="/">
                <div className="logo">RE<span className="logo_movie">M<i className="fa-solid fa-circle-play"></i>VIE</span></div>
        </Link>
    );
}