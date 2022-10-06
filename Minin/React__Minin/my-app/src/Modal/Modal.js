import React, {useState} from "react"
import '../styles/App.css'


const Modal = () => {
    const [modal, setmodal] = useState(false)

    return(
        <div>
            <button onClick={() => setmodal(true)}>Open modal</button>

            {modal ? <div className="modal">
                <div className="modal-body">
                    <h1>Modal title</h1>
                    <p>I am awesome modal</p>
                    <button onClick={() => setmodal(false)}>Close modal</button>
                </div>
            </div>
                : null
            }
            
        </div>
    )
}











export default Modal