import React from 'react';
import {Dialog,DialogTitle,Grid,TextField,DialogActions,Button, Select, Input, MenuItem} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { updateRegisterBook, getBooksAndRecords } from './folder.repo';
import {getRegisterBookById,listAllFolders} from './folder.repo';
import CheckboxTree from 'react-checkbox-tree';
import {TreeItem,TreeView} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {getBooksAndFolders} from './folder.repo';
import { dispatchAction } from '../../..';

export default class AddPathFolderContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {},
          folders: [],
          registerType: String,
          registerName: String,
          registerYear: String
        }
      }

      componentDidMount(){
        if(this.props.match.params.id){
            this.loadRegisterBook(this.props.match.params.id);
        }
        var temp=this.props.location.search;
        var array=temp.split("&");
        var registerName;
        var registerType;
        var registerYear;
        var i;
        for(i=0 ;i<array.length;i++){
          var individual=array[i].split("=")
          if(i==0)
          registerName=individual[1];
         if(i==1)
         registerType=individual[1];
         if(i==2)
         registerYear=individual[1];
        }
        this.setState({
          registerName: this.registerName,
          registerYear: this.registerYear,
          registerType: this.registerYear
        });
        this.getAllFoders();
      }
      handleFormInput = name => event => {
        var formdata = this.state.data;
        formdata[name] = event.target.value;
          this.setState({
            data: formdata
          });
      }

      getAllFoders = () => {
        listAllFolders().then(response => {
          this.setState({
            folders: response.data,
          });
          console.log(response);
        }).catch(error =>{
          console.log(error);
        });
      }
      loadRegisterBook = (id) => {
        
        getRegisterBookById(id).then(response => {
            this.setState({
                data: response.data,
                linearProgressShown: false,
            });
            console.log(response);
        }).catch(error =>{
            console.log(error);
            this.setState({
                linearProgressShown: false
            });
        });
      }
    handleUpdate = () => {
        this.setState({
            linearProgressShown: true
        });
        updateRegisterBook(this.state.data).then(response => {
            dispatchAction({
                type: "MAIN_LINEAR_PROGRESS_SHOW",
                payload: {
                    snackbarMessage: 'Successfuly updated register book ' + response.data.name,
                    snackbarType: 'success'
                }
            });
            dispatchAction({
              type: "RELOAD ALL REGISTER BOOKS",
              payload: {}
            });
            this.setRedirect();
        }).catch(error => {
            console.log(error);
        });
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
    render(){
        return(
            <Dialog
            open={true}
            maxWidth="md"
            aria-labelledby="max-width-dialog-title"
            aria-describedby="max-width-dialog-description"
            fullWidth={true}
            >
            <DialogTitle id="max-width-dialog-title">{"Add a path folder"}</DialogTitle>
              <Grid container>
                  <Grid  style={{marginTop:10+"px", marginLeft:20+"px"}}>
                  <span style={{height:30+"px"}}>Please insert the desired path for this registry book</span>
                  <TextField
                      style={{marginTop:30+"px"}}
                      autoFocus
                      margin="dense"
                      id="pathFolder"
                      label="Folder Path"
                      variant="outlined"
                      type="text"
                      fullWidth
                      onChange={this.handleFormInput('pathFolder')}
                      value={this.state.data.pathFolder || ''}
                  />
                      <Select
                                      fullWidth={true}
                                       value={this.state.pathFolder}
                                       onChange={this.handleFormInput('pathFolder')}
                                      //  input={<Input name="pathFolder" id="pathFolderId" />}
                                       displayEmpty
                                       style={{marginTop:"10px"}}
                                       variant="outlined"
                                   >
                                      
                                       {
                                            this.state.folders && this.state.folders && this.state.folders &&
                                            this.state.folders.map(e => (
                                               <MenuItem key={e} value={e}>{e}</MenuItem>
                                           ))
                                       }
                                   </Select>
                      </Grid>
                  
              </Grid>
            <DialogActions>
            <Link to="/app/folders" style={{textDecoration: 'none', color: 'white'}}>
                <Button onClick={() => this.handleUpdate()} color="secondary" variant="contained">
                    Save
                </Button>
            </Link>  
            <Link to="/app/folders" style={{textDecoration: 'none', color: 'white'}}>
                <Button onClick="" color="secondary" variant="outlined">
                    Cancel
                </Button>
            </Link>       
            </DialogActions>
          </Dialog>
        )
    }
   
}