import React from 'react';
import {connect} from 'react-redux';
import {
    FormControl,
    Grid,
    Input,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow
} from "@material-ui/core";
import {queryAuditLog} from './audit.repo';
import {Chip} from '@material-ui/core/es';
import format from "date-fns/format";
import {Redirect} from 'react-router-dom';
import {handleLogout, hasRole, refreshToken} from '../../shared/app.properties';


class AuditContainer extends React.Component {

    unauthorized = false;

    state = {
        auditType: "USERS_AUD",
        data: undefined,
        loading: false
    };


    componentWillMount() {
        //I need this when I have login system
        // this.unauthorized = !hasRole('ROLE_ADMINISTRATION');

        // let refreshTime = new Date();
        // refreshTime.setSeconds(refreshTime.getSeconds() + 1800);

        // if (!localStorage.getItem('idm') || !localStorage.getItem('me')) {
        //     handleLogout()
        // } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < new Date()) {
        //     handleLogout()
        // } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < refreshTime) {
        //     refreshToken()
        // }
    }


    componentDidMount() {
        queryAuditLog({
            auditType: this.state.auditType,
            page: 0,
            size: 10
        }).then(res => {
            this.setData(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    handleChangePage = (event, page) => {
        var newQueryPage = page;
        queryAuditLog({
            auditType: this.state.auditType,
            page: newQueryPage,
            size: 10
        }).then(res => {
            this.setData(res.data);
        }).catch(err => {
            console.log(err);
        })
    };

    setData = (data) => {
        console.log(data);
        this.setState({
            data: data
        });
    }

    handleChangeSelectField = name => event => {
        var name1 = name;
        var val = event.target.value;

        queryAuditLog({
            auditType: val,
            page: 0,
            size: 10
        }).then(res => {
            this.setData(res.data);
        }).catch(err => {
            console.log(err);
        })

        this.setState({
            auditType: val
        },

        );
    }

    render() {
        return (

            <div className="audit-log">
                {localStorage.getItem('idm') && localStorage.getItem('me') && this.unauthorized &&
                    <Redirect to="/app/error/unauthorized" />
                }
                <h3 style={{ marginLeft: 30 + 'px' }}>AUDIT LOG</h3>
                <Paper style={{ marginLeft: 30 + "px", marginRight: 30 + 'px', padding: 10 + 'px' }}>
                    <Grid>
                        <Grid xs={12}>
                            {this.state.data &&
                                <Table>
                                    <TableHead>
                                        <TableRow>

                                            <FormControl fullWidth={true} margin="normal" >
                                                <InputLabel shrink htmlFor="age-label-placeholder">
                                                    Select object type<br /><br />
                                                </InputLabel>
                                                <Select
                                                    required={true}
                                                    fullWidth={true}
                                                    value={this.state.auditType}
                                                    onChange={this.handleChangeSelectField('auditType')}
                                                    input={<Input name="auditType" id="auditType-label-placeholder" />}
                                                    displayEmpty
                                                >
                                                    <MenuItem value="USERS_AUD">USERS</MenuItem>
                                                    <MenuItem value="GROUPS_AUD">GROUPS</MenuItem>
                                                    <MenuItem value="SYSTEM_SETTINGS_PROPS_AUD">SYSTEM SETTINGS</MenuItem>
                                                </Select>
                                            </FormControl>

                                            {this.state.data &&
                                                <TablePagination
                                                    rowsPerPageOptions={8}
                                                    colSpan={5}
                                                    count={this.state.data.totalElements}
                                                    rowsPerPage={this.state.data.size}
                                                    page={this.state.data.number}
                                                    onChangePage={this.handleChangePage}
                                                />
                                            }

                                        </TableRow>
                                        <TableRow>

                                            <TableCell style={{ width: 150 + 'px' }}>
                                                Rev ID
                                                    </TableCell>
                                            <TableCell style={{ width: 500 + 'px' }}>
                                                Object value
                                                </TableCell>
                                            <TableCell style={{ width: 300 + 'px' }}>
                                                Action taker
                                                </TableCell>
                                            <TableCell style={{ width: 300 + 'px' }}>
                                                Date and time
                                                </TableCell>
                                            <TableCell style={{ textAlign: 'right' }}>
                                                Action type
                                                    </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            this.state.data.content && this.state.data.content.map(item =>
                                                <TableRow>
                                                    <TableCell>
                                                        {item[1]}
                                                    </TableCell>
                                                    <TableCell style={{ width: 500 + 'px' }}>
                                                        <p style={{ wordWrap: 'break-word', width: 470 + 'px' }}>{JSON.stringify(item)}</p>
                                                    </TableCell>
                                                    <TableCell>
                                                        {item[7]}
                                                    </TableCell>
                                                    <TableCell>
                                                        {format(item[item.length - 1], ['dd.MM.yyyy HH:mm:ss'])}
                                                    </TableCell>
                                                    <TableCell style={{ textAlign: 'right' }}>
                                                        {item[2] == 0 ?
                                                            <Chip style={{ backgroundColor: 'green', color: 'white' }}
                                                                label='CREATE'></Chip>
                                                            : item[2] == 1 ?
                                                                <Chip color='primary' label='UPDATE'></Chip>
                                                                : item[2] == 2 ?
                                                                    <Chip color='secondary' label='DELETE'></Chip>
                                                                    : 'UNKNOWN'}
                                                    </TableCell>
                                                </TableRow>
                                            )

                                        }
                                    </TableBody>
                                </Table>
                            }
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: undefined
    }
};

export default connect(mapStateToProps, ({

}))(AuditContainer);

