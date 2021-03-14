import { Grid, Paper, Typography, TextField, withStyles, Button } from '@material-ui/core'
import React from 'react'
import backgroundPic from '../../../Logo/slika1edit.jpg'
import { Navbar } from '../../shared/Navbar';

export default class contactContainer extends React.Component {

    StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #6dce7f 7%, #05481a 93%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(109,157,99, .9)',
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);

    render()
    {
        return (
            //dodadi navBar
            <div style={{backgroundColor: '#ebeee7'}}>
            {/* <Navbar></Navbar> */}
            <div style={{ backgroundImage:`url(${backgroundPic})`,height:'167vh',backgroundRepeat:'no-repeat',backgroundSize: '90%',
            textAlign: 'center', marginLeft: '10%', backgroundColor: '#ebeee7'}}>
                <div style={{paddingTop: '16%'}}></div>
             <Paper elevation={0} style={{height: '50%', width: '50%', marginLeft: '21%', backgroundColor: '#ebeee7'}}>
                    <Typography variant="h4" style={{color: '#292216'}}>
                        You Want To Start Your Healthy Journey?
                    </Typography>
                    <Typography variant="h6" style={{marginTop: '2%', color: '#292216'}}>
                        Fill out the contact form, send us a message
                        <br></br> and we will contact you for a free consultation.
                    </Typography>
                    <TextField
                        id="outlined-secondary"
                        label="Name & Surname"
                        variant="outlined"
                        color='#544f32'
                        style={{marginTop: '7%', width: '35%'}}       
                    />
                    <TextField
                        id="outlined-secondary"
                        label="Phone Number"
                        variant="outlined"
                        color='#544f32'
                        style={{marginTop: '7%', marginLeft: '3%', width: '35%'}}       
                    />
                    <TextField
                        id="outlined-secondary"
                        label="Email Address"
                        variant="outlined"
                        color='#544f32'
                        style={{marginTop: '3%', width: '35%'}}       
                    />
                    <TextField
                        id="outlined-secondary"
                        label="Place of Living"
                        variant="outlined"
                        color='#544f32'
                        style={{marginTop: '3%', marginLeft: '3%', width: '35%'}}       
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={6}
                        // defaultValue="Default Value"
                        style={{width: '73%', marginTop: '3%'}}
                        variant="outlined"
                    />
                    <br></br>
                    <this.StyledButton style={{marginTop:'3%'}}><b>SEND CONTACT FORM</b></this.StyledButton>
                </Paper>
            </div>
            </div>
            

        )
    }

}