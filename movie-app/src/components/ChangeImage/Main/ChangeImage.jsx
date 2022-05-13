import { Component } from "react";
// import { Preview } from "../Preview/Preview";

export class ChangeImage extends Component {
    state = {
        imgInit:"https://images.unsplash.com/photo-1611068813580-b07ef920964b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        // OPCIÓ 2 - ONCHANGE + ONCLICK --> newImg a més a més per fer l'opció 2
        newImg:"",
    };

    // OPCIÓ 1 - HANDLER SUBMIT
    // onSubmitHandle = (e) => {
    //     e.preventDefault();
    //     let newImageURL = {imgInit:e.target.img.value,}
    //     console.log(e.target.img.value)

    //     this.setState({imgInit:e.target.img.value})
    // };
    // OPCIÓ 1 - HANDLER SUBMIT


    // OPCIÓ 2 - ONCHANGE + ONCLICK
    onChangeIMG = (e) => {
        this.setState({newImg:e.target.value})
        console.log(this.state.newImg)
        // e.target.value =("");
    };

    changeImg = () => {
        this.setState({imgInit:this.state.newImg})
    };

    // OPCIÓ 2 - ONCHANGE + ONCLICK

    render (){
        return (
            <section>

                {/* OPCIÓ 1 - HANDLER SUBMIT */}
                {/* <form onSubmit={this.onSubmitHandle}>
                    <img src={this.state.imgInit} alt="background image"/>
                    <div className="input_zone">
                        <input type="text" name="img" className="input" value={this.state.imgInit.value} placeholder="Image URL"/>
                        <button type="submit">CHANGE</button>
                    </div>
                </form> */}


                {/* OPCIÓ 2 - ONCHANGE + ONCLICK */}
                {/* <form>
                    <img src={this.state.imgInit} alt=""/>
                    <div className="input_zone">
                        <input type="text" className="input" onChange={this.onChangeIMG} placeholder="Image URL"/>
                        <button type="button" onClick={this.changeImg}>CHANGE</button>
                    </div>
                </form> */}


                {/* OPCIÓ 3 - OP2 + PREVIEW */}
                <form> 
                    <img src={this.state.imgInit} alt=""/>
                        {/* <Preview onChangeIMG = {this.onChangeIMG}/> */}
                        <div className="preview">
                            {/*NOMÉS CAL CANVIAR SRC PEL URL DEL NOU STATE*/}
                            <img src={this.state.newImg} alt=""/>
                            <div className="preview_detail">Preview</div>
                        </div>
                    <div className="input_zone">
                        <input type="text" className="input" onChange={this.onChangeIMG} placeholder="Image URL"/>
                        <button type="button" onClick={this.changeImg}>CHANGE</button>
                    </div>
                </form>

            </section>
        )
    }
}