import React from 'react'

function Select({value1, value2, value3, text1, text2, text3, source}) {


// var json = JSON.parse(imageObject);

  return (
    <div>
        <img style={{"width":"60px", "height":"50px", "padding":"0px"}} src={source} />
        <select className='item select-item'  name="cars">
            <option disabled selected value></option>
            <option value={value1}>{text1}</option>
            <option value={value2}>{text2}</option>
            <option value={value3}>{text3}</option>

        </select>
    </div>
  )
}

export default Select