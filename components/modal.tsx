
type ModalProps = {
    id: string
    // isOpen: boolean;
    // onClose: () => void;
    // children: React.ReactNode;
};

interface ModalProp {
    modalDetails: ModalProps
}

const Modal: React.FC<ModalProp> = ({ modalDetails }): JSX.Element => {

    const { id } = modalDetails
    return (
        <div>
        {/* {isOpen && (
            <div>
            <div>
                {children}
            </div>
            <button onClick={onClose}>Close</button>
            </div>
        )} */}
        <h1>This is the Modal<div
            aria-label="modal"
            className="fixed inset-0 z-50 flex items-center justify-center invisible bg-black opacity-0 bg-opacity-10"
        >
            <h1>{id}</h1>
            <div className="relative w-full max-w-lg p-10 bg-black rounded-lg">
                <div className="absolute cursor-pointer top-5 right-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div>
                    
                </div>
            </div>
        </div></h1>
        </div>
    );
    }
    export default Modal;