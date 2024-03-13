import React, { Component } from 'react'
import '../assets/scss/resume.scss'

export default class Resume extends Component {
 
  render() {
    const fileLink = 'https://drive.google.com/file/d/1YY1S4dfVzGlX1MNimnv9XeZLCDGnFpYa/view?usp=drivesdk';
 
    return (
      <div className='main-div' >
         <iframe src={fileLink} className='iframe'  ></iframe>
      </div>
    )
  }
}



  










































