import { Component } from "react";
import { Preview } from "./preview/Preview";
// import { movieServices } from "../../../services_APIs/movieServices";


//IDEAL PER FER UPDATES VEIENT EL RESULTAT A L'INSTANT!
export class FormBinding extends Component {
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
        // movieServices.putAMovie().then(res => {
        // this.props.getData();
        // console.log(res)
        // });

        // OPCIÓ 1 - SENSE SERVER API
        this.setState({movies:[this.state.newMovie,...this.props.movies]});
        this.state.movies.splice(this.props.indexToEdit,1,this.state.newMovie)
    };
        
    handleSubmit = (e) => {
        e.preventDefault();

        if ((this.props.editIsActive===false)&&(this.state.newMovie.title.length > 0)){
            this.props.addMovie(this.state.newMovie);
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
    this.setState({newMovie:{title:'', year:'', imgURL:'',genres:''}})
    };

    onInputChange = (e) => {
        const name = e.target.name;
        // console.log(e.target.name)
        const value = e.target.value;
        // console.log(value)
        this.setState({newMovie: {...this.state.newMovie, [name]:value}});
        //ES POSA EL ... PERQUÈ MANTINGUI TOTA LA INFORMACIÓ DELS ALTRES CAMPS I NO SE SOBREESCRIGUIN.
    };

    // NO OK, DESACTIVAT
    showPreview = () => {
        //No funciona bé, la llargada de l'input comença a 1 i segueix en 0, 1 ,2.. --> desactivat en el RENDER
        if(this.state.newMovie.imgURL>0) this.setState({seePreview:true})
        else {this.setState({seePreview:false})};
        // console.log(this.state.seePreview);
        // console.log(this.state.newMovie);
    };

    render (){
        console.log(this.props.movieToEdit.title)

        return (<section className="form_and_preview">

                    <button onClick={this.resetFormInputs} className="resetForm_button">&times;</button>                
                    <form onSubmit={this.handleSubmit} className="input_form">
                            
                            <input onChange ={this.onInputChange} value={this.state.newMovie.title} type="text" name="title" className="title_input" placeholder="Title"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.year} type="text" name='year' className="year_input" placeholder="Year"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.imgURL} type="text" name='imgURL' className="imgURL_input" placeholder="Cover image URL"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.genres} type="text" name='genres' className="genres_input" placeholder="Genres"/>
                            
                            {this.state.editIsActive?
                            <button type="submit" name='updateButton' className="update_button">Update</button>
                            : <button type="submit" name='addButton' className="create_button">Create</button>}
                    </form>

                    {/* TERNARY. DOESN'T WORK WELL*/}
                    <div className="previewZone">
                        < Preview seePreview={this.state.seePreview} newMovie={this.state.newMovie} />
                    </div>

                </section>) 
        };

}