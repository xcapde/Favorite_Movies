import { Component } from "react";
import { Link } from "react-router-dom";
import "./style/pages_style.css";
import { movieServices } from "../../services_APIs/movieServices";

export class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: {},
    };
  }

  seeMovieDetailsById = () => {
    // let thisMoviePath = window.location.pathname;
    // let thisMovieID = thisMoviePath.split("/movie_detail/")[1];
    let thisMovieID = window.location.pathname.split("/movie_detail/")[1];
    // console.log(thisMovieID);

    movieServices.getMovieById(thisMovieID).then((res) => {
    //   console.log(res);
      this.setState({ movieInfo: res });
      // console.log(this.state.movieInfo)
    });
  };

  componentDidMount() {
    this.seeMovieDetailsById();
  }

  render() {
    return (
        <div className="pages">
            <header className="pages_header">
                <div className="pages_buttons">
                <Link to="/">
                    <button>
                    {/* <i className="fa-solid fa-house"></i> */}
                    <i className="fa-solid fa-arrow-left"></i>
                    </button>
                </Link>
                </div>
                <h1>{`${this.state.movieInfo.title}`}</h1>
            </header>
            
            <main>
                <div className="movie_content">
                  <img src={`${this.state.movieInfo.imgURL}`} alt="Movie cover"/>
                  <div className="movie_sinopsi">
                    <h2>Sinopsi</h2>
                    <p>Where can I get some?
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                  </div>
                  <div className="movie_data">
                    <h2>Information</h2>
                    <h3>{`Year: ${this.state.movieInfo.year}`}</h3>
                    <h3>{`Genres: ${this.state.movieInfo.genres}`}</h3>
                    <h3>{`Favorite: ${this.state.movieInfo.movieIsFav}`}</h3>
                  </div>
                </div>                
            </main>
        </div>
    );
  }
}
