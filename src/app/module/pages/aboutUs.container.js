import { Button, Container, Grid, Paper, withStyles } from '@material-ui/core'
import React from 'react'
import { Navbar } from '../../shared/Navbar'
import aboutUs from '../../../Logo/about_us_pic.jpg'
import left from '../../../Logo/left.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom'
import back from '../../../Logo/back.png'


export default class aboutUsContainer extends React.Component {

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
    render() {
        return (
            <Grid container spacing={2} justify="center" alignItems="center" style={{
                marginTop: '7%'
            }}>
                <Navbar></Navbar>
                <Grid item xs={6} style={{}}>
                    <img style={{ float: 'left' }} src={left}></img>
                    <div style={{ marginTop: '15%', width: '100%', marginLeft: '20%' }}>
                        <h2 style={{ fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: '700', fontSize: '40px', marginBottom: '10px' }}>
                            My Story
                        </h2>
                        <h3 style={{ fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: '700', fontSize: '25px', marginTop: '0px', color: '#6dce7f' }}>
                            Meet Tanja Turundzieva, Professional Nutricionist
                        </h3>
                        <p style={{ fontWeight: '500', color: '#999', fontFamily: 'Open Sans,Arial,sans-serif', fontSize: '19px' }}>
                            Со повеќе од 25 години во нутриционизмот, имам постигнато големи успеси во однос на намалување или зголемување на килограмите, решавање на
                            здравствени проблеми, подготовка на персонализирани спортски режими и овозможување на режими за исхрана на доилки и трудници. Еден од рекордите на симнати килограми
                            од еден маж е 128кг, додека од една жена 87кг и од дете 45кг. Многу регулирани здравствени проблеми и победени битки со карцином. Заедно ќе движиме кон посакуваната
                            цел, тимската работа секогаш победува. Сметам дека нутриционизмот ќе е идната најважна наука во светот. Храната е лек или уништувач на нашето здравје. Како ќе се храниме така ќе живееме.
                        </p>
                        <a href="https://www.facebook.com/tagamatanja">
                            <FacebookIcon style={{ color: '#6dce7f', width: '4%', height: '4%' }} />
                        </a>
                        <Link to="/contact">
                            <this.StyledButton className="second-intro" style={{ marginLeft: '3%', marginTop: '-3%' }}>JOIN ME</this.StyledButton>
                        </Link>
                    </div>

                </Grid>
                <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <img src={aboutUs} style={{ maxWidth: '60%', height: 'auto' }}></img>
                </Grid>
                <div style={{ backgroundImage: `url(${back})`, width: '100%', height: '40vh', backgroundSize: 'cover', textAlign: 'center' }} >

                </div>
            </Grid >

        )
    }

}
