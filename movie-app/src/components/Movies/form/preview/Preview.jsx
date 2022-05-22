import { Component } from "react";

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
                <div className={this.props.seePreview? "previewMovie_hidden":"previewMovie"}>
                    <img src={this.props.newMovie.imgURL} alt=""/>
                    <div className="previewMovie_detail">Preview</div>
                </div>
                )
    };
}