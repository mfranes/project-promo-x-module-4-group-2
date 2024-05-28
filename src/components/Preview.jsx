import Card from "./Card";
import "../styles/Preview.scss";
import Profile from "./Profile";
import ebook from '../images/ebook-example.jpg';

const Preview = ({data}) => {

   
  return (
    <section className="preview">
        <Profile avatar={data.image} scssClass="projectImage" defaultImg={ebook}/>
        {/* <div className="projectImage" style={`background-image: {data.image}`}></div> */}
        <Card props={data}/>
    </section>
  )
}

export default Preview