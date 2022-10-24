import {React, useState, useEffect} from 'react';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Form from './components/Forms/Form';
import UserLogin from './components/Forms/UserLogin';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [card, setCard] = useState([]);
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(false);
  const [which, setWhich] = useState(false)
  const [form, setForm] = useState(false);
  const [button, setButton] = useState(true)
  const [social, setSocial] = useState(false);
  const [style, setStyle] = useState(false)
  const [user, setUser] = useState(false)
  const [api, setApi] = useState('http://localhost:3004/which')

  // switch(card.id){
  //   case (1):
  //     setCount('1')
  //     break;
  // }

  useEffect(() =>{
    fetchAPI()
  }, [fetchAPI()])
  //delete the setApi above to see some magic
//" http://localhost:3003/btn"

 

  function fetchAPI(){
    const API = api
    fetch(API)
    .then( response => {
      return response.json();
    })
    .then(
      (apI) => {
        setCard(apI);
    }
    )
    .catch(
      err => {
        console.log("ERROR CAUGHT: resolve");
      }
    )
  }



  return (
    <div className={`${style ? 'scroll': null}`}>
      <Navbar 
        setForm={setForm}
        setUser={setUser}
        setDisplay={setDisplay}
        setShow={setShow}
        setSocial={setSocial}
        setWhich={setWhich}
        setButton={setButton}
        setStyle={setStyle}
        style={style}
      />
      <Header 
        card = {card}
        display = {display}
        button = {button}
        setDisplay = {setDisplay}
        setApi = {setApi}
        api = {api}
        show = {show}
        setShow = {setShow}
        setWhich = {setWhich}
        setForm={setForm}
        setSocial={setSocial}

      />
      <Form 
        form={form}
      />
      <UserLogin 
        user={user}
      />
    <Footer 
      social={social}
      setSocial={setSocial}
    />
    </div>
  )
}

export default App