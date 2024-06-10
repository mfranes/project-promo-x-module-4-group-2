import postData from "../services/postData";
import "../styles/Form.scss";
import Button from "./Button";
import GetAvatar from "./GetAvatar";
import PropTypes from "prop-types";
import { useState } from 'react';
import ls from '../services/localStorage';
import { Link } from "react-router-dom";

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
      setErrorMsg({...errorMsg, [id]: 'Please fill in this field'})
    } else {
      setErrorMsg({...errorMsg, [id]: ''})
    }

    if (id === 'repo' || id === 'demo') {
      if (!urlPattern.test(inputValue)) {
        setErrorMsg({...errorMsg, [id]: 'Please enter a valid URL'});
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



    const handleReset = (ev) =>{
      ev.preventDefault();
      props.resetData();
    }

  return (
    <form className="addForm">
        <h2 className="title">Information</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Tell us about your project</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Project name" onChange={handleChange} maxLength='25' value={props.data.name} required/>
          <p className={errorMsg.name ? 'error-msg' : 'hidden'}>{errorMsg.name}</p>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChange} maxLength='30'value={props.data.slogan} required/>
          <p className={errorMsg.slogan ? 'error-msg' : 'hidden'}>{errorMsg.slogan}</p>

          <div className="addForm__2col">
            <div className="addForm__url">
              <input className="addForm__input-url" type="url" name="repo" id="repo" placeholder="Repository" onChange={handleChange} value={props.data.repo} required/>
              <p className={errorMsg.repo ? 'error-msg' : 'hidden'}>{errorMsg.repo}</p>
            </div>
            <div className="addForm__url">
              <input className="addForm__input-url" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChange} value={props.data.demo} required/>
              <p className={errorMsg.demo ? 'error-msg' : 'hidden'}>{errorMsg.demo}</p>
            </div>
          </div>

          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Technologies" onChange={handleChange} maxLength='30' value={props.data.technologies} required/>
          <p className={errorMsg.technologies ? 'error-msg' : 'hidden'}>{errorMsg.technologies}</p>
          <textarea className="addForm__input textarea" type="text" name="desc" id="desc" placeholder="Description" rows="5" onChange={handleChange}value={props.data.desc}></textarea>
          <p className={errorMsg.desc ? 'error-msg' : 'hidden'}>{errorMsg.desc}</p>
        </fieldset>
    
        <fieldset className="addForm__group">
          <legend className="addForm__title">Tell us about the author</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Name" onChange={handleChange} value={props.data.autor} required/>
          <p className={errorMsg.autor ? 'error-msg' : 'hidden'}>{errorMsg.autor}</p>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Position" onChange={handleChange} value={props.data.job} required/>
          <p className={errorMsg.job ? 'error-msg' : 'hidden'}>{errorMsg.job}</p>
        </fieldset>
    
        <fieldset className="addForm__group--upload">
          <legend className="addForm__title">Upload your images</legend>
          <div className="group_buttons">
            <div className="group_buttons-btn">
              <i className="fa-solid fa-image group_buttons-btn--icon"></i>
              <GetAvatar id="image" text="Upload project image" updateAvatar={props.updateAvatar}/>
            </div>
            <div className="group_buttons-btn">
              <i className="fa-solid fa-image group_buttons-btn--icon"></i>
              <GetAvatar id="photo" text="Upload a profile photo" updateAvatar={props.updateAvatar}/>
            </div>
          </div>
          <div className="group_save_reset">
            <Button data={props.data} resetData={props.resetData} setCardURL={setCardURL}/>
            <button className="btn_rst" onClick={handleReset}><i className="fa-solid fa-trash-can group_save_reset-icon"></i></button>
          </div>
        </fieldset>
        <div className="cardURL">
          {/* {cardURL ? <Link to='/projectdetail'>View your Project <i className="fa-solid fa-square-arrow-up-right linkProject_icon"></i></Link> : <p className="errorFillForm"></p>} */}
          {cardURL ? <a href={cardURL}>View your Project <i className="fa-solid fa-square-arrow-up-right linkProject_icon"></i></a> : <p className="errorFillForm"></p>}
                  {/* Cuando Validemos añadir: Make sure you've filled all the fields */}
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