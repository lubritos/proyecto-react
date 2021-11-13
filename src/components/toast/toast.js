import { useEffect, useState } from "react"

const Toast = ({mostrarToast = false, mensaje, fondo}) => {
    const [show, setShow] = useState(mostrarToast);
        const handlerShow=()=>{
            setShow(!show);
        }

    useEffect(()=>{
        setShow(mostrarToast);
    }, [mostrarToast]);
    return (
            <div className={`toast ${show ? 'show': ''} position-absolute bottom-0 end-0 text-center fs-4 text-capitalize my-5 mx-3 ${fondo}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body text-white">
                    {mensaje}
                    </div>
                    <button 
                        type="button"
                        className="btn-close me-2 m-auto"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                        onClick={handlerShow}>
                    </button>
                </div>
            </div>
    )

}

export default Toast