import { Component } from "react";
import '../preview/preview.css';


export class Preview extends Component{
    constructor(props){
        super(props);
        this.state = {
            seePreview:this.props.seePreview,
            newMovie:this.props.newMovie,
        }
    };

    render(){
        return  (
                <div className="previewMovie">
                    <img src={this.props.newMovie.imgURL} alt=""/>
                    <div className="previewMovie_detail">Preview</div>
                </div>
                )
        };
}