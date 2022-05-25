import { Component } from "react";
import { Preview } from "./preview/Preview";
import '../form/movieForm.css';

export class Form extends Component {
    constructor(props){
        super(props);

    this.state = {
        seePreview:false,
        movies:this.props.movies,
        newMovie:this.props.movieToEdit,
        formIsActive:this.props.formIsActive,
        editIsActive:this.props.editIsActive,
        createIsActive:this.props.createIsActive,
    };
    };

    keyPress = (key, e) => { 
        if (key === "Enter") {
          e.target.addButton.click();
        }
    };

    updateMovie = () => {
        let movie = this.state.newMovie;
        let id = movie.id;
        // delete movie.id;
        let data = movie;

        this.props.updateOneMovie(id,data);
        // OPCIÓ 1 - SENSE API SERVER
        // this.setState({movies:[this.state.newMovie,...this.props.movies]});
        // this.state.movies.splice(this.props.indexToEdit,1,this.state.newMovie)
    };
        
    handleSubmit = (e) => {
        e.preventDefault();

        if ((this.props.editIsActive===false)&&(this.state.newMovie.title.length > 0)){
            this.props.addMovie(this.state.newMovie);
        }
        if ((this.props.editIsActive===false)&&(this.state.newMovie.title.length === 0)){
            alert(`ℹ️ Title is required!`);
            return;
        }
        if((this.props.editIsActive===true)&&(this.state.newMovie===this.props.movieToEdit)){
            alert(`ℹ️ ${this.props.movieToEdit.title} details have not changed`) 
        }
        if ((this.props.editIsActive===true)&&(this.state.newMovie!==this.props.movieToEdit)){
            this.updateMovie();
            alert(`✅ ${this.props.movieToEdit.title} has been updated!`) 
        }

        this.resetFormInputs();
        this.props.showForm();
    };

    resetFormInputs = () => {
    this.setState({
        newMovie:{title:'', year:'', imgURL:'',genres:''},
        seePreview:false,
    })
    };

    onInputChange = (e) => {
        const name = e.target.name;
        // console.log(e.target.name)
        const value = e.target.value;
        // const value = e.target.value.toLowerCase();
        // console.log(value)
        this.setState({newMovie: {...this.state.newMovie, [name]:value}});
        //ES POSA EL ... PERQUÈ MANTINGUI TOTA LA INFORMACIÓ DELS ALTRES CAMPS I NO SE SOBREESCRIGUIN.
        // this.showPreview();
    };

    // showPreview = () => { NO OK.. ACTIVAR TAMBÉ A ONINPUTCHANGE
    // // NO S'EXECUTA BÉ PER ENLLOC...AMB 1 PUNT DE RETRÀS

    //     let imageLength = this.state.newMovie.imgURL.length;
    //     console.log(`URL length ${imageLength}`)
    //     let image = this.state.newMovie.imgURL;
    //     console.log(`Preview URL ${image}`)

    //     if(imageLength>0){
    //         this.setState({seePreview:true})}
    //     else {this.setState({seePreview:false})};

    //     console.log(`Preview State ${this.state.seePreview}`)
    // };

    render (){
        return (<section className="form_and_preview">

                    <button onClick={this.resetFormInputs} className="resetForm_button">&times;</button>                
                    <form onSubmit={this.handleSubmit} className="input_form">
                            
                            <input onChange ={this.onInputChange} value={this.state.newMovie.title} type="text" name="title" className="title_input" placeholder="Title"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.year} type="text" name='year' className="year_input" placeholder="Year"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.imgURL} type="text" name='imgURL' className="imgURL_input" placeholder="Image URL"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.genres} type="text" name='genres' className="genres_input" placeholder="Genres"/>
                            
                            {this.state.editIsActive?
                            <button type="submit" name='updateButton' className="update_button">Update</button>
                            : <button type="submit" name='addButton' className="create_button">Create</button>}
                    </form>

                    {/* TERNARY NO OK*/}
                        <div className="previewZone">
                            <Preview newMovie={this.state.newMovie} seePreview={this.state.seePreview} />
                        </div>
                    
                </section>) 
        };
}