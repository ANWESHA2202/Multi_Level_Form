import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import {BiUserPin} from 'react-icons/bi';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Valid from 'react-joi-validation';
import Joi, { validate } from 'joi-browser';
Valid.setJoi(Joi)

const schema=Joi.object().keys({
    firstName: Joi.string().required().label('First Name').min(3),
    lastName: Joi.string().required().label('Last Name').min(3),
    email: Joi.string().required().email().label('Email'),
    occupation: Joi.string().label('Occupation'),
    city: Joi.string().label('City'),
    bio: Joi.string().label('Bio')
})
class FormPersonalDetails extends Component {
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
    backward = e => {
        e.preventDefault();
        const val=validate(this.props.values, schema)
        if(val.error){
            console.log(val.error);
        }else{
            
            this.props.prevStep();
        }
    }
  render() {
    const {values,handleChange}=this.props;

    return (
      <MuiTheme>
        <div className="glass-card">
            <BiUserPin size="3rem" color='rgb(255, 255, 255, 0.842)'/>
            <nav className="appbar">
                <h1>Enter Personal Details</h1>
            </nav>
            <TextField
                hintText="Enter Your Occupation"
                required={false}
                floatingLabelText="Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
            />
            <br/>
            <TextField
                hintText="Enter Your City"
                required={false}
                floatingLabelText="City"
                onChange={handleChange('city')}
                defaultValue={values.city}
            />
            <br/>
            <TextField
                hintText="Enter Your Bio"
                required={false}
                floatingLabelText="Bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
            />
            <br/>
            <RaisedButton
                label="Previous"
                primary={true}
                style={styles.button}
                onClick={this.backward}
            />
            <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
        </div>
        {this.state.error && <p className='error'>{this.state.error}</p>}
        </MuiTheme>
    )
  }
}
const styles={
    button:{
        margin:15
    }   
}
export default FormPersonalDetails
