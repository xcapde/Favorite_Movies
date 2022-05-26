import '../preview/preview.css';

export function Preview (props){

    const newMovie = props.newMovie;

    return  (
            <div className="previewMovie">
                    <img src={newMovie.imgURL} alt="Preview"/>
                    <div className="previewMovie_detail">Preview</div>
            </div>                
            )
}