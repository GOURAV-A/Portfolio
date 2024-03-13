import React, { Component } from 'react'
import '../assets/scss/aboutme.scss';
import Skills from './Skills';
export default class AboutMe extends Component {
    render() {

        return (
            <div className='aboutsection'>
                <div className='d0'>
                    <div className='d1'>
                        <h2>ABOUT ME</h2>
                        <p>I'm Gourav Anand, a dedicated full-stack developer with a fervent passion for technology. With a keen eye for detail and a drive for innovation, I specialize in crafting seamless, user-centric solutions across the stack. My journey as a technology enthusiast has fueled my commitment to staying at the forefront of industry trends, constantly expanding my skill set to deliver cutting-edge projects. Let's collaborate to transform ideas into impactful realities. </p>
                    </div>
                    <div className='d2'>
                        <h2>SKILLS</h2>
                        <Skills />
                    </div>
                </div>

            </div>
        )
    }
}
