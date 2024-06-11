import React, { useState } from 'react'

function AlertWindow() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };    

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    };

  return (
    <>
       <div className='modal'>
        <div className='overlay' onClick={toggleModal}>
            <div className='modal-content'>
                <h3>Wait!</h3>
                <p>This will permanently delete the project from the database - are you sure you want to do that?</p>
                <button onClick={() => deleteItem(idProject)}>Yes. Delete forever.</button>
                <button className='close-modal' onClick={toggleModal}>Bad idea, let's not delete.</button>
            </div>
        </div>
       </div>
    </>
  )
}

export default AlertWindow