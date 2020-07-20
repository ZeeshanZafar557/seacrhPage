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
                                    width:200,
                                    height:150,
                                    margin:10
                                }}/>
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography  variant="h6" style={{
                                    color:'#3e535b'
                                  }}>
                                    Neon Street
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary">
                                    0056 Marvin Land Suite 998
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary">
                                  Sydeny ,Australla
                                  </Typography>
                                  <Typography variant="body1" color="error" style={{
                                    fontWeight:'bold'
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
>
<Grid item xs={4} >
  <Typography style={{color:'#4c6371'}}>
    99 years
  </Typography>
  <Typography style={{color:'#4c6371'}}>
    Land Tenure
  </Typography>
  </Grid>
  <Grid item xs={4} >
  <Typography style={{color:'#4c6371'}}>
    27281
  </Typography>
  <Typography style={{color:'#4c6371'}}>
    Site Area
  </Typography>
  </Grid>
  <Grid item xs={4} >
  <Typography style={{color:'#4c6371'}}>
   3333 
  </Typography>
  <Typography style={{color:'#4c6371'}}>
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
             marginTop:20,
              marginBottom:10
            }}>
  View More
</Button>
<br/>
        </Container>
    );
}
