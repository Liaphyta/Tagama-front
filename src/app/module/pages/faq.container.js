import { Card, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../../shared/Navbar';
import back from '../../../Logo/faq_back.png';
import MyCard from '../helper/MyCard';
import './faq.css';


export default class faqContainer extends React.Component {

    render() {
        return (
            <Grid direction="column" align="center" justify="center" alignItems="center" container
                style={{ textAlign: 'center', width: "100%", minHeight: '110vh', backgroundImage: `url(${back})`, backgroundSize: 'cover', marginTop: '5%', paddingRight: '-10px', display: 'inline-block' }} spacing={2}>
                <Navbar />
                <Grid item>
                    <h2 style={{ fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 700, fontSize: '40px', lineHeight: '1.6em', marginBottom: '0px' }}>Frequently Asked Questions </h2>
                    <h3 style={{ fontFamily: 'Montserrat,Helvetica,Arial,Lucida,sans-serif', fontWeight: 500, fontSize: '22px', lineHeight: '1.5em', textTransform: 'uppercase', letterSpacing: '2px' }}>Learn How it Works!</h3>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
                <Grid item xs={12} sm={4} style={{ margin: window.innerWidth > 1223 ? 'auto' : '', textAlign: 'center', paddingLeft: window.innerWidth > 1223 ? '' : '15px' }}>
                    <MyCard
                        carddescription={'What is the first step towards getting a healthy diet from you?'}
                        cardexpandedtext={'- You can contact us through our social links or you can just directly contact us through the contact form.'}
                    >
                    </MyCard>
                </Grid>
            </Grid >
        )
    }
}