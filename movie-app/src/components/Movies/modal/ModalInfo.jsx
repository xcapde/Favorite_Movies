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
                    <h1 className='modal_info_message'>{modalMassage}</h1>
                    {/* <h1 className={modalType==="alert"?'alert_modal'{modalType:"delete"?'delete_modal'}>{modalMassage}Visca els modaaaaaaals!👻</h1> */}
                    <button onClick={()=>closeModal()} className='close_info_modal'><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>
    )
}