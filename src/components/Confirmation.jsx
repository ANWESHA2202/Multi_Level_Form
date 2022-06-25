import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {List,ListItem} from 'material-ui/List';
import axios from 'axios'
class Confirmation extends Component {
    continue = async(e) => {  
     
        e.preventDefault();
        
        try{
            const result = await axios.post('https://shielded-stream-85778.herokuapp.com/confirmation',{
                firstName:this.props.values.firstName,
                lastName:this.props.values.lastName,
                email:this.props.values.email,
                occupation:this.props.values.occupation,
                city:this.props.values.city,
                bio:this.props.values.bio})
                console.log(result)
                this.props.nextStep();
        }catch(error){
            console.error(error)
            this.props.prevStep();
        }
    }
    backward = e => {
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
    const {values:{firstName,lastName,email,occupation,city,bio}}=this.props;

    return (
      <MuiTheme>
        <div className="glass-card">
            <nav className="appbar">
                <h1>Confirm User Details</h1>
            </nav>
            <List>
                <ListItem primaryText="First Name" secondaryText={firstName} />
                <ListItem primaryText="Last Name" secondaryText={lastName} />
                <ListItem primaryText="Email" secondaryText={email} />
                <ListItem primaryText="Occupation" secondaryText={occupation} />
                <ListItem primaryText="City" secondaryText={city} />
                <ListItem primaryText="Bio" secondaryText={bio} />
            </List>
            <RaisedButton
                label="Previous"
                primary={true}
                style={styles.button}
                onClick={this.backward}
            />
            <RaisedButton
                label="Confirm & Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
        </div>
        </MuiTheme>
    )
  }
            
}

const styles={
    button:{
        margin:15
    }   
}
export default Confirmation
