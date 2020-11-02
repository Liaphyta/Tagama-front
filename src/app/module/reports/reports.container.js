import React from 'react';
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import {Button,Fab,GridList,Grid} from '@material-ui/core';
import { isThisSecond } from 'date-fns/esm';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { getAllScans } from './reports.repo';


export default class ReportsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
          rowsPerPages: 5,
          data: {},
          formdata: {},
          dateFrom: new Date(),
          dateTo: new Date(),
          showMyComponent: undefined,
          clickedDate: new Date(),
          show: false,
          showTotal:true
        }
        
      }
     getAllScans = () => {
        
          getAllScans().then(response => {
            this.setState({
              show:true,
              showTotal:false,
            },
            );
            console.log(response);
          }).catch(error => {
            console.log(error);
          });
     }
      handleChangeDateField = name => event => {
        this.setState({
            [name]: event
        });
    }
    changeVisibility = state => {
        this.setState({
            showMyComponent: true
        })
    }
    changeShowTotal()
    {
        this.setState({
            showTotal:true,
            show:false
        })
    }
     formatDate(n) {
        return (n < 10) ? ("0" + n) : n;
    }
    formatDatesButtons(dateFrom,dateTo){
        var dateMoving;
        dateMoving=new Date(dateFrom);
        let fabs = []
        while(dateMoving<=dateTo)
          {
              fabs.push(
                <Link to={'/app/reports/daily/'+dateMoving.toISOString()} style={{textDecoration: 'none', color: 'white'}}>
                <Fab color="secondary" aria-label="add" style={{marginLeft: 5 +"px",marginTop: 5+"px"}}
                onClick=""
                >
                    {this.formatDate(dateMoving.getDate()) +"." + this.formatDate(dateMoving.getMonth()+1)}
                </Fab> 
                </Link>
              )
              dateMoving.setUTCDate(dateMoving.getUTCDate() + 1);
          }
          return fabs;  
    }
    render(){
        return (
            <form style={{marginTop:50+"px",marginLeft: '30px'}}>
                <span style={{color:"gray"}}><b>Generate report for all registry books</b></span>
                <div style={{marginBottom: 20 + "px"}}>
             <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                   <DatePicker
                                       id="standard-uncontrolled"
                                       value={this.state.dateFrom ? this.state.dateFrom : ''}
                                       onChange={this.handleChangeDateField('dateFrom')}
                                       label="Date From"
                                       keyboard
                                       format="dd-MM-yyyy"
                                       mask={value =>
                                           value ? [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] : []
                                       }
                                       margin="normal"
                                       required
                                   />
                                   <DatePicker
                                       id="standard-uncontrolled"
                                       value={this.state.dateTo ? this.state.dateTo : ''}
                                       onChange={this.handleChangeDateField('dateTo')}
                                       label="Date To"
                                       keyboard
                                       style={{marginLeft:20+"px"}}
                                       format="dd-MM-yyyy"
                                       mask={value =>
                                           value ? [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] : []
                                       }
                                       margin="normal"
                                       required
                                   />
                               </MuiPickersUtilsProvider>
                               
                               <Button
    variant="contained" 
    color="secondary"
    style={{marginTop: 10+"px",marginLeft: 30 + "px",height: 55 +"px",width: 100 + "px"}}
    onClick={this.changeVisibility}
    >
        Search</Button>

        {!this.state.show && this.state.showTotal &&<Button
    variant="contained" 
    color="secondary"
    style={{marginTop: 10+"px",marginLeft: 250 + "px",height: 55 +"px",width: 100 + "px"}}
    onClick={this.getAllScans}
    >
        Total scans</Button> }

        {this.state.show && <Link to={'/reports/ALL_BOOKS_TOTAL_SCANS-REPORT.xls'} target="_blank" download><Button
    variant="contained" 
    color="secondary"
    style={{marginTop: 10+"px",marginLeft: 250 + "px",height: 55 +"px",width: 100 + "px"}}
    onClick={this.changeShowTotal.bind(this)}
    >
        Download</Button> </Link>}

        <Link to={'/app/reports/generate/monthly'} style={{textDecoration: 'none', color: 'white'}}>    
        <Button
    variant="contained" 
    color="secondary"
    style={{marginTop: 10+"px",marginLeft: 15 + "px",height: 55 +"px",width: 100 + "px"}}
    >
       Monthly Report</Button>
       </Link>
    </div>
    <div style={{width:55+"%"}}>
    <div style={this.state.showMyComponent ? {} : { display: 'none' }}>
    {this.formatDatesButtons(this.state.dateFrom,this.state.dateTo)}
    </div>
    </div>

            
            </form>
        )
    }
}