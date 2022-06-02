import { useState, useEffect } from "react";
import { movieServices } from "../../../services_APIs/movieServices";
import { Card } from "../card/Card";
import { Form } from "../form/Form";
import { Slider } from "../slider/Slider";
import { ModalInfo } from "../modal/ModalInfo";
import { Spinner4 } from "../spinner/Spinner4";
import '../llista/main.css';
import '../llista/mobile.css';

export function MovieList() {
    const [formIsActive, setFormIsActive] = useState(false);
    const [editIsActive, setEditIsActive] = useState(false);
    const [createIsActive, setCreateIsActive] = useState(false);
    const [movies, setMovies] = useState([]);
    const [movieToEdit, setMovieToEdit] = useState({});
    const [indexToEdit] = useState('');
    const [favList, setFavList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsActive, setModalIsActive] = useState(false);
    const [modalMassage, setModalMassage] = useState();
    const [modalType, setModalType] = useState();
    const [modalID, setModalID] = useState();

    useEffect(() => {
        getData();
        showPreviousFavList();
    },[]
    );

    const getData = () => {
        setLoading(true)
        movieServices.getAllMovies().then(res => {
             setMovies(res);
             setLoading(false)
        })
    };

    const resetFormInputs_Add = () => {
         setMovieToEdit({title:'', year:'', imgURL:'',genres:''})
    };

    const createMovie = () => {
         setCreateIsActive(true);
         setEditIsActive(false);
        
         resetFormInputs_Add();

        if(( formIsActive===true)&&( createIsActive===true)){
             showForm();
             setCreateIsActive(false);
        };
        if( formIsActive===false){
             showForm();
        };
    };

    const editMovie = (movie) => {
         setCreateIsActive(false)
        
        if(formIsActive === false){
            setFormIsActive(true);
            setEditIsActive(true);
            setMovieToEdit(movie);
        }
        if((formIsActive === true) && (movie.id === movieToEdit.id)) {
             setMovieToEdit({});
             setEditIsActive(false);
             setFormIsActive(false); 
        }
        if((formIsActive === true) && (movie.id!== movieToEdit.id)) {
             setMovieToEdit(movie);
        }
        if((formIsActive === true) && (createIsActive === true)){
             setEditIsActive(true);
        }

        // OPCIÓ 1 SENSE API SERVER
        // let selectedMovie =  state.movies.filter(movie => movie.id === id);

        // let selectedIndex =  state.movies.findIndex(movie => movie.id === id);
        //  setState({indexToEdit:selectedIndex})
    };

    const updateOneMovie = (id, updatedMovieData) => {
        movieServices.putMovie(id, updatedMovieData).then((res) => {
            // movieServices.putMovie(parseInt(id), data).then(res => { --> per passar la ID d'String a Número, no cal.
            // si ens torna una resposta (if(res)) llavors ens torna totes les pelis, no cal però ok.
            if(res)  getData();
        });
    };

    const addMovie = (newMovieData) =>  {
        movieServices.postMovie(newMovieData).then(res => {
             setCreateIsActive(false);
             getData();

            runModal();
            setModalMassage(`✅${res.title} added!`)
            setModalType('greenModal')

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

    const deleteMovie = (id) => {
        stopModal();

        // let deleteConfirmation = window.confirm(`Remove from the list?`);
        // if(!deleteConfirmation) return; 
        // CLÀUSULA DE SALVAGUARDA

        //parseInt(id) per passar el string de la id a número però no cal..
        movieServices.deleteAMovie(parseInt(id)).then(res => {
            if(res) getData();
            runModal();
            setModalMassage(`❌ ${res.title} removed`)
            setModalType('redModal')
        });

        // OPCIÓ SENSE SERVER API
        // let movieToDelete =  state.movies.filter(movie => movie.id === id);
        // let selectedMovies =  state.movies.filter(movie => movie.id !== id);

        //  setState({movies: selectedMovies});
    };

    const showForm = () => {
        setFormIsActive(!formIsActive);
    };

    const markFavorite = (movie) => {
        // Declarem variable perquè no es pot modificar un atribut.
        let data = movie;

        if(data.movieIsFav === false) data.movieIsFav = true 
        else data.movieIsFav = false;
        
        movieServices.putMovie(data.id,data).then( res => {
            if(res) getData();
        });

        addToSlide(data);
    };

    const addToSlide = (movie) => {
        let data = movie;

        if(data.movieIsFav === true){
            favList.push(data);

            runModal();
            setModalMassage(`✅ ${data.title} added to favorites!`)
            setModalType('yellowModal')

        } else { 
            let favIndex = favList.findIndex(movie => movie.id === data.id)
            favList.splice(favIndex,1);
            
            runModal();
            setModalMassage(`❌ ${data.title} removed from favorites!`)
            setModalType('yellowModal')
        };
        
        showPreviousFavList();
    };

    const showPreviousFavList = () => {

        movieServices.getFavMovies().then(res => {
            setFavList(res);
        })

    };

    const runModal=()=>{
        setModalIsActive(true)
        setTimeout(stopModal, 2000);

        // const timeOut = setTimeout(stopModal, 2000);
        // if(modalType !=='askModal'){
        // clearTimeout(timeOut);}
    }

    const runAskModal=(id)=>{
        setModalIsActive(true)
        setModalID(id)
        setModalType('askModal')
        setModalMassage(`❌ Remove from the list?`)
    }

    const stopModal=()=>{
        setModalIsActive(false)
    }

        return (<section className="the_list">

                        {modalIsActive?
                            <ModalInfo modalIsActive={modalIsActive} stopModal={stopModal} 
                            modalMassage={modalMassage} modalType={modalType} deleteMovie={deleteMovie} modalID={modalID}/>
                            : null}

                        {loading?
                            <Spinner4/>
                            : null}
                    
                        { formIsActive?
                            <Form addMovie={addMovie} movieToEdit={movieToEdit} 
                            editIsActive={editIsActive} movies={movies} showForm={showForm} 
                            indexToEdit={indexToEdit} createIsActive={createIsActive} 
                            createMovie={createMovie} key={movieToEdit.id} updateOneMovie={updateOneMovie}
                            runModal={runModal} stopModal={stopModal} setModalMassage={setModalMassage} 
                            deleteMovie={deleteMovie} setModalType={setModalType}/>
                            :''
                        }

                        <div className="movies_list">
                            <>{favList.length === 0?
                                null :
                                <Slider favList={favList}/>}
                            </>   
                            
                            {movies.map((movie,key) => (
                                <Card key={key} movie={movie} deleteMovie={deleteMovie} editMovie={editMovie} markFavorite={markFavorite} runAskModal={runAskModal} />
                            )).reverse()}   
                        </div>
                        
                        {createIsActive && formIsActive?
                            <button onClick = {createMovie} type="button" name="stopCreate" className="button_open_form_opened"><i className="fa-solid fa-xmark"></i></button>
                            : <button onClick = {createMovie} type="button" name="startCreate" className="button_open_form_closed"><i className="fa-solid fa-plus"></i></button>
                        }

                </section>)
}