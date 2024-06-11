import React, { useState } from 'react'

function AlertWindow() {

   //modal delete
   const [modal, setModal] = useState(false);
   const toggleModal = () => {
       setModal(!modal);
   };    
   if(modal) {
       document.body.classList.add('active-modal')
   } else {
       document.body.classList.remove('active-modal')
   }

  return (
    <>
      <button className="cardWrapper__deletebutton" onClick={toggleModal}>
        <i className="fa-solid fa-trash-can"></i>
      </button>

      {modal && (
        <div className='modal'>
        <div className='overlay' onClick={toggleModal}>
            <div className='modal-content'>
                <h3 className="alert-title">Wait!</h3>
                <p>This will permanently delete the project <span className="project-title-name">{name}</span> by <span className="project-title-name">{autor}</span>  from the database - are you sure you want to do that? <span className="dont-delete">PLEASE DON'T DELETE</span></p>
                <div className="buttons">
                  <button className='btn-modal' onClick={() => deleteItem(idProject)}>Yes. Delete forever.</button>
                  <button className='btn-modal' onClick={toggleModal}>Bad idea, let's not delete.</button>
                </div>
            </div>
        </div>
       </div>
      )}
    </>
  )
}

export default AlertWindow