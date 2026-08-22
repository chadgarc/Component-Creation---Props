import { useEffect, useRef } from "react"
import type { ModalProps } from "../../types";

export const Modal = ({
    isOpen,
    onClose,
    children}: ModalProps) => {
        const modalRef = useRef<HTMLDialogElement>(null);
        
    useEffect(() => {
        if(isOpen){
            modalRef.current?.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [isOpen]);

    return (
        <dialog ref={modalRef}
                className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                {/* Everything that I want to add to the content of the modal */}
                {children}
                
                <div className="flex justify-end gap-4">
                    <button className="btn"
                            onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    )
}