import React from 'react'

function UserLogin({user}) {
  return (
    <div>
    {user ? 
    <div className='userInfo'>
        <hr className='line' />
        <h3 className='user-title'>user login</h3>
        <p style={{'textAlign': 'center', 'position': 'relative', "top": '290px', 'fontSize': '23px'}}>please enter your login credentials <br /> to continue with us</p>
        <form className='userForm'>
            <h6 style={{'display': 'inline-block', 'marginRight': '20px'}}>email</h6>
            <input style={{'position': 'relative', "left": '4px', 'borderRadius': '20px', 'width': '300px', 'border': '#0033FF 1px solid', 'padding': '4px', 'marginBottom': '10px'}} type='text' placeholder='email@domain.com'></input>
            <h6 style={{'display': 'inline-block','position': 'relative', "top": '35px', 'right': '390px'}}>password</h6>
            <input style={{'display': 'block', 'margin': 'auto', 'borderRadius': '20px', 'width': '300px', 'border': '#0033FF 1px solid', 'padding': '4px'}} type='text' placeholder='*******'></input>
            <p style={{'display': 'inline-block', 'position': 'relative', 'top': '27px'}}>remember me</p>
            <input style={{'position': "relative", 'right': '150px', 'top': '40px', 'height': '30px', 'width': '30px', 'borderRadius': '5px', 'border': '#0033FF 1px solid', 'appearance': 'none'}} type='checkbox'></input>
            <button style={{'position': "relative", 'top': '70px','left': '40px', 'backgroundColor': '#0033FF', 'color': 'white', 'borderRadius': '20%','border': 'none', 'padding': '5px', 'width': '70px'}}>log in</button>
        </form>
    </div>
    : null}
    </div>
  )
}

export default UserLogin