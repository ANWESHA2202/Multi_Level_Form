import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonal from './FormPersonal'
import Confirmation from './Confirmation'
import Success from './Success'
class UserForm extends Component {
    state={
        step:1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    //proceed to next step
    nextStep = () => {
        const {step}=this.state;
        this.setState({
            step: step + 1
        })
    }
    //proceed to previous step
    prevStep = () => {
        const {step}=this.state;
        this.setState({
            step: step - 1
        })
    }
    //handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
  render() {
    const {step}=this.state;
    const {firstName, lastName, email, occupation, city, bio}=this.state;
    const values={firstName, lastName, email, occupation, city, bio};
    switch(step){
        case 1:
            return(
                <FormUserDetails 
                    nextStep={this.nextStep} 
                    handleChange={this.handleChange} 
                    values={values}
                />
            )
        case 2:
            return(
                <FormPersonal
                    prevStep={this.prevStep}
                    nextStep={this.nextStep} 
                    handleChange={this.handleChange} 
                    values={values}
                />
            )
        case 3:
            return(
                <Confirmation
                    prevStep={this.prevStep}
                    nextStep={this.nextStep} 
                    values={values}
                />
            )
        case 4:
            return(
                <Success/>
            )
        default:
            return(
                console.log('error')
            )
    }
  }
}

export default UserForm
