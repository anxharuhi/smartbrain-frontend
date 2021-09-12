import React from 'react';
import Particles from 'react-particles-js';
import './backgroundparticles.css'

const BackgroundParticles = () => {
  return (
    <div id='background-particles'> 
      <Particles
      // width={window.outerWidth}
      // height={window.outerHeight}
      params={{
        "fpsLimit": 60,
        // "background": {
        //   "color": {
        //     "value": "#888888"
        //   },
        //   "opacity": 0.1,
        // },
        "particles": {
          "number": {
            "density": {
              "enable": true,
              "value_area": 600,
            },
            "value": 35
          },
          "size": {
            "value": 4
          }
        }}} />
    </div>
  )
}

export default BackgroundParticles;