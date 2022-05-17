import { Component } from "react";

//IDEAL PER FER UPDATES VEIENT EL RESULTAT A L'INSTANT!
export class FormBinding extends Component {
    constructor(props){
        super(props);

    this.state = {
        seePreview:false,
        editIsActive:this.props.editIsActive,
        newMovie:this.props.movieToEdit,
    };
    }
    
    keyPress = (key, e) => { 
        if (key === "Enter") {
          e.target.addButton.click();
        }
    };

    movieUpdate = () =>{
  
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
        console.log(e.target.name)

        const value = e.target.value;
        console.log(value)
        
        this.setState({newMovie: {...this.state.newMovie, [name]:value}});
        //ES POSA EL ... PERQUÈ MANTINGUI TOTA LA INFORMACIÓ DELS ALTRES CAMPS I NO SE SOBREESCRIGUIN.

        this.showPreview();
    };

    // NO OK - DESACTIVAT
    showPreview = () => {
        //No funciona bé, la llargada de l'input comença a 1 i segueix en 0, 1 ,2.. --> desactivat en el RENDER
        if(this.state.newMovie!==0) this.setState({seePreview:true})
        else this.setState({seePreview:false});

        console.log(this.state.seePreview);
        console.log(this.state.newMovie.length);
    };

    render (){              
        return (<section className="form_and_preview">

                    <form onSubmit={this.handleSubmit} className="input_form">
                            <input onChange ={this.onInputChange} value={this.state.newMovie.title} type="text" name="title" className="title_input" placeholder="Title"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.year} type="text" name='year' className="year_input" placeholder="Year"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.imgURL} type="text" name='imgURL' className="imgURL_input" placeholder="Cover image URL"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.genres} type="text" name='genres' className="genres_input" placeholder="Genres"/>
                            
                            {this.state.editIsActive?
                            <button type="submit" name='updateButton' className="update_button">Update</button>
                            : <button type="submit" name='addButton' className="create_button">Create</button>
                            }
                    </form>

                    {/* OPCIÓ 1 - PREVIEW */}
                    <div className="previewMovie">
                                <img src={this.state.newMovie.imgURL} alt=""/>
                                <div className="previewMovie_detail">Preview</div>
                    </div>

                    {/* OPCIÓ 2 - PREVIEW - ALTERNATIVE DOESN'T WORK WELL*/}
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