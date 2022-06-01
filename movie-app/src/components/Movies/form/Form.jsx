// import '../form/movieForm.css'; ( + canviar class formBackground per .form_and_preview i eliminar el div)
import '../form/modalForm/formModal.css';
import { Preview } from "./preview/Preview";
import { useState } from 'react';

//és equivalent a començar dins del Render de les class.
//pots especificar props desconstruïdes ({ movie, deleteMovie }) i no s'ha d'anar posant props.X
export function Form (props) {

    //Hooks. const[state,setState]=initalState
    const[newMovie, setNewMovie] = useState(props.movieToEdit);
    // eslint-disable-next-line
    const[movieToEdit, setMovieToEdit] = useState(props.movieToEdit);
    // eslint-disable-next-line
    const[editIsActive, setEditIsActive] = useState(props.editIsActive);
    
    const updateMovie = () => {
        let movie = newMovie;
        let id = movie.id;

        props.updateOneMovie(id,movie);
    }

    const resetFormInputs = () => {
        setNewMovie({title:'', year:'', imgURL:'',genres:''});
    };
        
    const handleSubmit = (e) => {
        e.preventDefault();

        if ((editIsActive === false)&&(newMovie.title.length > 0)){
            props.addMovie(newMovie);
        }
        if ((editIsActive === false)&&(newMovie.title.length === 0)){
            // alert(`ℹ️ Title is required!`);
            props.runModal();
            props.setModalMassage(`ℹ️ Title is required!`)
            props.setModalType('defaultModal')
            return;
        }
        if((editIsActive === true)&&(newMovie === movieToEdit)){
            // alert(`ℹ️ ${newMovie.title} details have not changed`)
            props.runModal();
            props.setModalMassage(`ℹ️ ${newMovie.title} details have not changed`)
            props.setModalType('defaultModal') 
        }
        if ((editIsActive === true)&&(newMovie !== movieToEdit)){
            updateMovie();
            // alert(`✅ ${movieToEdit.title} has been updated!`)
            props.runModal();
            props.setModalMassage(`✅ ${movieToEdit.title} has been updated!`)
            props.setModalType('greenModal')
 
        }

        resetFormInputs();
        props.showForm();
    };

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // const value = e.target.value.toLowerCase();
        setNewMovie({...newMovie, [name]:value});
        //... per mantenir tota la info dels altres camps del formulari.
    };

    return (<section className="formBackground">
        <div className='form_and_preview'>

                {/* <button onClick={resetFormInputs} className="resetForm_button">&times;</button> >> canviat per form modal*/}
                <button onClick={resetFormInputs} className="clear_button">Clear</button>
                <button onClick={props.showForm} className="close_form"><i className="fa-solid fa-xmark"></i></button>
                {/* close_form creat pel formulari modal */}
                <form onSubmit={handleSubmit} className="input_form">
                        
                        <input autoFocus onChange ={onInputChange} value={newMovie.title} type="text" name="title" className="title_input" placeholder="Title"/>
                        <input onChange ={onInputChange} value={newMovie.year} type="number" name='year' className="year_input" placeholder="Year"/>
                        <input onChange ={onInputChange} value={newMovie.imgURL} type="url" name='imgURL' className="imgURL_input" placeholder="Image URL"/>
                        <input onChange ={onInputChange} value={newMovie.genres} type="text" name='genres' className="genres_input" placeholder="Genres"/>
                        
                        {editIsActive?
                        <button type="submit" name='updateButton' className="update_button">Update</button>
                        : <button type="submit" name='addButton' className="create_button">Create</button>}
                </form>

                    <div className="previewZone">
                        <Preview newMovie={newMovie} />
                    </div>
                </div>
            </section>) 
}