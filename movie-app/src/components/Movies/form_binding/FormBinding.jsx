import { Component } from "react";

//IDEAL PER FER UPDATES VEIENT EL RESULTAT A L'INSTANT!
export class FormBinding extends Component {

    state = {
        seePreview:false,
        newMovie:{
            title:'',
            year:'',
            imgURL:'',
            genres:'',
        },
    };

    keyPress = (key, e) => { 
        if (key === "Enter") {
          e.target.addButton.click();
        }
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
        this.showPreview();
        //ES FA EL ... PERQUÈ MANTINGUI TOTA LA INFORMACIÓ DELS ALTRES CAMPS I NO SE SOBREESCRIGUIN.
    };

    showPreview = () => {
        if(this.state.newMovie.imgURL.length >= 0) this.setState({seePreview:true})
        else this.setState({seePreview:false});
        // console.log(this.state.seePreview);
        // console.log(this.state.newMovie.imgURL.length)
    };

    render (){
        // OPCIÓ 2 SHOW&HIDE FORM: FORMBINDING RENDER CLASS &{} + 2 CLASSES CSS FORM + MOVIELIST RENDER COMENTAT
        // return (<section className={`form_and_preview ${this.props.formIsActive?'form_active':'form_inactive'}`}>
        
        // OPCIÓ 1 SHOW&HIDE FORM AMB CLASS NORMAL.
        return (<section className="form_and_preview">

                    <form onSubmit={this.handleSubmit} className="input_form">
                            <input onChange ={this.onInputChange} value={this.state.newMovie.title} type="text" name="title" className="title_input" placeholder="Title"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.year} type="text" name='year' className="year_input" placeholder="Year"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.imgURL} type="text" name='imgURL' className="imgURL_input" placeholder="Cover image URL"/>
                            <input onChange ={this.onInputChange} value={this.state.newMovie.genres} type="text" name='genres' className="genres_input" placeholder="Genres"/>
                            <button type="submit" name='addButton' className="create_button">Create</button>
                            {/* <button type="submit" name='updateButton' className="updateForm_button">Update</button> */}
                    </form>

                    {/* <div className="previewMovie">
                                <img src={this.state.newMovie.imgURL} alt=""/>
                                <div className="previewMovie_detail">Preview</div>
                    </div> */}

                    {/* SHOW&HIDE PREVIEW */}
                    <div className="previewZone">
                        {this.state.seePreview?
                        <div className="previewMovie">
                            <img src={this.state.newMovie.imgURL} alt=""/>
                                    <div className="previewMovie_detail">Preview</div>
                        </div>
                        :''}
                    </div>

                </section>) 
    };

}