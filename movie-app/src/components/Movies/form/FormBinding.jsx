import { Component } from "react";

//IDEAL PER FER UPDATES VEIENT EL RESULTAT A L'INSTANT!
export class FormBinding extends Component {
    constructor(props){
        super(props);

    this.state = {
        seePreview:false,
        newMovie:this.props.movieToEdit,
        movies:this.props.movies,
        editIsActive:this.props.editIsActive,
        // updateIsAvaliable:false,
    };
    }
    
    keyPress = (key, e) => { 
        if (key === "Enter") {
          e.target.addButton.click();
        }
    };

    movieUpdate = () =>{
        console.log('Sóc movieUpdate ^^');
        if(this.state.newMovie===this.props.movieToEdit){
            console.log('Yessss twins!');
            // hauria de tancar-se l'edit sense afegir card
        }
        else{
        //(this.state.newMovie!==this.props.movieToEdit)
            // console.log(this.state.newMovie)
            // console.log(this.props.movieToEdit)
            // this.setState({updateIsAvaliable:true})
            // console.log(this.state.updateIsAvaliable)
            console.log('Nooo som iguals..!');
            // hauria de fer copia de l'array original i modificar només la posició de la [id]
            // i modificar state amb setState igualant-lo a la copia de l'array després de l'operació.

        }        
            console.log(this.state.movies);

        this.setState({editIsActive:false});
    };
        
    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.newMovie.title.length > 0){
            this.props.addMovie(this.state.newMovie);
        }

        this.resetFormInputs();
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

        this.showPreview();
    };

    // NO OK, DESACTIVAT
    showPreview = () => {
        //No funciona bé, la llargada de l'input comença a 1 i segueix en 0, 1 ,2.. --> desactivat en el RENDER
        if(this.state.newMovie!==0) this.setState({seePreview:true})
        else this.setState({seePreview:false});

        // console.log(this.state.seePreview);
        // console.log(this.state.newMovie);
    };

    render (){              
        return (<section className="form_and_preview">
                    {/* <button onClick={this.resetFormInputs} className="resetForm_button"><i class="fa-solid fa-trash-can"></i></button> */}
                    
                    <form onSubmit={this.handleSubmit} className="input_form">
                            <input onChange ={this.onInputChange} value={this.state.newMovie.title} type="text" name="title" className="title_input" placeholder="Title"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.year} type="text" name='year' className="year_input" placeholder="Year"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.imgURL} type="text" name='imgURL' className="imgURL_input" placeholder="Cover image URL"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.genres} type="text" name='genres' className="genres_input" placeholder="Genres"/>

                            {this.state.editIsActive?
                            <button onClick={this.movieUpdate} type="submit" name='updateButton' className="update_button">Update</button>
                            : <button type="submit" name='addButton' className="create_button">Create</button>
                            }

                            {/* className={this.state.updateIsAvaliable? "update_button":"update_button_ready"} DOUBLE TERNARY CONDITIONAL*/}
                    </form>

                    {/* OPCIÓ 1 - PREVIEW */}
                    <div className="previewMovie">
                                <img src={this.state.newMovie.imgURL} alt=""/>
                                <div className="previewMovie_detail">Preview</div>
                    </div>

                    {/* OPCIÓ 2 - PREVIEW - TERNARY DOESN'T WORK WELL*/}
                    {/* <div className="previewZone">
                        {this.state.seePreview?
                        <div className="previewMovie">
                            <img src={this.state.newMovie.imgURL} alt=""/>
                            <div className="previewMovie_detail">Preview</div>
                        </div>
                        :''}
                    </div> */}

                </section>) 
    };

}