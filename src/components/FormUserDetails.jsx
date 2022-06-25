import React, { useState,Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import {BiUserPin} from 'react-icons/bi';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Valid from 'react-joi-validation';
import Joi, { validate } from 'joi-browser';



Valid.setJoi(Joi)

const schema = Joi.object().keys({
    firstName: Joi.string().required().label('First Name').min(3),
    lastName: Joi.string().required().label('Last Name').min(3),
    email: Joi.string().required().email().label('Email'),
    occupation: Joi.string().allow(null).allow(''),
    city: Joi.string().allow(null).allow(''),
    bio: Joi.string().allow(null).allow('')
});


class FormUserDetails extends Component {
    state={
        error: ""
    }
   
    continue = e => {   
        e.preventDefault();
        const val=validate(this.props.values, schema)
        if(val.error){
            console.log(val.error.message);
            this.setState({error: val.error.message})
        }else{
            this.props.nextStep();
        }
        
    }
    
  render() {
    
    const {values,handleChange}=this.props;
    return (
        
      <MuiTheme>
        <div className='glass-card'>
        <BiUserPin size="3rem" color='rgb(255, 255, 255, 0.842)'/>
            <nav className='appbar'>
                <h1>Enter User Details</h1>
            </nav>
            <TextField
                hintText="Enter Your First Name"
                floatingLabelText="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
            />
            <br/>
            <TextField
                hintText="Enter Your Last Name"
                floatingLabelText="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
            />
            <br/>
            <TextField
                hintText="Enter Your Email"
                floatingLabelText="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
            />
            <br/>
            <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
            <br/>
            
            
        </div>
        <p className='error'>{this.state.error}</p>
      
        
        </MuiTheme>
    )
  }
}
const styles={
    button:{
        margin:15
    }   
}
export default FormUserDetails
