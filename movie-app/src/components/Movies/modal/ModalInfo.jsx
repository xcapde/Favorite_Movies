import { useState } from 'react'
import'./modal_info.css'
export function ModalInfo(props) {
    const[modalIsActive, setModalIsActive] = useState(props.modalIsActive);
    const[modalMassage] = useState(props.modalMassage)
    const[modalType] = useState(props.modalType)

    const closeModal=()=>{
        setModalIsActive(!modalIsActive)
        // props.stopModal();
    }

    return(
            <div className={modalIsActive?'modal_info_context':'hide_modal'}>
                <div className={modalType==='favModal'?'favModal':modalType==='redModal'?'redModal':modalType==='greenModal'?'greenModal':'modal_info_box'}>
                    <div className="modal_content">
                        <h1 className='modal_info_message'>{modalMassage}</h1>
                        <button onClick={()=>closeModal()} className={modalType==='optionsModal'?'close_info_modal':'close_info_modal hidden'}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className={modalType==='optionsModal'?'modal_buttons':'modal_buttons hidden'}>
                        <button className='cancel_button'><i className="fa-solid fa-xmark"></i></button>
                        <button className='ok_button'><i className="fa-solid fa-check"></i></button>
                    </div>
                </div>
            </div>
    )
}