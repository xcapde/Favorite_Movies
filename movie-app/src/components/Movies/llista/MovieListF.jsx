import { Component, useState } from "react";
import { movieServices } from "../../../services_APIs/movieServices";
// import { MovieCard } from "../card/MovieCard";
import { Card } from "../card_functional_hooks/Card";
import { Form } from "../form/Form";
import '../llista/main.css';
import '../llista/mobile.css';

export function MovieListF() {
    const[movies, setMovies] = useState([{
        title: "A",
        imgURL: "URL",
        id: 1,
    }])

    //      state = {
    //         formIsActive:false,
    //         editIsActive:false,
    //         createIsActive:false,
    //         favoriteListIsActive:false,
    //         movieToEdit:{}, 
    //         indexToEdit:'',
    //         movies:[],

    // FUNCIÓ EXTERNA QUE GUARDA LA FUNCIÓ DE GET DATA DEL SERVER 
    // PER UTILITZAR A ALTRES FUNCIONS, COM A DELETE.
   
    getData = () => {
        movieServices.getAllMovies().then(res => {
             setState({movies:res});
        })
    };

    // QUAN ES RENDERITZA LA PÀGINA, TAMBÉ CARREGA LES MOVIES DES DE L'API
    componentDidMount(){
         getData();

        // movieServices.getAllMovies EQUIVAL A LA PROMESA D'AXIOS (movies) A JS, QUE NO ESTÀ RESOLTA ENCARA,
        // SEGUIM POSANT UN ".THEN" PER QUAN COMPLEIXI LA PROMESA,
        // QUAN HAGI RESOLT -> CANVIÏ L'ESTAT AMB UN  setState

        // COMENTAT PERQUÈ HO FAREM DES DEL SERVIDOR --> SERVICES --> movieServices.js
        //  setState({
        //     movies:movieServices.getAllMovies()
        // });        
    };

    resetFormInputs_Add = () => {
         setState({movieToEdit:{title:'', year:'', imgURL:'',genres:''}})
    };

    createMovie = () => {
        //  setState({
        //     createIsActive:true,
        //     editIsActive:false,
        // });
        //  resetFormInputs_Add();

        // if(( state.formIsActive===true)&&( state.createIsActive===true)){
        //      showForm();
        //      setState({createIsActive:false});
        // };
        // if( state.formIsActive===false){
        //      showForm();
        // };
    };

    editMovie = (movie) => {
        //  setState({createIsActive:false})
        
        // if( state.formIsActive===false){
        //  setState({
        //     formIsActive:true,
        //     editIsActive:true,
        //     movieToEdit:movie,
        // });
        // }
        // if(( state.formIsActive===true)&&(movie.id=== state.movieToEdit.id)) {
        //      setState({
        //         movieToEdit:{},
        //         editIsActive:false,
        //         formIsActive:false,
        //     })
        // }
        // if(( state.formIsActive===true)&&(movie.id!== state.movieToEdit.id)) {
        //      setState({
        //         movieToEdit:movie,
        //     })
        // }
        // if(( state.formIsActive===true)&&( state.createIsActive===true)){
        //      setState({
        //         editIsActive:true,
        //     })
        // }

        // OPCIÓ 1 SENSE API SERVER
        // let selectedMovie =  state.movies.filter(movie => movie.id === id);

        // let selectedIndex =  state.movies.findIndex(movie => movie.id === id);
        //  setState({indexToEdit:selectedIndex})
    };

    updateOneMovie = (id, updatedMovieData) => {
        movieServices.putMovie(id, updatedMovieData).then((res) => {
            // movieServices.putMovie(parseInt(id), data).then(res => { --> per passar la ID d'String a Número, no cal.
            // es pot posar data, movie, updatedMovie.. és indiferent.
            // console.log(res)
            // si ens torna una resposta (if(res)) llavors ens torna totes les pelis, no cal però ok.
            if(res)  getData();
        });
    };

    addMovie = (newMovieData) =>  {
        movieServices.postMovie(newMovieData).then(res => {
             setState({createIsActive:false});
             getData();
            alert(`✅${res.title} added!`)
        });

        // OPCIÓ 2 UUID - SENSE API SERVER
        // data.id = createUUID();
        //  setState({movies:[data,... state.movies]});
        //  setState({createIsActive:false});
        
        // OPCIÓ 1 INDEX+1 - NO API
        // let lastIndex =  state.movies[ state.movies.length-1].id;
        // let newIndex = lastIndex+1;
        // let newMovie = {id:newIndex,...data};
        //  setState({movies:[newMovie,... state.movies]});
    };

    deleteMovie = (id) => {

        let deleteConfirmation = window.confirm(`❌ Remove from the list?`);
        if(!deleteConfirmation) return; 
        // CLÀUSULA DE SALVAGUARDA

        //parseInt(id) per passar el string de la id a número però no cal..
        movieServices.deleteAMovie(parseInt(id)).then(res => {
            if(res) getData();
            alert(`❌${res.title} removed`)
        });
        // OPCIÓ SENSE SERVER API
        // let movieToDelete =  state.movies.filter(movie => movie.id === id);
        // let selectedMovies =  state.movies.filter(movie => movie.id !== id);

        //  setState({movies: selectedMovies});
    };

    showForm = () => {
        //funció toggle - switch obrir tancar
        // OPCIÓ 1
        // if( state.formIsActive)  setState({formIsActive:false})
        // else  setState({formIsActive:true});
        
        // OPCIÓ 2: REDUIDA
         setState({formIsActive:! state.formIsActive});
    };

    markFavorite = (movie) => {
        // Declarem variable perquè no es pot modificar un atribut.
        let data = movie;

        if(data.movieIsFav===false) data.movieIsFav=true 
        else data.movieIsFav=false;
        
        movieServices.putMovie(data.id,data).then( res => {
            if(res)  getData();
        });
    }
    // switchList = () => {
    //      setState({favoriteListIsActive:! state.favoriteListIsActive});
        
    //     let favList =  state.movies.filter(movie => movie.id<50);
    //     console.log(favList)
    //     let allMovies= state.movies;
    
    //     if( state.favoriteListIsActive===true){
    //      setState({movies:favList});
    //     }else{
    //      setState({movies:allMovies})
    //     }
    // };

        return (<section className="the_list">

                    { state.formIsActive?
                        <Form addMovie={ addMovie} movieToEdit={ state.movieToEdit} 
                        editIsActive={ state.editIsActive} movies={ state.movies} showForm={ showForm} 
                        indexToEdit={ state.indexToEdit} createIsActive={ state.createIsActive} 
                        createMovie={ createMovie} key={ state.movieToEdit.id} updateOneMovie={ updateOneMovie}/>
                        :''
                    }

                    <div className="movies_list">   
                        { state.movies.map((movie,key) => (
                            <Card key={key} movie={movie} deleteMovie={ deleteMovie} editMovie={ editMovie} markFavorite={ markFavorite}/>
                        )).reverse()}   
                    </div>
                    
                    { state.createIsActive?
                        <button onClick={ createMovie} type="button" name="stopCreate" className="button_open_form_opened"><i className="fa-solid fa-xmark"></i></button>
                        : <button onClick={ createMovie} type="button" name="startCreate" className="button_open_form_closed"><i className="fa-solid fa-plus"></i></button>
                    }

                    {/* <button onClick={()=>  switchList()} type="button" name="changeList" className={ state.favoriteListIsActive? "button_switchList fav_actived":"button_switchList"}><i className="fa-solid fa-star"></i></button> */}

                </section>)
}