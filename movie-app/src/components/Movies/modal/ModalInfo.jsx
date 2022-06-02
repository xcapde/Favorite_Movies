import { useState } from 'react'
import'./modal_info.css'
export function ModalInfo(props) {
    const[modalIsActive, setModalIsActive] = useState(props.modalIsActive);
    const[modalMassage] = useState(props.modalMassage)
    const[modalType] = useState(props.modalType)
    const [modalID] = useState(props.modalID);


    const closeModal=()=>{
        setModalIsActive(!modalIsActive)
        props.stopModal();
    }


    return(
            <div className={modalIsActive?'modal_info_context':'hide_modal'}>
                <div className={modalType==='yellowModal'?'yellowModal':modalType==='redModal'?'redModal':modalType==='greenModal'?'greenModal':modalType==='askModal'?'askModal':'defaultModal'}>
                    <div className="modal_content">
                        <h1 className='modal_info_message'>{modalMassage}</h1>
                        <button onClick={()=>closeModal()} className={modalType==='askModal'?'close_info_modal hidden':'close_info_modal'}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className={modalType==='askModal'?'modal_buttons':'modal_buttons hidden'}>
                        <button onClick={()=>closeModal()} className='cancel_button'><i className="fa-solid fa-xmark"></i></button>
                        <button onClick={()=>props.deleteMovie(modalID)} className='ok_button'><i className="fa-solid fa-check"></i></button>
                    </div>
                </div>
            </div>
    )
}