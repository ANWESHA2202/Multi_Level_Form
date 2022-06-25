import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import Lottie from 'react-lottie';
import animationData from '../assets/thank-you.json';

class Success extends Component {
    
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData,
      
    };

    return (
      <MuiTheme>
        <React.Fragment>
        <Lottie options={defaultOptions}
          height={400}
          width={400}
        />
           
           <p>We'll get back to you soon...</p>
           </React.Fragment>
        </MuiTheme>
    )
  }
            
}


export default Success
