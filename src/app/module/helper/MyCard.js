import React from 'react'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Card } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';



export default class MyCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
        }
    }

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded })
    };

    render() {

        let expanded = this.state.expanded
        return (
            <Card style={{ padding: '0px' }}>
                <CardContent style={{ paddingTop: '', padding: '15px 10px 0px 15px', display: 'flex', }}>
                    <Typography variant="body2" style={{ fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 700, fontSize: '20px', lineHeight: '1.6em' }}>
                        {this.props.carddescription}
                    </Typography>
                    <IconButton style={{ paddingTop: '5px', marginLeft: window.innerWidth > 1223 ? '5%' : '0px' }}
                        onClick={this.handleExpandClick}
                    >
                        <AddIcon style={{ transform: 'scale(1.4)', fill: 'rgba(21,195,154,255)' }} />
                    </IconButton>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph style={{ fontFamily: 'Merriweather,Georgia,"Times New Roman",serif', fontWeight: 700, fontSize: '15px', lineHeight: '1.2em' }}>
                            {this.props.cardexpandedtext}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}