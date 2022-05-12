import { Component } from "react";

export class MovieForm extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    handleSubmit = (e) => {
        e.preventDefault()
        let title = e.target.title.value;
        let genres = e.target.genres.value;
        let year = e.target.year.value;
        let imgURL = e.target.imgURL.value;
        let newMovie = {
            'title':title,
            'genres':genres,
            'year': year,
            'imgURL':imgURL,
        }
        this.props.addMovie(newMovie);

        let children = e.target.children;
        for (let element of children){
            element.value="";
        }
    };

    render (){
        return (<form onSubmit={this.handleSubmit} className="input_form">
                    <input type="text" name="title" className="title_input" placeholder="Title"/>
                    <input type="text" name='year' className="year_input" placeholder="Year"/>
                    <input type="text" name='imgURL' className="imgURL_input" placeholder="Cover image URL"/>
                    <input type="text" name='genres' className="genres_input" placeholder="Genres"/>
                    <button type="submit" className="create_button">Create</button>
                </form>) 
        }

}