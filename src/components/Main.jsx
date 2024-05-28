import Hero from './Hero';
import Preview from './Preview';
import Form from './Form';
import "../styles/Main.scss";




const Main = ({getInput, updateAvatar, data, addNewProject, resetData, setData}) => {
  return (
    <>
    <Hero/>
    <main className="main">
      <Preview data={data}/>
      <Form getInput={getInput} updateAvatar={updateAvatar} data={data} addNewProject={addNewProject} resetData={resetData}/>
    </main>
    </>
  )
}

export default Main