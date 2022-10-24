import React from 'react';
import Card from './Card'

function Header({card, button, display, setDisplay, setApi, show, setShow, setWhich, setForm, setSocial}) {

  const displayImage = (bolean1, bolean2) => {
    setShow(bolean1);
    setWhich(bolean2);
    setForm(false);
    setSocial(false)
  }

  const displayCard = (api) => {
    setDisplay(true);
    switch(api){
      case 'http://localhost:3004/how':
        setApi(api);
        break;
      case 'http://localhost:3004/what':
        setApi(api);
        break;
      case 'http://localhost:3004/when':
        setApi(api);
        break;
      case 'http://localhost:3004/where':
        setApi(api);
        break;
      case 'http://localhost:3004/who':
        setApi(api);
        break;
      case 'http://localhost:3004/why':
        setApi(api);
        break;    
    }
  }


  return (
    <div className='Header'>
      {button ? <div className='buttons'>
      <button className='button' onClick={displayCard}><img className='btn-images' alt='imageGood' src={'https://i.postimg.cc/KvhqBmHr/whichcrop.pngy'}/></button>
      <button className='button' onClick={() => { displayCard('http://localhost:3004/what'); displayImage(false)}}><img className='btn-images' alt='imageGood' src='https://i.postimg.cc/18295JmM/whatcrop.png'/></button>
      <button className='button' onClick={() => { displayCard('http://localhost:3004/when'); displayImage(false)}}><img className='btn-images' alt='imageGood' src='https://i.postimg.cc/H8YmPNzW/whencrop.png'/></button>
      <button className='button' onClick={() => { displayCard('http://localhost:3004/where'); displayImage(false)}}><img className='btn-images' alt='imageGood' src='https://i.postimg.cc/kDq74VCr/wherecrop.png'/></button>
      <button className='button' onClick={() => { displayCard('http://localhost:3004/how'); displayImage(true)}}><img className='btn-images' alt='imageGood' src='https://i.postimg.cc/Hc4HzmQP/howcrop.png'/></button>
      <button className='button' onClick={() => { displayCard('http://localhost:3004/who'); displayImage(false)}}><img className='btn-images' alt='imageGood' src='https://i.postimg.cc/WFPT0zJk/whocrop.png'/></button>
      <button className='button' onClick={() => { displayCard('http://localhost:3004/why'); displayImage(false)}}><img className='btn-images' alt='imageGood' src='https://i.postimg.cc/cK3dKw6W/whycrop.png'/></button>
      </div>: null}
      <Card
          card={card}
          display = {display}
          setDisplay = {setDisplay}
          show = {show}
          setShow = {setShow}
        />
      
    </div>
  )
}

    {/* <button onClick={() => { setApi('http://localhost:3004/how')}}></button>
      <button onClick={() => { setApi('http://localhost:3004/what')}}></button>
      <button onClick={() => { setApi('http://localhost:3004/when')}}></button> */}

export default Header