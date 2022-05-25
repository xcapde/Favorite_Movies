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
                <h2>Details</h2>
                <img src={`${this.state.movieInfo.imgURL}`}/>
                <p>Bla bla bla...</p>
            </main>
        </div>
    );
  }
}
