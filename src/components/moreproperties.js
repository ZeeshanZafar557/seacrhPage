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
    paper:{
        maxWidth: 610,
        height:210
      
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
            backgroundColor:'#f3f9f8',
        }}>

            <Grid container className={classes.root}
                direction="row"
                justify="center"
                alignItems="center" style={{
                  paddingTop:60
                }} 
                spacing={2} >
                {newArray.map(() => {
                    return (
                       
                        <Grid item xs={12} md={5} style={{
                            marginTop:30,
                            marginLeft:30,
                        boxShadow:'0',
               
                        }}>
                        <Paper className={classes.paper}>
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="https://appshah.com/pro/virgate/img/imageSmall_1.png" 
                                style={{
                                  
                                    width: '100%',
                                    maxWidth: '200px',
                                    height:160,
                                    margin:20,
                                    //im
                                }}/>
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container style={{
                              marginTop:10
                            }}>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography  variant="h6" style={{
                                    color:'#3e535b',
                              
                                  }}>
                                    76 Neon Street
                                  </Typography>
                                  <Typography variant="body2" style={{
                                    color:'#98A3AF',
                                    fontSize:12
                                  }}>
                                    0056 Marvin Land Suite 998
                                  </Typography>
                               
                                  <Typography variant="body1"  style={{
                                    fontWeight:'bold',
                                    color:'#FD615A',
                                    marginTop:5,
                                    fontSize:14
                                  }}>
                                  Year Of Completion &nbsp;&nbsp;2019
                                  </Typography>
                                  <Divider style={{
            marginBottom:20,
            width:'100%',
         height:1,
         background:'#d4d8db',
         margin:5
        }} />
        <Grid
  container
  direction="row"
  justify="space-around"
  alignItems="flex-start"
  style={{marginTop:20}}
>
<Grid item xs={4} >
  <Typography style={{color:'#98A3AF'}}>
    99 years
  </Typography>
  <Typography style={{color:'#98A3AF'}}>
    Land Tenure
  </Typography>
  </Grid>
  <Grid item xs={4} >
  <Typography style={{color:'#98A3AF'}}>
    27281
  </Typography>
  <Typography style={{color:'#98A3AF'}}>
    Site Area
  </Typography>
  </Grid>
  <Grid item xs={4} >
  <Typography style={{color:'#98A3AF'}}>
   3333 
  </Typography>
  <Typography style={{color:'#98A3AF'}}>
NLA 9(SQFT)
  </Typography>
  </Grid>
</Grid>

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
             marginTop:30,
              marginBottom:10,padding:20,
              width:172,
              height:62
            }}>
  View All
</Button>
<br/>
        </Container>
    );
}
