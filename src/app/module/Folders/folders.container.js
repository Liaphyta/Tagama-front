import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles,makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { getBooksAndFolders, deletePathFolder } from './folder.repo';
import {Table, TableHead, TableRow,TableCell,TableBody,TablePagination} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { fileURLToPath } from 'url';
import { dispatchAction } from '../../..';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);
  
  function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
  }
  
 export default class FoldersContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
          rowsPerPages: 5,
          data: {},
          formdata: {
              registerName: undefined, 
              registerYear: undefined,
              registerType: undefined 
          }
        }
      }
        onClick = (type,year,name,page,size) => {
        this.listBooksAndFolders(type,year,name,page,size)
    }
        // onClick1 = (id) => {
        //   this.deletePathFolders(id);
        // }
    componentDidMount(){
      this.fileSelector = buildFileSelector();
    }
    handleFileSelect = (e) => {
      e.preventDefault();
      this.fileSelector.click();
    }
        handleStatus(props){
            if(props==1)
            return "Венчани";
            else if(props==0)
            return "Родени";
            else if(props==2)
            return "Умрени";
        }
        handleFormInput = name => event => {      
            var formdata = this.state.formdata;
            formdata[name] = event.target.value;
              this.setState({
                formdata: formdata
              });
          }
          handleChangePage = (event, page) => {
             
            if(this.state.data && this.state.data.data && this.state.data.data.size){
              this.listBooksAndFolders(this.state.formdata.registerType,this.state.formdata.registerYear,this.state.formdata.registerName,page,this.state.data.data.size);
            }else{
              this.listBooksAndFolders(page, 5);
            }
        }
        onChangeRowsPerPage = (event) => {
            this.setState({
                rowsPerPages: event.target.value
            })
            this.listBooksAndFolders(this.state.formdata.registerType,this.state.formdata.registerYear,this.state.formdata.registerName,0, event.target.value);
        }
         
      
      listBooksAndFolders = (type,year,name,page, size) => {
        // console.log(this.state.formdata.registerName);
        // console.log(this.state.formdata.registerType);
        // console.log(this.state.formdata.registerYear);
        dispatchAction({
          type: "MAIN_LINEAR_PROGRESS_SHOW"
        });
        getBooksAndFolders(type,year,name,page,size).then(response => {
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
      deletePathFolders = (id) => {
        // console.log(this.state.formdata.registerName);
        // console.log(this.state.formdata.registerType);
        // console.log(this.state.formdata.registerYear);
        dispatchAction({
          type: "MAIN_LINEAR_PROGRESS_SHOW"
        });
        deletePathFolder(id).then(response => {
          this.setState({
            data: response
          },
          dispatchAction({
            type: "MAIN_LINEAR_PROGRESS_HIDE"
          })
          );
          this.listBooksAndFolders(this.state.formdata.registerType,this.state.formdata.registerYear,this.state.formdata.registerName,0,5);
        }).catch(error => {
          dispatchAction({
            type: "MAIN_LINEAR_PROGRESS_HIDE"
          });
          console.log(error);
        });
      }
   
        render(){
        
            return (
        <form style={{marginLeft: '30px'}}><TextField
        id="standard-input"
        label="Name Register Book"
        variant="outlined"
        style={{marginTop: 50 + "px", borderColor: 'red'}}
        inputProps={{ style: { borderColor: 'red'}}}
        // value={values.name}
        required
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
        required
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
        required
        margin="normal"
        variant="outlined"
        onChange={this.handleFormInput('registerType')}
      />
      <Button
      onClick={this.listBooksAndFolders.bind(this,this.state.formdata.registerType,this.state.formdata.registerYear,this.state.formdata.registerName,0,5)}
      variant="contained" 
      color="secondary"
      disabled={!this.state.formdata.registerName || !this.state.formdata.registerType || !this.state.formdata.registerYear}
      style={{marginTop: 50 + "px", marginLeft: 20 + "px",height: 55 +"px",width: 100 + "px"}}
      >
          Search</Button>
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
                            <b>{item.pathFolder? item.pathFolder : 'No folder'}</b>
                          </TableCell>
                          <TableCell>
                          <Button
                            variant="contained" 
                            color="secondary"
                            onClick={this.deletePathFolders.bind(this,item.id)}
                            >Delete Folder
                            </Button>
                          </TableCell>
                          <TableCell>
                          <Link to={'/app/folders/path/'+item.id+'?name='+item.name+'&type='+item.registerType+'&year='+item.registerYear} style={{textDecoration: 'none', color: 'white'}}>
                              <Button
                              onClick=""
                              variant="contained" 
                              color="secondary"
                              type="file"
                              >Add Folder
                              </Button>
                          </Link>
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

      </form>
            )
    }
}