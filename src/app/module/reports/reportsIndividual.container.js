import React from 'react';
import {Dialog,DialogTitle,Grid,DialogActions,Button,Table,TableHead,TableRow,TableCell,TableBody,TablePagination} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getByDate } from './reports.repo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { dispatchAction } from '../../..';


export default class ReportsIndividualContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
          rowsPerPages: 5,
          data: {},
          formdata: {},
          loading: true
        }
        
      }
      componentWillMount(){
         this.listBooksAndRecords(this.props.match.params.date,0,5)
      }
    formatDate = (dateString) => {
        var newDateStringArr = dateString.split('T')[0];
        var dateYear=newDateStringArr.split('-')[0];
        var dateMonth=newDateStringArr.split('-')[1];
        var dateDay=newDateStringArr.split('-')[2];
        return dateDay+" "+dateMonth+" "+dateYear;
        }
        handleChangePage = (event, page) => {
             
            if(this.state.data && this.state.data.data && this.state.data.data.size){
              this.listBooksAndRecords(this.props.match.params.date,page,this.state.data.data.size);
            }else{
              this.listBooksAndRecords(this.props.match.params.date,page, 5);
            }
        }
        onChangeRowsPerPage = (event) => {
            this.setState({
                rowsPerPages: event.target.value
            })
            this.listBooksAndRecords(this.props.match.params.date,0,event.target.value);
        }

    listBooksAndRecords = (date,page,size) => {
            dispatchAction({
              type: "MAIN_LINEAR_PROGRESS_SHOW"
            });
            getByDate(date,page,size).then(response => {
              this.setState({
                data: response,
                loading:false
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
            <Dialog
            open={true}
            maxWidth="md"
            aria-labelledby="max-width-dialog-title"
            aria-describedby="max-width-dialog-description"
            fullWidth={true}
            >
            <DialogTitle id="max-width-dialog-title">{"Report for date "+this.formatDate(this.props.match.params.date)}</DialogTitle>
              <Grid container>
              {this.state.loading && <div  style={{position: 'absolute',marginLeft:'420px',marginTop:'60px'}}>{<CircularProgress size={50} color="secondary" />}</div>}

              <Table>
                <TableHead>
                  <TableRow>
                  <TableCell>
                    Name
                  </TableCell>
                  <TableCell>
                    Number of records on the date
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
                            {item.nameRegisterBook}
                          </TableCell>
                          <TableCell>
                            {item.numberOfRecords}
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
                  
              </Grid>
            <DialogActions> 
            <Link to="/app/reports" style={{textDecoration: 'none', color: 'white'}}>
                <Button onClick="" color="secondary" variant="outlined">
                  Exit
                </Button>
            </Link>       
            </DialogActions>
          </Dialog>
        )
    }
}