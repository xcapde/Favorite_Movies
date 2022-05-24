import { Component } from "react";
import { movieServices } from "../../../services_APIs/movieServices";
import { MovieCard } from "../card/MovieCard";
import { Form } from "../form/Form";
import '../llista/main.css';
import '../llista/mobile.css';

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
    componentDidMount(){
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
        this.setState({
            createIsActive:true,
            editIsActive:false,
        });
        this.resetFormInputs_Add();

        if((this.state.formIsActive===true)&&(this.state.createIsActive===true)){
            this.showForm();
            this.setState({createIsActive:false});
        };
        if(this.state.formIsActive===false){
            this.showForm();
        };
    };

    editMovie = (movie) => {
        this.setState({createIsActive:false})
        if(this.state.formIsActive===false){
        this.setState({
            formIsActive:true,
            editIsActive:true,
            movieToEdit:movie,
        });
        }
        if((this.state.formIsActive===true)&&(movie.id===this.state.movieToEdit.id)) {
            this.setState({
                movieToEdit:{},
                editIsActive:false,
                formIsActive:false,
            })
        }
        if((this.state.formIsActive===true)&&(movie.id!==this.state.movieToEdit.id)) {
            this.setState({
                movieToEdit:movie,
            })
        }

        // OPCIÓ 1 SENSE API SERVER
        // let selectedMovie = this.state.movies.filter(movie => movie.id === id);

        // let selectedIndex = this.state.movies.findIndex(movie => movie.id === id);
        // this.setState({indexToEdit:selectedIndex})
    };

    updateOneMovie = (id, updatedMovieData) => {
        movieServices.putMovie(id, updatedMovieData).then((res) => {
            // movieServices.putMovie(parseInt(id), data).then(res => { --> per passar la ID d'String a Número, no cal.
            // es pot posar data, movie, updatedMovie.. és indiferent.
            // console.log(res)
            // si ens torna una resposta (if(res)) llavors ens torna totes les pelis, no cal però ok.
            if(res) this.getData();
        });
    };

    addMovie = (newMovieData) =>  {
        movieServices.postMovie(newMovieData).then(res => {
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

        //parseInt(id) per passar el string de la id a número però no cal..
        movieServices.deleteAMovie(parseInt(id)).then(res => {
            if(res)this.getData();
            alert(`❌${res.title} removed`)
        });
        // OPCIÓ SENSE SERVER API
        // let movieToDelete = this.state.movies.filter(movie => movie.id === id);
        // let selectedMovies = this.state.movies.filter(movie => movie.id !== id);

        // this.setState({movies: selectedMovies});
    };

    showForm = () => {
        //funció toggle - switch obrir tancar
        // OPCIÓ 1
        // if(this.state.formIsActive) this.setState({formIsActive:false})
        // else this.setState({formIsActive:true});
        
        // OPCIÓ 2: REDUIDA
        this.setState({formIsActive:!this.state.formIsActive});
    };

    switchList = () => {
        // if.. bla bla bla..
        let favList = this.state.movies.filter(movie => movie.formIsActive === true);
        console.log(favList)
        // this.setState({movies:favList})
    };

    render() {
        return (<section className="the_list">

                    {this.state.formIsActive?
                        <Form addMovie={this.addMovie} movieToEdit={this.state.movieToEdit} 
                        editIsActive={this.state.editIsActive} movies={this.state.movies} showForm={this.showForm} 
                        indexToEdit={this.state.indexToEdit} createIsActive={this.state.createIsActive} 
                        createMovie={this.createMovie} key={this.state.movieToEdit.id} updateOneMovie={this.updateOneMovie} />
                        :''
                    }
                    
                    <div className="movies_list">   
                        {this.state.movies.map((movie,key) => (
                            <MovieCard key={key} movie={movie} deleteMovie={this.deleteMovie} editMovie={this.editMovie} />
                        )).reverse()}   
                    </div>
                    
                    {this.state.createIsActive?
                        <button onClick={this.createMovie} type="button" name="stopCreate" className="button_open_form_opened"><i className="fa-solid fa-xmark"></i></button>
                        : <button onClick={this.createMovie} type="button" name="startCreate" className="button_open_form_closed"><i className="fa-solid fa-plus"></i></button>
                    }

                    <button onClick={()=> this.switchList()} type="button" name="changeList" className="button_switchList"><i className="fa-solid fa-star"></i></button>

                </section>)
    };
}