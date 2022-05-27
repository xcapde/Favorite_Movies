import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { movieServices } from "../../services_APIs/movieServices";
import "./style/pages_style.css";

export function MovieDetails () {
    const [movieInfo, setMovieInfo] = useState({});
    const [id, setId] = useState(useParams().id)
    //useParams et torna la info del path o de l'endpoint

  const seeMovieDetailsById = () => {
    // OPCIÓ 1 - FORMA DE FER-HO SENSE EL USEPARAMS
    // let thisMoviePath = window.location.pathname;
    // let thisMovieID = thisMoviePath.split("/movie_detail/")[1];
    // let thisMovieID = window.location.pathname.split("/movie_detail/")[1];
    // movieServices.getMovieById(thisMovieID).then((res) => {
    //   setMovieInfo(res);
    // });

    // OPCIÓ 2 - FORMA DE FER-HO AMB USEPARAMS
    movieServices.getMovieById(id).then((res) => {
      // console.log(res);
      setMovieInfo(res);
    });
  };

  // equival a componentDidMount
  useEffect(() => {
    seeMovieDetailsById();
  });

  return (
        <div className="pages">
            <header className="pages_header">
                <div className="pages_buttons">
                <Link to="/">
                    <button>
                    <i className="fa-solid fa-arrow-left"></i>
                    </button>
                </Link>
                </div>
                <h1>{`${movieInfo.title}`}</h1>
            </header>
            
            <main>
                <div className="movie_content">
                  <img src={`${movieInfo.imgURL}`} alt="Movie cover"/>
                  <div className="movie_sinopsi">
                    <h2>Sinopsi</h2>
                    <p>Where can I get some?
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                  </div>
                  <div className="movie_data">
                    <h2>Information</h2>
                    <h3>{`Year: ${movieInfo.year}`}</h3>
                    <h3>{`Genres: ${movieInfo.genres}`}</h3>
                    <h3>{`Favorite: ${movieInfo.movieIsFav}`}</h3>
                  </div>
                </div>                
            </main>
        </div>
        );
}
