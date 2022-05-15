import { Component } from "react";

//IDEAL PER FER UPDATES VEIENT EL RESULTAT A L'INSTANT!
export class FormBinding extends Component {

    state = {
        newMovie:{
            title:'',
            year:'',
            imgURL:'',
            genres:'',
        }
    };

    keyPress = (key, e) => { 
        if (key === "Enter") {
          e.target.addButton.click();
        }
    };
        
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addMovie(this.state.newMovie);
        this.resetFormInputs(e);
    };

    resetFormInputs = (e) => {
    
    };

    onInputChange = (e) => {
        const name = e.target.name;
        console.log(e.target.name)

        const value = e.target.value;
        console.log(value)

        this.setState({newMovie: {...this.state.newMovie, [name]:value}})
        //ES FA EL ... PERQUÈ MANTINGUI TOTA LA INFORMACIÓ DELS ALTRES CAMPS I NO SE SOBREESCRIGUIN.
    };

    render (){
        return (<form onSubmit={this.handleSubmit} className="input_form">
                    <input onChange ={this.onInputChange} value={this.state.newMovie.title} type="text" name="title" className="title_input" placeholder="Title"/>
                    <input onChange ={this.onInputChange} value={this.state.newMovie.year} type="text" name='year' className="year_input" placeholder="Year"/>
                    <input onChange ={this.onInputChange} value={this.state.newMovie.imgURL} type="text" name='imgURL' className="imgURL_input" placeholder="Cover image URL"/>
                    <input onChange ={this.onInputChange} value={this.state.newMovie.genres} type="text" name='genres' className="genres_input" placeholder="Genres"/>
                    <button type="submit" name='addButton' className="create_button">Create</button>
                </form>) 
    };

}