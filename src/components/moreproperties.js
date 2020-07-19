import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    
    },
    cardRoot:{
        maxWidth: 250,
      
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 300,

    },
    
   
}));
const newArray = [
    1, 2, 3, 4, 5, 6
]
export default function Explore() {
    const classes = useStyles();

    const theme = useTheme();





    return (
        <Container maxWidth="xl" style={{
            backgroundColor:'#e6ecf7',
          
        }}>

            <Grid container className={classes.root}
                direction="row"
                justify="center"
                alignItems="center" >
                {newArray.map(() => {
                    return (
                       
                        <Grid item xs={5} style={{
                            margin:20
                        }}>
                        <Paper className={classes.paper}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="https://media.timeout.com/images/103812417/630/472/image.jpg" 
                                style={{
                                    width:150,
                                    height:150
                                }}/>
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                                  </Typography>
                                </Grid>
                              </Grid>
                              
                            </Grid>
                          </Grid>
                        </Paper>
                  </Grid>
    
               
                    )
                })}
      

            </Grid>
            <Button variant="outlined" color="secondary" style={{
              display:'flex',
            
              margin:'0px auto',
             marginTop:20,
              marginBottom:10
            }}>
  View More
</Button>
<br/>
        </Container>
    );
}
