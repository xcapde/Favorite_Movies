import'./modal_options.css'
export function ModalOptions() {

    return(
            <div className='modal_op_context'>
                <div className='modal_op_box'>
                    <h1 className='modal_op_message'>Choose an option!</h1>
                    <div className='modal_opp_buttons'>
                        <button className='cancel_button'><i className="fa-solid fa-xmark"></i></button>
                        <button className='ok_button'><i className="fa-solid fa-check"></i></button>
                    </div>                    
                </div>
            </div>
    )
}