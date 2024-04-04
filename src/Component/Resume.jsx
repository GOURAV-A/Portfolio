import React from 'react'
import '../assets/scss/resume.scss'

export default class Resume extends React.Component {
  componentDidMount() {
    this.openPDF();
  }
  openPDF = () => {
    window.open('/resume.pdf', '_blank');
  };
  
  render() {
    
    return (
      <div className='main-div' >
        
      </div>
    )
  }
}