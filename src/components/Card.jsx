import "../styles/Card.scss";
import Profile from "./Profile";
import avatar from'../images/avatar.webp';

const Card = ({props}) => {

    const {name, slogan, technologies, repo, demo, desc, autor, job, image, photo} = props

    const urldemo = demo.includes('http://' || 'https://') ? demo : `https://${demo}`;
    const urlrepo = repo.includes('http://' || 'https://') ? repo : `https://${repo}`;

  return (
    <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Proyecto Personal</span></h2>

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
            <h3 className="card__descriptionTitle">Descripción del Producto</h3>
            <p className="card__description">{desc || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{technologies || "React JS - HTML - CSS"}</p>
          
              <a className="icon icon__www" href={urldemo} title="Haz click para ver el proyecto online" target="_blank">
                Web link
              </a>
              <a className="icon icon__github" href={urlrepo} title="Haz click para ver el código del proyecto" target="_blank">
                GitHub link
              </a>
            </div>
          </div>
    </article>
  )
}

export default Card