import "../styles/FakeCard.scss";
import "../styles/Card.scss";
import Profile from "./Profile";
import avatar from'../images/avatar.webp';
import { useState, useRef } from "react";
import Web from '../images/icons/globe-solid.svg'
import Git from '../images/icons/github.svg'
import { Link } from "react-router-dom";

const FakeCard = ({data}) => {

    const {idProject, name, slogan, technologies, repo, demo, descr, autor, job, image, photo} = data

    // const urldemo = demo.includes('http://' || 'https://') ? demo : `https://${demo}`;
    // const urlrepo = repo.includes('http://' || 'https://') ? repo : `https://${repo}`;

    const Popup = ({handleClose}) =>{
      const modalRef = useRef(null);

      const closeWithAnimation = () => {
        if (modalRef.current){
          modalRef.current.classList.add("closing");
          setTimeout(()=>{
            modalRef.current.classList.remove("closing");
            handleClose();
          }, 300);
        }
      };
      return (
        <div ref={modalRef} className="graphpop">
          <div className="popup">
            <button onClick={closeWithAnimation} className="popup__button-close"><i className="fa-solid fa-xmark"></i></button>
            <img src={image} alt="" className="popup__img"/>
            <h3 className="popup__name">{name}</h3>
            <p className="popup__slogan">{slogan}</p>
            <div className="popup__links">
              <a className="popup__links-linkweb" href={demo} title="Click to see project's demo" target="_blank">
                <img src={Web} alt="" />
              </a>
              <a className="popup__links-linkrepo" href={repo} title="Click to see project's code" target="_blank">
                <img src={Git} alt="" />
              </a>
            </div>
            <a className="popup__button-see" href={`http://localhost:3001/project/${idProject}`}>See project</a>
            {/* <Link className="popup__button-see" to='/projectdetail'>See project</Link> */}
          </div>
        </div>
      );
    };

    const [visible, setVisible] = useState(false);

    const showPopup = () =>{
      setVisible(true)
    }

    const closePopup = () =>{
      setVisible(false)
    }

  return (
    <div onClick={showPopup} className="fakecard">
      {visible && <Popup handleClose={closePopup}/>}
      <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text"></span></h2>

          <div className="card__author">
            <Profile scssClass="card__authorPhoto" avatar={photo} defaultImg={avatar}/>
            <p className="card__job">
              {job || "Full stack Developer"}
            </p>
            <h3 className="card__name--author">{autor || "Emmelie Bjôrklund"}</h3>
          </div>
      
          <div className="card__project">            
            <h3 className="card__name">{name || "Elegant Workspace"}</h3>
            <p className="card__slogan">{slogan || "Diseños Exclusivos"}</p>
            {/* <h3 className="card__descriptionTitle">Product Description</h3> */}
            <p className="card__description">{descr || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{technologies || "React JS - HTML - CSS"}</p>
          
            </div>
          </div>
    </article>
    </div>
  )
}

export default FakeCard