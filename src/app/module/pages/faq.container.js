import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../../shared/Navbar';
import back from '../../../Logo/faq_back.png'


export default class faqContainer extends React.Component {

    render() {
        return (
            <Grid justify='center' container style={{ textAlign: 'center', width: "100%" }}>
                <Navbar></Navbar>
                <div style={{ backgroundImage: `url(${back})`, width: '100%', height: '130vh', backgroundSize: 'cover', textAlign: 'center' }}>
                    <Grid item style={{ marginTop: '7%' }}>
                        <h2 style={{ fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 700, fontSize: '40px', lineHeight: '1.6em', marginBottom: '0px' }}>Frequently Asked Questions </h2>
                        <h3 style={{ fontFamily: 'Montserrat,Helvetica,Arial,Lucida,sans-serif', fontWeight: 500, fontSize: '22px', lineHeight: '1.5em', textTransform: 'uppercase', letterSpacing: '2px' }}>Learn How it Works!</h3>
                    </Grid>
                    <Grid container spacing={5} style={{ marginLeft: "13%" }}>
                        <Grid item xs={3} >
                            <Paper elevation={3} style={{
                                fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 450, fontSize: '19px', lineHeight: '1.6em'
                            }}><b>What is the first step towards getting a healthy diet from you?</b><br /> - The first step is making contact with me!</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper elevation={3} style={{
                                fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 450, fontSize: '19px', lineHeight: '1.6em'
                            }}><b>Where can people reach you?</b><br /> - You can reach me through all social networks, my number and email which are listed in your left upper corner.</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper elevation={3} style={{
                                fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 450, fontSize: '19px', lineHeight: '1.6em'
                            }}><b>Where can people reach you?</b><br /> - You can reach me through all social networks, my number and email which are listed in your left upper corner.</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} style={{ marginLeft: "13%" }}>
                        <Grid item xs={3}>
                            <Paper elevation={3} style={{
                                fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 450, fontSize: '19px', lineHeight: '1.6em'
                            }}><b>Where can people reach you?</b><br /> - You can reach me through all social networks, my number and email which are listed in your left upper corner.</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper elevation={3} style={{
                                fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 450, fontSize: '19px', lineHeight: '1.6em'
                            }}><b>Where can people reach you?</b><br /> - You can reach me through all social networks, my number and email which are listed in your left upper corner.</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper elevation={3} style={{
                                fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 450, fontSize: '19px', lineHeight: '1.6em'
                            }}><b>Where can people reach you?</b><br /> - You can reach me through all social networks, my number and email which are listed in your left upper corner.</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} style={{ marginLeft: "13%" }}>
                        <Grid item xs={3}>
                            <Paper elevation={3} style={{
                                fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 450, fontSize: '19px', lineHeight: '1.6em'
                            }}><b>Where can people reach you?</b><br /> - You can reach me through all social networks, my number and email which are listed in your left upper corner.</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper elevation={3} style={{
                                fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 450, fontSize: '19px', lineHeight: '1.6em'
                            }}><b>Where can people reach you?</b><br /> - You can reach me through all social networks, my number and email which are listed in your left upper corner.</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper elevation={3} style={{
                                fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 450, fontSize: '19px', lineHeight: '1.6em'
                            }}><b>Where can people reach you?</b><br /> - You can reach me through all social networks, my number and email which are listed in your left upper corner.</Paper>
                        </Grid>
                    </Grid>
                </div>
            </Grid >

        )
    }
}