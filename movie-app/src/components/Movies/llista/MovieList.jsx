import { Component } from "react";
import { movieServices } from "../../../services_APIs/movieServices";
// import { createUUID } from "../../../utilities/createUuid";
import { MovieCard } from "../card/MovieCard";
import { FormBinding } from "../form/FormBinding";

// IGUALAR ELS PROPS QUE CANVIO QUAN CLICO EDITMOVIE --> IGUALAR A STATE (SETSTATE) PERQUÈ MOSTRI LA INFO DE LA CARD CORRECTE
export class MovieList extends Component{
    constructor(){ 
        super();

        this.state = {
            formIsActive:false,
            editIsActive:false,
            createIsActive:false,
            movieToEdit:{}, 
            indexToEdit:'',
            movies:[],
        }
    };

    // FUNCIÓ EXTERNA QUE GUARDA LA FUNCIÓ DE GET DATA DEL SERVER 
    // PER UTILITZAR A ALTRES FUNCIONS, COM A DELETE.
    getData = () => {
        movieServices.getAllMovies().then(res => {
            this.setState({movies:res});
        })
    };

    // QUAN ES RENDERITZA LA PÀGINA, TAMBÉ CARREGA LES MOVIES DES DE L'API
    componentDidMount() {
        this.getData();

        // movieServices.getAllMovies EQUIVAL A LA PROMESA D'AXIOS (movies) A JS, QUE NO ESTÀ RESOLTA ENCARA,
        // SEGUIM POSANT UN ".THEN" PER QUAN COMPLEIXI LA PROMESA,
        // QUAN HAGI RESOLT -> CANVIÏ L'ESTAT AMB UN this.setState

        // COMENTAT PERQUÈ HO FAREM DES DEL SERVIDOR --> SERVICES --> movieServices.js
        // this.setState({
        //     movies:movieServices.getAllMovies()
        // });        
    };

    resetFormInputs_Add = () => {
        this.setState({movieToEdit:{title:'', year:'', imgURL:'',genres:''}})
    };

    createMovie = () => {
        this.setState({createIsActive:!this.state.createIsActive});
        this.setState({editIsActive:false});
        this.showForm();
        this.resetFormInputs_Add();
    };

    editMovie = (data) => {
        this.setState({formIsActive:true});
        this.setState({editIsActive:true});
        this.setState({createIsActive:false});
        
        this.setState({movieToEdit:data});

        // OPCIÓ 1 SENSE API SERVER
        // let selectedMovie = this.state.movies.filter(movie => movie.id === id);

        // let selectedIndex = this.state.movies.findIndex(movie => movie.id === id);
        // this.setState({indexToEdit:selectedIndex})
    };

    updateOneMovie = (id,data) => {
        movieServices.putAMovie(id, data).then(res => {
            // movieServices.putAMovie(parseInt(id), data).then(res => { --> per passar la ID d'String a Número, no cal.
            // console.log(res)
            this.getData();
        });
    };

    addMovie = (data) =>  {

        movieServices.postAMovie(data).then(res => {
            this.setState({createIsActive:false});
            this.getData();
            alert(`✅${res.title} added!`)
        });

        // OPCIÓ 2 UUID - SENSE API SERVER
        // data.id = createUUID();
        // this.setState({movies:[data,...this.state.movies]});
        // this.setState({createIsActive:false});
        
        // OPCIÓ 1 INDEX+1 - NO API
        // let lastIndex = this.state.movies[this.state.movies.length-1].id;
        // let newIndex = lastIndex+1;
        // let newMovie = {id:newIndex,...data};
        // this.setState({movies:[newMovie,...this.state.movies]});
    };

    deleteMovie = (id) => {

        let deleteConfirmation = window.confirm(`❌ Remove from the list?`);
        if(!deleteConfirmation) return; 
        // CLÀUSULA DE SALVAGUARDA

        movieServices.deleteAMovie(id).then(res => {
            this.getData();
            alert(`❌${res.title} deleted`)
        });
        // OPCIÓ SENSE SERVER API
        // let movieToDelete = this.state.movies.filter(movie => movie.id === id);
        // let selectedMovies = this.state.movies.filter(movie => movie.id !== id);

        // this.setState({movies: selectedMovies});
    };

    showForm = () => {
        // OPCIÓ 1
        // if(this.state.formIsActive) this.setState({formIsActive:false})
        // else this.setState({formIsActive:true});
        
        // OPCIÓ 2: REDUIDA
        this.setState({formIsActive:!this.state.formIsActive});
    };

    render() {
        return (<section className="the_list">

                    {this.state.formIsActive?
                        <FormBinding addMovie={this.addMovie} movieToEdit={this.state.movieToEdit} 
                        editIsActive={this.state.editIsActive} movies={this.state.movies} showForm={this.showForm} 
                        indexToEdit={this.state.indexToEdit} createIsActive={this.state.createIsActive} createMovie={this.createMovie} 
                        key={this.state.movieToEdit.id} updateOneMovie={this.updateOneMovie} />
                        :''
                    }
                    
                    <div className="movies_list">   
                        {this.state.movies.map((movie,key) => (
                            <MovieCard key={key} movie={movie} deleteMovie={this.deleteMovie} editMovie={this.editMovie} />
                        )).reverse()}   
                    </div>
                    
                    {this.state.formIsActive?
                        <button onClick={this.createMovie} type="button" name="openForm" className="button_open_form_opened"><i className="fa-solid fa-xmark"></i></button>
                        : <button onClick={this.createMovie} type="button" name="openForm" className="button_open_form_closed"><i className="fa-solid fa-plus"></i></button>
                    }

                </section>)
    };
}