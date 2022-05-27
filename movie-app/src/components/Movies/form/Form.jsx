import '../form/movieForm.css';
import { Preview } from "./preview/Preview";
import { useState } from 'react';

//és equivalent a començar dins del Render de les class.
//pots especificar props ({movie, deleteMovie})
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
            alert(`ℹ️ Title is required!`);
            return;
        }
        if((editIsActive === true)&&(newMovie === movieToEdit)){
            alert(`ℹ️ ${newMovie.title} details have not changed`) 
        }
        if ((editIsActive === true)&&(newMovie !== movieToEdit)){
            updateMovie();
            alert(`✅ ${movieToEdit.title} has been updated!`) 
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

        return (<section className="form_and_preview">

                    <button onClick={resetFormInputs} className="resetForm_button">&times;</button>                
                    <form onSubmit={handleSubmit} className="input_form">
                            
                            <input onChange ={onInputChange} value={newMovie.title} type="text" name="title" className="title_input" placeholder="Title"/>
                            <input onChange ={onInputChange} value={newMovie.year} type="text" name='year' className="year_input" placeholder="Year"/>
                            <input onChange ={onInputChange} value={newMovie.imgURL} type="text" name='imgURL' className="imgURL_input" placeholder="Image URL"/>
                            <input onChange ={onInputChange} value={newMovie.genres} type="text" name='genres' className="genres_input" placeholder="Genres"/>
                            
                            {editIsActive?
                            <button type="submit" name='updateButton' className="update_button">Update</button>
                            : <button type="submit" name='addButton' className="create_button">Create</button>}
                    </form>

                        <div className="previewZone">
                            <Preview newMovie={newMovie} />
                        </div>
                    
                </section>) 
}