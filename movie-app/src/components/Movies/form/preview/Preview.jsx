// import '../preview/preview.css';
import'../preview/previewModal.css';

export function Preview (props){

    const newMovie = props.newMovie;

    return  (
            <div className="previewMovie">
                    <img src={newMovie.imgURL} alt=""/>
                    <div className="previewMovie_detail">Preview</div>
            </div>                
            )
}