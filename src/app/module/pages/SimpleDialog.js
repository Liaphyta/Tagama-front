import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default class SimpleDialog extends React.Component {
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
      <Dialog
        open={true}
        TransitionComponent={Transition}
        keepMounted
        maxWidth={'sm'}
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-slide-title"><b>{"Thank you!"}</b></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {console.log("dsadsadsa")}
            We will contact you shortly.
          </DialogContentText>
          <DialogActions>
            <Link to="/home">
              <this.StyledButton>
                Go back
              </this.StyledButton>
            </Link>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
  }
}