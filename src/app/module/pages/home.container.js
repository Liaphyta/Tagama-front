import { Button, createMuiTheme, Grid, Paper, Typography, withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundPic from '../../../Logo/healthy-diet.jpg'
import weightLoss from '../../../Logo/weight-loss.png'
import weightGain from '../../../Logo/weight-gain.png'
import sports from '../../../Logo/sports.png'
import healthy from '../../../Logo/healthy.jpg'
import cloud from '../../../Logo/cloud1.png'
import { Navbar } from '../../shared/Navbar';


export default class HomeContainer extends React.Component {

     theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Chilanka',
            'cursive',
          ].join(','),
        },});
     StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #6dce7f 10%, #6dce7f 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);
    render(){
        
        return (

            <div style={{marginTop:'110px',width:'100%',backgroundColor:'white'}}>
              <Navbar></Navbar>
            <div style={{ backgroundImage:`url(${backgroundPic})`,height:'80vh',backgroundRepeat:'no-repeat',backgroundSize: '100%',marginRight:'0px',
                        textAlign: 'center'}}>
            <div style={{backgroundImage:`url(${cloud})`,width:'640px',height:'500px',backgroundRepeat:'no-repeat',backgroundSize: '100%',textAlign:'center',display: 'block',marginLeft:'auto',
              marginRight:'auto',marginTop:'auto',marginBottom:'auto',paddingTop:'180px'}}>
            <Typography  variant="h5" style={{color:'white'}} ><b>Koга исхраната е исправна,</b></Typography>
            <Typography  variant="h5" style={{color:'white'}} ><b> од медицината нема потреба</b></Typography>
            <Typography  variant="h5" style={{color:'white',paddingTop:'15px'}}><b>Заедно креираме здрави навики!</b></Typography>
            <ThemeProvider theme={this.theme}>
            <Link to='\contact' ><this.StyledButton style={{marginTop:'20px'}}><b>ПРИДРУЖИ СЕ</b></this.StyledButton></Link>
            </ThemeProvider>
            </div>
            
            </div> 
            <Grid container spacing={2} style={{textAlign:'center',paddingTop:'15px',backgroundColor:'#f2f2f2'}}>
              
              <Grid item xs={3}>  {/*slabeenje*/}
              <img src={weightLoss} style={{borderTopLeftRadius: '50%',borderTopRightRadius: '50%',borderBottomRightRadius: '50%',borderBottomLeftRadius: '50%'
              ,width:'220px',height:'200px'}} />
              <ThemeProvider theme={this.theme}>
                <Typography variant="h5" style={{color:'#6dce7f',paddingTop:'10px'}}>Здраво Слабеење</Typography>
                <Typography variant="h6" style={{color:'#6dce7f'}}>
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф 
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф 
                </Typography>
              </ThemeProvider>
              </Grid>
              <Grid item xs={3}> {/*zdebeluvanje*/}
              <img src={weightGain} style={{borderTopLeftRadius: '50%',borderTopRightRadius: '50%',borderBottomRightRadius: '50%',borderBottomLeftRadius: '50%'
              ,width:'220px',height:'200px'}} />
              <ThemeProvider theme={this.theme}>
                <Typography variant="h5" style={{color:'#6dce7f',paddingTop:'10px'}}> Здраво Здебелување</Typography>
                <Typography variant="h6" style={{color:'#6dce7f'}}>
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф 
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф 
                </Typography>
              </ThemeProvider>
              </Grid>
              <Grid item xs={3}> {/*sportski*/}
              <img src={sports} style={{borderTopLeftRadius: '50%',borderTopRightRadius: '50%',borderBottomRightRadius: '50%',borderBottomLeftRadius: '50%'
              ,width:'220px',height:'200px'}} />
              <ThemeProvider theme={this.theme}>
                <Typography variant="h5" style={{color:'#6dce7f',paddingTop:'10px'}}> Режим наменет за спортисти</Typography>
                <Typography variant="h6" style={{color:'#6dce7f'}}>
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф 
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф 
                </Typography>
              </ThemeProvider>
              </Grid>
              <Grid item xs={3}> {/*zdravstvo*/}
              <img src={healthy} style={{borderTopLeftRadius: '50%',borderTopRightRadius: '50%',borderBottomRightRadius: '50%',borderBottomLeftRadius: '50%'
              ,width:'220px',height:'200px'}} />
              <ThemeProvider theme={this.theme}>
                <Typography variant="h5" style={{color:'#6dce7f',paddingTop:'10px'}}>Режим за подобрување на вашето здравје</Typography>
                <Typography variant="h6" style={{color:'#6dce7f'}}>
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф 
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  
                   Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф  Рандом параграф 
                </Typography>
              </ThemeProvider>
              </Grid>
              </Grid>
            </div>
        )}
}
