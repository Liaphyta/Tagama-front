import React from 'react';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { getBooksAndRecords } from '../module/Folders/folder.repo';
import {Table, TableHead, TableRow,TableCell,TableBody,TablePagination} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { dispatchAction } from '../..';





export default class ScansContainer extends React.Component {
    
    constructor(props) {
      super(props)
      this.state ={
        rowsPerPages: 5,
        data: {},
        formdata: {
            registerName: undefined,
            registerYear: undefined,
            registerType: undefined
        },
        dateFrom: new Date(),
        dateTo: new Date(),
      }
      
    }
    handleFormInput = name => event => {      
      var formdata = this.state.formdata;
      formdata[name] = event.target.value;
        this.setState({
          formdata: formdata
        });
    }
    onChangeRowsPerPage = (event) => {
      this.setState({
          rowsPerPages: event.target.value
      })
      console.log(this.state.rowsPerPages)
      this.listBooksAndRecords(this.state.formdata.registerType,this.state.formdata.registerYear,
        this.state.formdata.registerName,this.state.dateFrom.toISOString(),
        this.state.dateTo.toISOString(),0,event.target.value);
    }
    handleChangePage = (event, page) => {
             
      if(this.state.data && this.state.data.data && this.state.data.data.size){
        this.listBooksAndRecords(this.state.formdata.registerType,this.state.formdata.registerYear,
          this.state.formdata.registerName,this.state.dateFrom.toISOString(),
          this.state.dateTo.toISOString(),page,this.state.data.data.size);
      }else{
        this.listBooksAndRecords(page, 5);
      }
  }
    handleChangeDateField = name => event => {
        this.setState({
            [name]: event
        });
    }
    formatDate = (dateString) => {
      var newDateStringArr = dateString.split('T');
      newDateStringArr[1] = newDateStringArr[1].split('.000Z')[0];
      return newDateStringArr[0] + ' ' + newDateStringArr[1];
  }
    handleStatus(props){
      if(props==1)
      return "Венчани";
      else if(props==0)
      return "Родени";
      else if(props==2)
      return "Умрени";
  }
    listBooksAndRecords = (type,year,name,dateFrom,dateTo,page, size) => {
      // console.log(this.state.formdata.registerName);
      // console.log(this.state.formdata.registerType);
      // console.log(this.state.formdata.registerYear);
      dispatchAction({
        type: "MAIN_LINEAR_PROGRESS_SHOW"
      });
      getBooksAndRecords(type,year,name,dateFrom,dateTo,page,size).then(response => {
        this.setState({
          data: response
        },
        dispatchAction({
          type: "MAIN_LINEAR_PROGRESS_HIDE"
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
          <form style={{marginLeft: '30px'}}><div><TextField
      id="standard-input"
      label="Name Register Book"
      variant="outlined"
      style={{marginTop: 50 + "px", borderColor: 'red'}}
      inputProps={{ style: { borderColor: 'red'}}}
      // value={values.name}
      // onChange={handleChange('name')}
      onChange={this.handleFormInput('registerName')}
  
      margin="normal"
      variant="outlined"
    />
    <TextField
      id="standard-input"
      label="Year"
      variant="outlined"
      style={{marginTop: 50 + "px",marginLeft: 20 + "px", borderColor: 'red'}}
      inputProps={{ style: { borderColor: 'red'}}}
      // value={values.name}
      onChange={this.handleFormInput('registerYear')}
      margin="normal"
      variant="outlined"
    />
    <TextField
      id="standard-input"
      label="Type Register Book"
      variant="outlined"
      style={{marginTop: 50 + "px",marginLeft: 20 + "px", borderColor: 'red'}}
      inputProps={{ style: { borderColor: 'red'}}}
      // value={values.name}
      margin="normal"
      variant="outlined"
      onChange={this.handleFormInput('registerType')}
    />
    <Button
    variant="contained" 
    color="secondary"
    style={{marginTop: 50 + "px", marginLeft: 20 + "px",height: 55 +"px",width: 100 + "px"}}
    onClick={this.listBooksAndRecords.bind(this,this.state.formdata.registerType,this.state.formdata.registerYear,
      this.state.formdata.registerName,this.state.dateFrom.toISOString(),
      this.state.dateTo.toISOString(),0,5)}
      disabled={!this.state.formdata.registerName || !this.state.formdata.registerType || !this.state.formdata.registerYear}

    >
        Search</Button>
        <Link to={'/app/scans/missingFiles'} style={{textDecoration: 'none', color: 'white'}}>
        <Button
    variant="contained" 
    color="secondary"
    style={{marginTop: 50+"px",marginLeft: 100 + "px",height: 55 +"px",width: 100 + "px"}}
    >
        Missing Scans</Button>
        </Link>
        </div><div>
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
          
       </div>
        <div>
        <Table>
                <TableHead>
                  <TableRow>
                  <TableCell>
                    Name
                  </TableCell>
                  <TableCell>
                      Year
                  </TableCell>
                  <TableCell>
                    Type
                  </TableCell>
                  <TableCell>
                  Folder path
                  </TableCell>
                  <TableCell>
                    Number of records
                  </TableCell>
                  </TableRow>
                </TableHead>
                
                <TableBody>
                  {
                    this.state.data && this.state.data.data && this.state.data.data.content &&
                    this.state.data.data.content.map(item => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell>
                            {item.name}
                          </TableCell>
                          <TableCell>
                            {item.registerYear}
                          </TableCell>
                          <TableCell>
                            {this.handleStatus(item.registerType)}
                          </TableCell>
                          <TableCell>
                            <b>{item.pathFolder ? item.pathFolder : 'No folder'}</b>
                          </TableCell>
                          <TableCell>
                            {item.numberOfRecords ? item.numberOfRecords : '0'}
                          </TableCell>
                        </TableRow>
                    )})
                  }
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={this.state.data.data ? this.state.data.data.totalElements : 0}
                rowsPerPage={this.state.rowsPerPages}
                page={this.state.data.data ? this.state.data.data.number : 0}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.onChangeRowsPerPage}
                backIconButtonProps={{
                  'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                  'aria-label': 'Next Page',
                }}
              />   
        </div>
        </form>
      )
  }
  }