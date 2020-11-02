import React from 'react';
import {Button,Dialog,DialogTitle,Grid,DialogActions} from '@material-ui/core';
import { Link } from 'react-router-dom';
import MonthYearPicker from 'react-month-year-picker';
import { Page, Text, View, Document, StyleSheet,PDFDownloadLink } from '@react-pdf/renderer';
import { getByDateReport } from './reports.repo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { dispatchAction } from '../../..';




export default class MonthlyReportContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
          show:false,
          data: {},
          formdata: {},
          month: new Date().getMonth(),
          year: new Date().getFullYear(),
          loading:false
        }
        
      }
      listMonthlyReport = (month,year) => {
        dispatchAction({
          type: "CIRCULAR_PROGRESS_SHOW"
        });
        this.setState({
          loading:true
        })
        getByDateReport(month,year).then(response => {
          this.setState({
            data: response,
            show:true,
            loading:false
          },
          dispatchAction({
            type: "CIRCULAR_PROGRESS_HIDE"
          })
          );
          console.log(response);
        }).catch(error => {
          dispatchAction({
            type: "MAIN_LINEAR_PROGRESS_HIDE"
          });
          console.log(error);
        });
      }   

    render(){
        return (
            <Dialog
            open={true}
            maxWidth="md"
            aria-labelledby="max-width-dialog-title"
            aria-describedby="max-width-dialog-description"
            fullWidth={true}
            >
            <DialogTitle id="max-width-dialog-title">{"Monthly Report"}</DialogTitle>
              <Grid container>
            <MonthYearPicker
            selectedMonth={this.state.month}
            selectedYear={this.state.year}
            minYear={2000}
            maxYear={2030}
            onChangeYear={year => this.setState({ year: year })}
            onChangeMonth={month => this.setState({ month: month })}
            />
            {this.state.loading && <div  style={{position: 'absolute', paddingLeft:'410px',paddingTop:'200px',width:'100%'}}>{<CircularProgress size={150} color="secondary" />}</div>}

              </Grid>
            
            <DialogActions>
            {/* <a href={'C:\Users\User\Desktop\reports'+(this.state.month+1)+'-'+this.state.year+'-REPORT.xls'} download>Download</a> */}
              {this.state.show && <Link to={'/reports/'+this.state.month+'-'+this.state.year+'-REPORT.xls'} target="_blank" download>
                <Button color="secondary" variant="contained">Download
                  </Button>
                  </Link>
              
              }
            {/* <Link to={'/app/reports'} style={{textDecoration: 'none', color: 'white'}}> */}

                <Button color="secondary" variant="contained"
                onClick={this.listMonthlyReport.bind(this,this.state.month,this.state.year)}>
                  {console.log(this.state.show)}
                  Generate
                </Button>
            {/* </Link>     */}
            <Link to={'/app/reports'} style={{textDecoration: 'none', color: 'white'}}>
                <Button color="secondary" variant="outlined">
                  Exit
                </Button>
            </Link>       
            </DialogActions>
          </Dialog>
        )
    }
}