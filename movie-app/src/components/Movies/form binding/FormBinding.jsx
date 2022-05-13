import { Component } from "react";

export class FormBinding extends Component {
   

    keyPress = (key, e) => { 
        if (key === "Enter") {
          e.target.addButton.click();
        }
    }
    
    resetFormInputs = (e) => {
        e.target.title.value = "";
        e.target.genres.value = "";
        e.target.year.value = "";
        e.target.imgURL.value = "";
    };
    
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
        this.resetFormInputs()


        // ALTRA MANERA DE FER RESET DELS INPUTS
        // let children = e.target.children;
        // for (let element of children){
        //     element.value="";
    }
    // PASSO A MINUT 1.56 DEL VIDEO 2
    onInputChange = (e) => {
        this.setState({})
        console.log(e.target.value)
    }

    render (){
        return (<form onSubmit={this.handleSubmit} className="input_form">
                    <input onChange ={this.onInputChange} type="text" name="title" className="title_input" placeholder="Title"/>
                    <input type="text" name='year' className="year_input" placeholder="Year"/>
                    <input type="text" name='imgURL' className="imgURL_input" placeholder="Cover image URL"/>
                    <input type="text" name='genres' className="genres_input" placeholder="Genres"/>
                    <button type="submit" name='addButton' className="create_button">Create</button>
                </form>) 
    }

}