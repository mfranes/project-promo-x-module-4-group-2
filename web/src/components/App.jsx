import {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router';
// components
import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Landing from './Landing';
import DetailProject from './DetailProject';
import SignUp from './SignUp';
// services
import ls from '../services/localStorage';
import apiUser from "../services/api-user";
import router from "../services/router";


// import getData from '../services/getData';
//basta yaa

function App() {

  const localStorageData = ls.get('data', {
    name: '',
    slogan: '',
    technologies: '',
    idProject: '',
    repo: '',
    demo: '',
    desc: '',
    autor: '',
    job: '',
    image: '',
    photo: ''
});

  const [data, setData] = useState(localStorageData);
  const [allProjects, setAllProjects] = useState([]);
  const [state, setState] = useState(false);
  // state: user
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // state: login
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  // state: sign up
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");

 


  
 //fetch data for landing
  useEffect(()=>{
    fetch('//localhost:3001/getprojects')
        .then(response => response.json())
        .then(info => {
            setAllProjects(info.data);
            console.log(info.data);
            resetData();
        })
  }, [state]);

  useEffect(() => {
      // Guardamos data en el local storage
      ls.set('data', data);
  }, [data]);

  const updateAvatar = (id, avatar) => {
      setData({...data, [id]: avatar});
  };
  
  const getInput = (id, value)=>{
      setData({...data, [id]: value});
  }

  function resetData(){
    setData({
      name: '',
      idProject: '',
      slogan: '',
      technologies: '',
      repo: '',
      demo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: ''
  });
  }

  const deleteItem = async (id) => {
    const response = await fetch(`http://localhost:3001/delete/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      setState((prevState) => !prevState)
    } else {
      alert('Error deleting item');
    }
  };

  const getSignUp = (data) => {
    // Limpiamos el error antes de enviar los datos al API
    setSignUpErrorMessage("");
    // Enviamos los datos al API
    apiUser.sendSignUpToApi(data).then((response) => {
      console.log('response', response);
      if (response.success === true) {
        setUserId(response.userId);
        // Si la usuaria introduce bien sus datos redireccionamos desde la página de signup al inicio de la página
        router.redirect("/");
      } else {
        // Si la usuaria introduce mal sus datos guardamos el error que nos devuelve el API para que se pinte en la página
        setSignUpErrorMessage(response.message);
      }
    });
  };



  return (
    <div className="container container.dark">
      <Header/>
      <Routes>
        
        <Route path="/signup" element={<SignUp    signUpErrorMessage={signUpErrorMessage}
        getSignUp={getSignUp}/>}/>

        <Route path='/' element={<Landing allProjects={allProjects} data={data} deleteItem={deleteItem}/>}/>

        <Route path='/createproject' element={<Main getInput={getInput} updateAvatar={updateAvatar} data={data} resetData={resetData}/>}/>

        <Route path='/projectdetail' element={<DetailProject data={data}/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;