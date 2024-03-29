import React, { Component } from 'react';
import { forwardRef } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import './phone.css'

const useStyles = makeStyles(theme => ({
    input: {
        backgroundColor: '#fff'
    },
}))

const PhoneInput = (props, ref) => {
    const classes = useStyles()

    return (

        <TextField
            {...props}
            InputProps={{
                className: classes.input
            }}
            inputRef={ref}
            fullWidth={true}
            size='small'
            label='Phone Number'
            variant='outlined'
            name='phone'
        />
    )
}
export default forwardRef(PhoneInput)