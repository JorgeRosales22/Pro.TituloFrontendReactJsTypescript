import { ReactNode } from "react"

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

const Modal = ({isOpen,onClose,children}:ModalProps) =>{
    if (!isOpen) return null
     
    return(
        <div className="modal" 
        style={{display: isOpen ? "block" : "none"}}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Modal;