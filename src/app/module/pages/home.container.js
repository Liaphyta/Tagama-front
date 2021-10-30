import { Box, Button, Card, createMuiTheme, Grid, Paper, Typography, withStyles } from '@material-ui/core';
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
import backgroundMobile from '../../../Logo/mobileBack.png'
import backgroundMobile1 from '../../../Logo/mobileBack1.png'
import backgroundFirst from '../../../Logo/background2.png'
import backgroundSecond from '../../../Logo/background3.png'
import backgroundSecond1 from '../../../Logo/background4.png'
import last from '../../../Logo/lastBack.png'
import cardOne from '../../../Logo/card1.png'
import cardTwo from '../../../Logo/card2.png'
import cardThree from '../../../Logo/card3.png'
import './home.css'
import { spacing } from '@material-ui/system';
import MailIcon from '@material-ui/icons/Mail';
import MediaQuery from 'react-responsive';


export default class HomeContainer extends React.Component {

  theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Chilanka',
        'cursive',
      ].join(','),
    },
  });
  StyledButton = withStyles({
    root: {
      background: '#15c39a',
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
        backgroundColor: '#14a382',
        borderColor: '#14a382',
        boxShadow: 'none',
      },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  render() {

    return (

      <div style={{ marginTop: '2%', width: '100%', backgroundColor: 'white' }}>
        <Navbar></Navbar>
        <MediaQuery minDeviceWidth={1000}>
          <div style={{ backgroundImage: `url(${backgroundFirst})`, width: '100%', height: '105vh', backgroundSize: 'cover', textAlign: 'center' }}>
            <div style={{ paddingTop: '12%' }}>
              <h2 className="first-intro" style={{ color: '#4a4a49' }}>Welcome to Tagama</h2>
              <h2 className="first-intro-sub" style={{ color: '#4a4a49' }}>by Tanja Turundzieva</h2>
              <h2 className="second-intro" style={{ color: '#4a4a49' }}>Maintaining healthy habits and positive lifestyle since 1995</h2>
              <Link to="/contact">
                <this.StyledButton className="second-intro" style={{ marginTop: '0px' }}>GET IN CONTACT</this.StyledButton>
              </Link>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1000}>
          <div style={{ backgroundImage: `url(${backgroundMobile1})`, width: '100%', height: '105vh', backgroundSize: 'cover', textAlign: 'center' }}>
            <div style={{ paddingTop: '12%', margin: window.innerWidth > 1000 ? '0%' : '3%' }}>
              <h2 className="first-intro" style={{ color: '#4a4a49' }}>Welcome to Tagama</h2>
              <h2 className="first-intro-sub" style={{ color: '#4a4a49' }}>by Tanja Turundzieva</h2>
              <h2 className="second-intro" style={{ color: '#4a4a49' }}>Maintaining healthy habits and positive lifestyle since 1995</h2>
              <Link to="/contact">
                <this.StyledButton className="second-intro" style={{ marginTop: '0px' }}>GET IN CONTACT</this.StyledButton>
              </Link>
            </div>
          </div>
        </MediaQuery>
        <div style={{
          backgroundImage: window.innerWidth > 1000 ? `url(${backgroundSecond})` : `url(${backgroundSecond1})`, width: '100%',
          height: window.innerWidth > 1000 ? '110vh' : '150vh', backgroundSize: 'cover',
          textAlign: 'center', paddingTop: window.innerWidth > 1000 ? '24%' : '5%', position: 'relative', display: 'inline-block'
        }}>
          <Paper elevation={3} style={{ width: '310px', height: '393px', backgroundImage: `url(${cardOne})`, display: 'inline-block', marginRight: '1%', marginBottom: '1%' }} >
            <h2 className="headlines" style={{ paddingTop: '34%', color: "#4a4a49" }}>Губење на вишок килограми</h2>{/*Weight loss */}
            <Box m={2} style={{ fontSize: '18px', fontFamily: 'Open Sans,Arial,sans-serif' }}>
              Персонализиран индивидуален режим на исхрана базиран на анамнеза, крвна анализа и секојдневни индивидуални консултации.
            </Box>
          </Paper>
          <Paper elevation={3} style={{ width: '310px', height: '393px', backgroundImage: `url(${cardTwo})`, display: 'inline-block', marginRight: '1%', marginBottom: '1%' }} >
            <h2 className="headlines" style={{ paddingTop: '34%', color: "#4a4a49" }}>Одржување на здравје</h2> {/*Health Maintanence */}
            <Box m={2} style={{ fontSize: '18px', fontFamily: 'Open Sans,Arial,sans-serif' }}>
              Детален преглед низ здравствените проблеми со цел подобрување на целокупната здравствена состојба. Постојан индивидуален пристап кон решавање кон проблемот.

            </Box>
          </Paper>
          <Paper elevation={3} style={{ width: '310px', height: '393px', backgroundImage: `url(${cardThree})`, display: 'inline-block', marginRight: '1%', marginBottom: '1%' }} >
            <h2 className="headlines" style={{ paddingTop: '32%', color: "#4a4a49" }}>Менаџмент на здрав начин на живот</h2> {/*Lifestyle Management */}
            <Box m={2} style={{ fontSize: '18px', fontFamily: 'Open Sans,Arial,sans-serif' }}>
              Промена на лошите навики кон храната со цел целокупно подобрување на начинот на живот. Со заеднички сили до посакуваното здравје и начин на живот.
            </Box>
          </Paper>
        </div>
        <div style={{ backgroundImage: `url(${last})`, width: '100%', backgroundSize: 'cover', textAlign: 'center', position: 'relative', marginTop: '-1%', paddingBottom: '1%' }}>
          <div style={{ margin: window.innerWidth > 1000 ? '0%' : '4%' }}>
            <h2 className="first-intro" style={{ color: '#4a4a49' }}>Start today!</h2>
            <h2 className="emails" style={{ color: '#4a4a49' }}>Making a decision is the first step</h2>
            <h2 className="emails" style={{ color: '#4a4a49' }}>towards change!</h2>
            <Link to="/contact">
              <this.StyledButton style={{
                marginTop: '0px', fontFamily: 'Montserrat,Helvetica,Arial,Lucida,sans-serif', fontWeight: '500', textTransform: 'uppercase',
                fontSize: '21px', letterSpacing: '3px', lineHeight: '1.5em'
              }}>START THE CHANGE NOW</this.StyledButton>
            </Link>
          </div >
        </div>
      </div >
    )
  }
}
