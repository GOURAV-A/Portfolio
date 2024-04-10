import React, { useEffect, useState } from 'react';

import '../assets/scss/body.scss';
import {
    GithubOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    InstagramOutlined,
    PhoneOutlined,
} from '@ant-design/icons';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import particlesConfig from './particlesConfig.json';
import bodyImage from './body.jpg'; // Import the image
//import bodyImage from './Untitled design.jpg';

const Body = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
       <>
        
      
        <div className="main">
         
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={particlesConfig}
                />
                
            )}
          
            <div className='about_me'>
                <p className='p1'>Hi There,</p>
                <p className='p2'>I'm Gourav Anand</p>
                <Link to="/aboutme">
                    <Button type="primary" style={{ backgroundColor: '#8e8686', borderRadius: '10px', color: 'aqua', fontFamily:'cursive',  }}>
                        About Me
                    </Button>
                </Link>
                <div className='icon'>
                    <a href='https://github.com/GOURAV-A'><GithubOutlined /></a>
                    <a href='https://www.linkedin.com/in/gourav-anand?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><LinkedinOutlined /></a>
                    <a href='https://x.com/GouravUpadhyay0?s=09'><TwitterOutlined /></a>
                    <a href='https://www.instagram.com/gouravupadhyay1216?igsh=MWxrMmZ5azRjNWZ3dg=='><InstagramOutlined /></a>
                    <a href='tel:'> <PhoneOutlined /></a>
                </div>
            </div>
          
            <div className="image-container">
                    <img src={bodyImage} alt="Body" className="body-image" />
                </div>
            
        </div>
        </>
    );
};

export default Body;
