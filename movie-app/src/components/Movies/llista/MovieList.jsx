import { Component } from "react";
import { movieServices } from "../../../services_APIs/movieServices";
import { createUUID } from "../../../utilities/createUuid";
import { MovieCard } from "../card/MovieCard";
import { FormBinding } from "../form_binding/FormBinding";
// import { MovieForm } from "../form/MovieForm"; /*ESTÀ COMENTAT PER FER EL BIND DEL FORM A SOBRE*/

// INCLOURE BOTÓ EDITAR A LES CARDS I PREVIEW DE LA IMATGE EN EL FORM
    // QUAN CLIC, S'OMPLE EN EL FORM AMB LES DADES I LA IMATGE EN LA PREVIEW
    // QUAN MODIFIQUEM URL DE LA IMATGE CANVIA LA PREVIEW EN L'INSTANT
    // TAMBÉ MODIFICAR ALTRES CAMPS
    // QUAN OK --> ES GUARDA A L'ESTAT DE LA CARD --> STATE UPDATE

export class MovieList extends Component{
    constructor(){ 
        super();

        this.state = {
            formIsActive:false,
            editIsActive:false,           
            movieToEdit:{}, 
            movies:[],
        }
    };

    // AL CARREGAR LA PÀGINA TAMBÉ CARREGA LES MOVIES DE L'API
    componentDidMount() {
        this.setState({movies:movieServices.getAllMovies()})
    };

    addMovie = (data) =>  {
        // OPCIÓ 1
        // let lastIndex = this.state.movies[this.state.movies.length-1].id;
        // let newIndex = lastIndex+1;
        // let newMovie = {id:newIndex,...data};
        // this.setState({movies:[newMovie,...this.state.movies]});

        // OPCIÓ 2
        data.id = createUUID();
        this.setState({movies:[data,...this.state.movies]});
        // TANCAR FORMULARI AUTO QUAN PELI AFEGIDA
        // this.setState({formIsActive:false});
    };

    deleteMovie = (id) => {

        let movieToDelete = this.state.movies.filter(movie => movie.id === id);
        let deleteConfirmation = window.confirm(`Remove ${movieToDelete[0].title} from the list?`);
        if(!deleteConfirmation) return; 
        // CLÀUSULA DE SALVAGUARDA

        let selectedMovies = this.state.movies.filter(movie => movie.id !== id);

        this.setState({movies: selectedMovies});
    };

    showForm = () => {
        // OPCIÓ 1
        // if(this.state.formIsActive) this.setState({formIsActive:false})
        // else this.setState({formIsActive:true});
        
        // OPCIÓ 2: REDUIDA
        this.setState({formIsActive:!this.state.formIsActive});
    };
    
    movieToEdit = (id) => {
        this.setState({formIsActive:true});


        let pickedMovie = this.state.movies.filter(movie => movie.id === id);
        this.setState({movieToEdit:pickedMovie[0]});

        console.log(this.state.movieToEdit);
    };

    render() {
        return (<section className="the_list">

                    {/* OPCIÓ 2 SHOW&HIDE FORM: FORMBINDING RENDER CLASS &{} + 2 CLASSES CSS FORM + MOVIELIST RENDER COMENTAT */}
                    {/* <FormBinding addMovie={this.addMovie} updateMovie={this.updateMovie} formIsActive={this.state.formIsActive} /> */}
                    {this.state.formIsActive?
                    <FormBinding addMovie={this.addMovie} movieToEdit={this.state.movieToEdit} editIsActive={this.state.editIsActive} />
                    :''
                    }
                    
                    <div className="movies_list">   
                        {this.state.movies.map((movie,key) => (
                            <MovieCard key={key} movie={movie} deleteMovie={this.deleteMovie} movieToEdit={this.movieToEdit} />
                        ))}   
                    </div>
                    
                    {this.state.formIsActive?
                    <button onClick={this.showForm} type="button" name="openForm" className="button_open_form_opened"><i className="fa-solid fa-xmark"></i></button>
                    : <button onClick={this.showForm} type="button" name="openForm" className="button_open_form_closed"><i className="fa-solid fa-plus"></i></button>
                    }

                </section>)
    };
}