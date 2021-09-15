import { Grid, Paper, Typography, TextField, withStyles, Button } from '@material-ui/core'
import React from 'react'
import backgroundPic from '../../../Logo/slika1edit.jpg'
import { Navbar } from '../../shared/Navbar';
import emailjs from 'emailjs-com';
import './contact.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { CountryDropdown, CountryRegionData } from 'react-country-region-selector';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

export default class contactContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formdata: {},
      data: {}
    }
  }

  selectCountry(val) {
    var formdata = this.state.data;
    formdata["country"] = val;
    this.setState({
      data: formdata
    });
  }
  handleFormInput = name => event => {
    var formdata = this.state.data;
    formdata[name] = event.target.value;
    this.setState({
      data: formdata
    });
  }
  sendEmail = () => {
    const templateParams = {
      name: this.state.data.name,
      number: this.state.data.number,
      email: this.state.data.email,
      place: this.state.data.place,
      message: this.state.data.message
    };
    emailjs.send('service_2hxvcm6', 'template_bmy29ke', templateParams, 'user_xKoRQkVDVTUKokzzNiLy9')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }
  StyledButton = withStyles({
    root: {
      background: '#6dce7f',
      borderRadius: 30,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      fontFamily: 'Montserrat,Helvetica,Arial,Lucida,sans-serif!important',
      fontWeight: 500,
      textTransform: 'uppercase',
      fontSize: '18px',
      letterSpacing: '2px',
      lineHeight: '1.5em',
      '&:hover': {
        backgroundColor: '#6dab79',
        borderColor: '#6dab79',
        boxShadow: 'none',
      },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  // StyledButton = withStyles({
  //     root: {
  //       background: 'linear-gradient(45deg, #6dce7f 7%, #05481a 96%)',
  //       borderRadius: 3,
  //       border: 0,
  //       color: 'white',
  //       height: 48,
  //       padding: '0 30px',
  //       boxShadow: '0 3px 5px 2px rgba(109,157,99, .9)',
  //     },
  //     label: {
  //       textTransform: 'capitalize',
  //     },
  //   })(Button);


  render() {
    return (
      //dodadi navBar
      <div style={{ backgroundColor: '#ebeee7' }}>
        <Navbar></Navbar>
        <div style={{
          backgroundImage: `url(${backgroundPic})`, height: '167vh', backgroundRepeat: 'no-repeat', backgroundSize: '90%',
          textAlign: 'center', marginLeft: '10%', backgroundColor: '#ebeee7'
        }}>
          <div style={{ paddingTop: '16%' }}></div>
          <Paper elevation={0} style={{ height: '50%', width: '50%', marginLeft: '21%', backgroundColor: '#ebeee7' }}>
            <h1 style={{ color: '#292216', fontSize: '250%' }}>
              You Want To Start Your Healthy Journey?
            </h1>
            <h2 style={{ marginTop: '2px', color: '#292216', }}>
              Fill out the contact form, send us a message
              <br></br> and we will contact you for a free consultation.
            </h2>
            <TextField
              id="outlined-secondary"
              label="Name & Surname"
              variant="outlined"
              color='#544f32'
              style={{ marginTop: '7%', width: '35%' }}
              onChange={this.handleFormInput('name')}
              value={this.state.data.name || ''}
            />
            <PhoneInput
              country={'mk'}
              value={this.state.phone}
              onChange={phone => this.setState({ phone })}
              style={{ marginTop: '7%', marginLeft: '3%', width: '35%' }}
            />
            {/* <TextField
              id="outlined-secondary"
              label="Phone Number"
              variant="outlined"
              color='#544f32'
              style={{ marginTop: '7%', marginLeft: '3%', width: '35%' }}
              onChange={this.handleFormInput('number')}
              value={this.state.data.number || ''}
            /> */}
            <TextField
              id="outlined-secondary"
              label="Email Address"
              variant="outlined"
              color='#544f32'
              style={{ marginTop: '3%', width: '35%' }}
              onChange={this.handleFormInput('email')}
              value={this.state.data.email || ''}
            />
            <TextField
              id="outlined-secondary"
              label="Place of Living"
              variant="outlined"
              color='#544f32'
              style={{ marginTop: '3%', marginLeft: '3%', width: '35%' }}
              onChange={this.handleFormInput('place')}
              value={this.state.data.place || ''}
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={6}
              // defaultValue="Default Value"
              style={{ width: '73%', marginTop: '3%' }}
              variant="outlined"
              onChange={this.handleFormInput('message')}
              value={this.state.data.message || ''}
            />
            <br></br>
            <Link to="/contact/done">
              <this.StyledButton onClick={this.sendEmail} style={{ marginTop: '3%' }}><b>SEND CONTACT FORM</b></this.StyledButton>
            </Link>
          </Paper>
        </div>
      </div>


    )
  }

}