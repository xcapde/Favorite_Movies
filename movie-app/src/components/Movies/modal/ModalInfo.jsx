import'./modal_info.css'
export function ModalInfo() {

    return(
            <div className='modal_info_context'>
                <div className='modal_info_box'>
                    <h1 className='modal_info_message'>Info message</h1>
                    <button className='close_info_modal'><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>
    )
}