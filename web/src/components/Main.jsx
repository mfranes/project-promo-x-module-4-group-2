import Hero from './Hero';
import Preview from './Preview';
import Form from './Form';




const Main = ({getInput, updateAvatar, data, resetData, setData}) => {
  return (
    <>
    <Hero text="See projects" link="/"/>
    <main className="main">
      <Preview data={data}/>
      <Form getInput={getInput} updateAvatar={updateAvatar} data={data} resetData={resetData}/>
    </main>
    </>
  )
}

export default Main