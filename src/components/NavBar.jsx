import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function NavBar({setForm, setDisplay, setShow, setWhich, setButton, setSocial, setUser, style, setStyle}) {

  function homePage(){
      setWhich(false);
      setShow(false);
      setDisplay(false);
      setSocial(false);
      setForm(false);
      setUser(false);
      setButton(true);
      setStyle(false);
  }

  function showForm(){
    setForm(true);
    setDisplay(false);
  }

  function showUser(){
    setUser(true);
    setButton(false);
    setStyle(!style)
    

  }

  return (
  <div>
    <nav className={`navbar navbar-expand-lg navbar-dark ${style ? 'navbarConditional': null}`}>
    <Container>
    <a className="navbar-brand" href="#" onClick={homePage}><img className='logo' src='https://i.postimg.cc/YSKBwxSd/logo.png'/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
        <h3 className='navHeader' style={{}}>quote with <br /> innablink</h3>
          {/*addin the tabindex allows you to add focus selector to images*/}
          <a className="nav-link" onClick={showForm} href="#HOME"><img className='quotes' src='https://i.postimg.cc/sQpQHWyG/quote.png' tabindex="0"/></a>
        </li>
        <li className="nav-item">
          <h3 className='navHeader' style={{'paddingTop': '0px'}}>Customer<br/> Login</h3>
          <a className="nav-link" onClick={showUser} style={{'marginTop': '12px'}} href="#skills"><img className='quotes' src='https://i.postimg.cc/yY07L1sY/customerlogin.png'/></a>
        </li>
    
      </ul>
      
    </div>  
    </Container>
  </nav>
      </div>
  )
}

export default NavBar