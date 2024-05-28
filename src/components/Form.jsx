import postData from "../services/postData";
import "../styles/Form.scss";
import Button from "./Button";
import GetAvatar from "./GetAvatar";
import PropTypes from "prop-types";
import { useState } from 'react';
import ls from '../services/localStorage';

const Form = (props) => {
  const [cardURL, setCardURL] = useState("")
  const [errorMsg, setErrorMsg] = useState({
    name: '',
    slogan: '',
    technologies: '',
    repo: '',
    demo: '',
    desc: '',
    autor: '',
    job: '',
  });


  const validateInput = (id, inputValue) => {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9._-]*)*\/?$/;

    if (inputValue === '') {
      setErrorMsg({...errorMsg, [id]: 'Por favor rellene este campo'})
    } else {
      setErrorMsg({...errorMsg, [id]: ''})
    }

    if (id === 'repo' || id === 'demo') {
      if (!urlPattern.test(inputValue)) {
        setErrorMsg({...errorMsg, [id]: 'Por favor introduce una url válida'});
      } else {
        setErrorMsg('');
      }
    }
  };

  

  const handleChange =(ev)=>{
    const id = ev.target.id;
    const value = ev.target.value;
    validateInput(id, value);
    props.getInput(id, value);
    setCardURL("");
  }

  

  

  const postData = (data) => {

    return fetch('https://dev.adalab.es/api/projectCard', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(dataResponse => {
            console.log(dataResponse);
            if(dataResponse.success){
                console.log(dataResponse.cardURL)
                setCardURL(<a href={dataResponse.cardURL} target="_blank" className="linkProject">Entra aquí para ver tu proyecto</a>)
                // ls.set('data', data);
                props.addNewProject();
                props.resetData();
                
             }
             else {
                setCardURL("Asegúrate de haber rellenado todos los campos")
             }
    
        })
    }

  


  return (
    <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleChange} maxLength='25' value={props.data.name} required/>
          <p className={errorMsg.name ? 'error-msg' : 'hidden'}>{errorMsg.name}</p>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChange} maxLength='30'value={props.data.slogan} required/>
          <p className={errorMsg.slogan ? 'error-msg' : 'hidden'}>{errorMsg.slogan}</p>

          <div className="addForm__2col">
            <div className="addForm__url">
              <input className="addForm__input-url" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChange} value={props.data.repo} required/>
              <p className={errorMsg.repo ? 'error-msg' : 'hidden'}>{errorMsg.repo}</p>
            </div>
            <div className="addForm__url">
              <input className="addForm__input-url" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChange} value={props.data.demo} required/>
              <p className={errorMsg.demo ? 'error-msg' : 'hidden'}>{errorMsg.demo}</p>
            </div>
          </div>

          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChange} maxLength='30' value={props.data.technologies} required/>
          <p className={errorMsg.technologies ? 'error-msg' : 'hidden'}>{errorMsg.technologies}</p>
          <textarea className="addForm__input textarea" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChange}value={props.data.desc}></textarea>
          <p className={errorMsg.desc ? 'error-msg' : 'hidden'}>{errorMsg.desc}</p>
        </fieldset>
    
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChange} value={props.data.autor} required/>
          <p className={errorMsg.autor ? 'error-msg' : 'hidden'}>{errorMsg.autor}</p>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChange} value={props.data.job} required/>
          <p className={errorMsg.job ? 'error-msg' : 'hidden'}>{errorMsg.job}</p>
        </fieldset>
    
        <fieldset className="addForm__group--upload">
          <GetAvatar id="image" text="Subir foto del proyecto" updateAvatar={props.updateAvatar}/>

          <GetAvatar id="photo" text="Subir foto de la autora" updateAvatar={props.updateAvatar}/>

          <Button data={props.data} postData={postData} addNewProject={props.addNewProject}/>
        </fieldset>
        <div className="cardURL">
          {cardURL}
        </div>
      </form>
  )
}

Form.propTypes = {
  getInput: PropTypes.func,
  data: PropTypes.object,
  updateAvatar: PropTypes.func,
  addNewProject: PropTypes.func,
  resetData: PropTypes.func
};

export default Form