import { Component } from "react";

export class CreateMovie extends Component {
    constructor(){
        super();
    }
    
    render (){
    return (<div className="input_form">
                <input type="text" className="title_input" placeholder="Title"/>
                <input type="text" className="year_input" placeholder="Year"/>
                <input type="url" className="imgURL_input" placeholder="Cover image URL"/>
                <input type="text" className="genres_input" placeholder="Genres"/>
                <button type="submit" className="create_button">Create</button>
            </div>) 
    }
}