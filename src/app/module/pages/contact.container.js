import { Grid, Paper, Typography, TextField, withStyles, Button } from '@material-ui/core'
import React from 'react'
import backgroundPic from '../../../Logo/background_contact.png'
import { Navbar } from '../../shared/Navbar';
import emailjs from 'emailjs-com';
import './contact.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { CountryDropdown, CountryRegionData } from 'react-country-region-selector';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { styled } from '@material-ui/styles';
import { LaptopWindowsRounded } from '@material-ui/icons';



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

  CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

  PhoneInputNumber = styled(PhoneInput)({
    "&.react-tel-input .form-control:focus": {
      borderColor: "#69e781",
      boxShadow: "0px 0px 0px 1px #69e781",
    },
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

  render() {
    return (
      <Grid container direction="column" align="center" justify="center" alignItems="center" style={{
        backgroundImage: `url(${backgroundPic})`, height: window.innerWidth > 1000 ? '112vh' : '120vh', backgroundSize: 'cover',
        textAlign: 'center', marginTop: '5%'
      }}>
        <Navbar />
        <Paper elevation={24} style={{ padding: '2%', backgroundColor: '#ebeee7', textAlign: 'center', marginTop: window.innerWidth < 1001 ? '40%' : '' }}>
          <h1 style={{ color: '#292216', fontSize: '250%' }}>
            You Want To Start Your Healthy Journey?
          </h1>
          <h2 style={{ marginTop: '2px', color: '#292216', padding: '3%' }}>
            Fill out the contact form, send us a message
            <br></br> and we will contact you for a free consultation.
          </h2>
          <Grid>
            <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>
              <this.CssTextField
                id="outlined-secondary"
                label="Name & Surname"
                variant="outlined"
                // style={{ marginTop: '7%', width: '35%' }}
                onChange={this.handleFormInput('name')}
                value={this.state.data.name || ''}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>
              <this.CssTextField
                id="outlined-secondary"
                label="Phone Number"
                variant="outlined"
                color='#544f32'
                onChange={this.handleFormInput('number')}
                value={this.state.data.number || ''}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                fullWidth={true}
                style={{ marginTop: '5%' }}
                type="number"
              />
            </Grid>
          </Grid>
          <Grid>
            <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>

              <this.CssTextField
                id="outlined-secondary"
                label="Email Address"
                variant="outlined"
                color='#544f32'
                // style={{ marginTop: '3%', width: '35%' }}
                onChange={this.handleFormInput('email')}
                value={this.state.data.email || ''}
                fullWidth={true}
                style={{ marginTop: '5%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>
              <this.CssTextField
                id="outlined-secondary"
                label="Place of Living"
                variant="outlined"
                color='#544f32'
                // style={{ marginTop: '3%', marginLeft: '3%', width: '35%' }}
                onChange={this.handleFormInput('place')}
                value={this.state.data.place || ''}
                fullWidth={true}
                style={{ marginTop: '5%' }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <this.CssTextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={6}
              // defaultValue="Default Value"
              // style={{ width: '73%', marginTop: '3%' }}
              variant="outlined"
              onChange={this.handleFormInput('message')}
              value={this.state.data.message || ''}
              fullWidth={true}
              style={{ marginTop: '5%' }}
            />
          </Grid>
          <br></br>
          <Link to="/contact/done">
            <this.StyledButton onClick={this.sendEmail} style={{ marginTop: '3%', marginBottom: window.innerWidth < 1001 ? '5%' : '' }}><b>SEND CONTACT FORM</b></this.StyledButton>
          </Link>
        </Paper>
      </Grid >

    )
  }

}