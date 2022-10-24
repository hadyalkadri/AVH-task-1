import React from 'react'

function Card({card, display, setDisplay, show, setShow}) {

  // const condition = 'http://localhost:3004/who';
  // if (condition === api) {
  //   return setShow(true);
  // }

  var customStyle = {
    display: 'none',
    border: '0px'
  }
  //use this as a style so that when the condition below is not met. nothing shows
  let imgURL1 = '';
  const array = card.map((image) => {
    if (image.list3){
      imgURL1 = 'https://i.postimg.cc/0Kbr8dP1/innablink-website-icons-03.png'
      customStyle = {
        width: '60px',
        height: '40px',
        margin: 0,
        padding: 0,
        verticalAlign: 'middle'
      }
    }
})

let imgURL2 = '';
const array1 = card.map((image) => {
  if (image.list4){
    imgURL2 = 'https://i.postimg.cc/Bt6jcsD7/innablink-website-icons-04.png'
    customStyle = {
      width: '60px',
      height: '40px',
      margin: 0,
      padding: 0,
      verticalAlign: 'middle'
    }
  }
})

let imgURL3 = '';
const array2 = card.map((image) => {
  if (image.list5){
    imgURL3 = 'https://i.postimg.cc/w3G7wPQq/innablink-website-icons-05.png'
    customStyle = {
      width: '60px',
      height: '40px',
      margin: 0,
      padding: 0,
      verticalAlign: 'middle'
    }
  }
})
//'https://i.postimg.cc/Bt6jcsD7/innablink-website-icons-04.png'
//'https://i.postimg.cc/w3G7wPQq/innablink-website-icons-05.png'
  
  return (
    <div className='header'>
    
     {display ? card.map((info) => (
      <div>
     {/*this (h2) is not workin for some reason*/}
      <div className='card'>
        <div className='details'>
        {/*for the number images i was thinking to add the images withhin the <p>*/}
        <p><img className='numbers' src='https://i.postimg.cc/186nnH69/innablink-website-icons-01.png'/>{info.list1}</p>
        <p><img className='numbers' src='https://i.postimg.cc/dkQLfcf1/innablink-website-icons-02.png'/>{info.list2}</p>
        <p><img style={customStyle} src={imgURL1} />{info.list3}</p>
        <p><img style={customStyle} src={imgURL2} />{info.list4}</p>
        <p><img style={customStyle} src={imgURL3} />{info.list5}</p>
        </div>
        {/*here I have the issue tat the images background is rendered on all other cards*/}
        {
        show ? 
        <div className='imageContainer'>
        <img className='cardImage' src = {info.img1} />
        <img className='cardImage' src = {info.img2} />
        <img className='cardImage' src = {info.img3} />
        <img className='cardImage' src = {info.img4} />
        <img className='cardImage' src = {info.img5} />
        <img className='cardImage' src = {info.img6} />
        </div>
     : null}
      </div>
      </div>
     )): null}
     
    </div>
  )
}

export default Card;

