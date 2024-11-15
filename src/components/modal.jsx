


function Modal() {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button>X</button>
                <div className="title"><h1>Are you want to continue?</h1></div>
                <div className="body">Th next page in awesome!</div>
                <div className="footer">
                    <button>Cancel</button>
                  
                </div>
            </div>
        </div>
    )
}

export default Modal;