import React from 'react'
import Select from './Select';

function Form({form}) {


    let imageObject = {
        "image":[ 
        {
          "id": 1,
          "url": "https://i.postimg.cc/Cz3hd3JH/innablink-website-icons-who-0033ff.png"
      },
          {
            "id": 2,
            "url": "https://i.postimg.cc/Sncy9gv0/secondoptionimage.png"
        },
          {
            "id": 3,
            "url": "https://i.postimg.cc/TLdYfn0z/innablink-website-icons-where-0033ff.png"
        },
          {
            "id": 4,
            "url": "https://i.postimg.cc/F7dFrrbH/foroptionimage.png" 
        }
        ]  
    }

    
  return (
    <div>
        { form ? <form className='navbar-form'>
            <h3 className='formTitle'>please add your details to this form, <br /> so we can assist you better.</h3>
            <input className='item item1' type='text' placeholder='your full name'></input>
            <input className='item item2' type='text' placeholder='e-mail address'></input>
            <input className='item item3' type='text' placeholder='city of residence'></input>
            <Select
                value1={"I am an individual"}
                value2={"I am buisness"}
                text1='I am an individual'
                text2="I am buisness"
                source = {imageObject.image[0].url}
            />
             <Select 
                value1="I need to send a document"
                value2="I need to send a package"
                value3="I need to send multiple packages"
                text1='I need to send a document'
                text2="I need to send a package"
                text3="I need to send multiple packages"
                source = {imageObject.image[1].url}
            />
              <Select
                value1="Destination is within my emirate"
                value2="Destination is outside my emirate"
                value3="Destination is outside my country"
                text1='Destination is within my emirate'
                text2="Destination is outside my emirate"
                text3="Destination is outside my country"
                source = {imageObject.image[2].url}
            />
             <Select 
                value1="Deliver as soon as possible"
                value2="Deliver tomorrow"
                value3="Deliver on a specific date"
                text1='Deliver as soon as possible'
                text2="Deliver tomorrow"
                text3="Deliver on a specific date"
                source = {imageObject.image[3].url}
            />
            <button className='submit' type='submit'>send</button>
          
          
        </form>: null} 
    </div>
  )
}

export default Form