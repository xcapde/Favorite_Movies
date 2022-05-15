import { Component } from "react";

export class Preview extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    };

    render() {
        return(<div className="preview">
                            {/*NOMÉS CAL CANVIAR SRC PEL URL DEL NOU STATE*/}
                            <img src={this.state.newImg} alt=""/>
                            <div className="preview_detail">Preview</div>
                            </div>)
    };
}