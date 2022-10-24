import React from 'react'

function Footer({social, setSocial}) {
  return (
    <div className='footer fixed-bottom start-50 translate-middle' id='footer'>
        <span className='span'></span>
        <h3 className='footer-title1'>contact us</h3>
        <a href='#'><img style={{'position': 'relative', 'left': '200px', 'filter': 'opacity(50%)'}} className='footerIMG' src='https://i.postimg.cc/Xvqhzbtz/innablink-website-icons-contact-us-baff29.png' /></a>
        <h3 className='footer-title2'>social media</h3>
        <a href='#' onClick={() => {setSocial(true)}}><img style={{'position': 'relative', 'left': '200px', 'filter': 'opacity(50%)'}} className='footerIMG' src='https://i.postimg.cc/DZL8LtfS/innablink-website-icons-social-baff29.png' /></a>
        {social ? <div>
            <a style={{'position': 'absolute', 'left': '530px', "bottom": "170px",}}><img src='https://i.postimg.cc/JskrDJSG/innablink-website-icons-facebook-baff29.png' /></a>
            <a style={{'position': 'absolute', 'left': '700px', "bottom": "60px",}}><img src='https://i.postimg.cc/d7cq83Kn/innablink-website-icons-instagram-baff29.png' /></a>
        </div>
        :null}
    </div>
  )
}

export default Footer