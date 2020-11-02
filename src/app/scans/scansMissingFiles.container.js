import React from 'react';
import {Dialog,DialogTitle,Grid,TextField,DialogActions,Button, Select, Input, MenuItem,Divider,Typography} from '@material-ui/core'
import {Link} from 'react-router-dom';
import { listAllFolders } from '../module/Folders/folder.repo';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {getMissingfiles} from '../module/Folders/folder.repo';


export default class ScansMissingFilesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {},
          folders: [],
          responseMissing: []
        }
      }
      componentWillMount(){
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
      searchForMissingFiles = (pathFolder,totalFiles) =>{
        getMissingfiles(pathFolder,totalFiles).then(response =>
            {
                this.setState({
                    responseMissing: response.data,
                });
            }).catch(error =>{
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
            <DialogTitle id="max-width-dialog-title">{"Search for missing files"}</DialogTitle>
              <Grid container>
                  <div style={{marginLeft:'25px'}}>
                  <span style={{height:15+"px",display:'block'}}>Please choose folder</span>
              <Select
                                        value={this.state.data.pathFolder}
                                       onChange={this.handleFormInput('pathFolder')}
                                       displayEmpty
                                       style={{marginTop:"10px",width:'400px',float:"left"}}
                                       variant="outlined"
                                   >
                                      
                                       {
                                            this.state.folders && this.state.folders && this.state.folders &&
                                            this.state.folders.map(e => (
                                               <MenuItem key={e} value={e}>{e}</MenuItem>
                                           ))
                                       }
                                   </Select>
        <span style={{height:20+"px",display:'block',marginTop:'55px'}}>Please insert the correct amount of scans in the selected folder</span>
        <TextField
        id="total-files"
        label="Total files"
        variant="outlined"
        margin="dense"
        maxWidth={true}
        style={{ marginTop:'10px',borderColor: 'red',display:'block'}}
        inputProps={{ style: { borderColor: 'red'}}}
        required
        onChange={this.handleFormInput('totalFiles')}
        variant="outlined"
      />       
                    <Divider style={{ marginTop: '30px'}}/>
                    <Typography variant="h6">Result:</Typography>


      <List style={{display:'block'}}> 
      {
            this.state.responseMissing  && this.state.responseMissing &&
            this.state.responseMissing.map(e => (
            <ListItem>
               <ListItemText
                primary={e}
                />
              </ListItem>
            ))
            }
            <ListItem>Total missing: {this.state.responseMissing && this.state.responseMissing.length}</ListItem>
          </List>

         </div>
         
           </Grid>
            <DialogActions>
            <Button onClick={this.searchForMissingFiles.bind(this,this.state.data.pathFolder,this.state.data.totalFiles)}
             color="secondary" variant="contained">
                    Search
                </Button>
            <Link to="/app/scans" style={{textDecoration: 'none', color: 'white'}}>
                <Button onClick="" color="secondary" variant="outlined">
                    Cancel
                </Button>
            </Link>  
            </DialogActions>
          </Dialog>
        )
    }
}