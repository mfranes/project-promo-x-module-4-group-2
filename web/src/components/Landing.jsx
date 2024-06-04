import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero";
import ebook from '../images/ebook-example.jpg';
import { Link } from "react-router-dom";
import FakeCard from "./FakeCard";
import '../styles/Landing.scss';
// import fakeData from "../services/fakeData.json";

const Landing = ({allProjects, data, cardURL}) => {


  // const fakeProjects = fakeData;
  // const landingCards = allProjects.map((project, i)=> <li key={i}><Card/></li>)
  const landingCards = allProjects.map((project, i)=> <FakeCard key={i} data={project}/>)
  

  return (
    <>
    <Hero text="New Project" link="/createproject"/>
    <section className="section_mockup">
      {landingCards}
    </section>
    </>
  )
}

export default Landing;