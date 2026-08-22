import { useEffect, useRef } from "react"
import type { ModalProps } from "../../types";

/**
 * Modal Component
 * ---------------
 * A reusable modal built using the native <dialog> element.
 *
 * Props:
 * @param {boolean} isOpen - Controls whether the modal is open or closed.
 * @param {() => void} onClose - Callback executed when the modal is closed.
 * @param {React.ReactNode} children - The content displayed inside the modal.
 *
 * Component Interaction:
 * - The `App` component controls the modal state (`isModalOpen`).
 * - When `isOpen` becomes true, the modal opens using `showModal()`.
 * - The modal displays whatever content `App` passes as `children`,
 *   typically the selected user's editable fields.
 * - When the user closes the modal, `onClose` updates `isModalOpen` in `App`.
 *
 * Note:
 * Because <dialog> does not always re-render its internal content when open,
 * `App` uses `key={selectedUser?.id}` to force the modal to refresh when a
 * different user is selected.
 */
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
                    <div className="aura aura-gold">
                        <button className="btn"
                                onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    )
}