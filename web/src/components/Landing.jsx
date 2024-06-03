import Footer from "./Footer"
import Header from "./Header"
import HeroLanding from "./HeroLanding"
import ebook from '../images/ebook-example.jpg';
import { Link } from "react-router-dom";
import FakeCard from "./FakeCard";
import '../styles/Landing.scss';
import fakeData from "../services/fakeData.json";

const Landing = ({allProjects, data, cardURL}) => {


  const fakeProjects = fakeData;
  // const landingCards = allProjects.map((project, i)=> <li key={i}><Card/></li>)
  const landingCards = fakeProjects.map((project, i)=> <FakeCard key={i} data={project} className="section_mockup-card"/>)
  

  return (
    <>
    <HeroLanding/>
    <section className="section_mockup">
      {landingCards}
      {/* <FakeCard data={data} cardURL={cardURL} className="section_mockup-card"/>
      <FakeCard data={data} cardURL={cardURL} className="section_mockup-card"/>
      <FakeCard data={data} cardURL={cardURL} className="section_mockup-card"/>
      <FakeCard data={data} cardURL={cardURL} className="section_mockup-card"/> */}
    </section>
    </>
  )
}

export default Landing;