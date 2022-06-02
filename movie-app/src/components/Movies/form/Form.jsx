import '../form/modalForm/formModal.css';
import { Preview } from "./preview/Preview";
import { useState } from 'react';

//Especificar props desconstruïdes ({ movie, deleteMovie }) i no s'ha d'anar posant props.X

export function Form (props) {

    const[newMovie, setNewMovie] = useState(props.movieToEdit);
    const[movieToEdit] = useState(props.movieToEdit);
    const[editIsActive] = useState(props.editIsActive);
    
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

            props.runModal();
            props.setModalMassage(`ℹ️ Title is required!`)
            props.setModalType('defaultModal')
            return;
        }
        if((editIsActive === true)&&(newMovie === movieToEdit)){

            props.runModal();
            props.setModalMassage(`ℹ️ ${newMovie.title} details have not changed`)
            props.setModalType('defaultModal') 
        }
        if ((editIsActive === true)&&(newMovie !== movieToEdit)){
            updateMovie();

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

                <button onClick={resetFormInputs} className="clear_button">Clear</button>
                <button onClick={props.showForm} className="close_form"><i className="fa-solid fa-xmark"></i></button>
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