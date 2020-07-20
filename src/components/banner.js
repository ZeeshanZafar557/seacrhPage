import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Image from '../assets/banner1.jpg'; // Import using relative path
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'fontsource-roboto';
import IconButton from '@material-ui/core/IconButton';
import SeacrhIcon from '@material-ui/icons/SearchOutlined';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat:'no-repeat',
        width:'100%',
        backgroundSize:'cover',
        height:450
    }
};
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      
      color: theme.palette.text.secondary,
      height:50,

    },
  }));




export default function SimpleContainer() {
    const classes = useStyles();
  return (
    <Paper style={styles.paperContainer}>
    <Typography style={{
        color:'#fff',
        paddingTop:70,
        paddingLeft:90,
        fontSize:60,
       fontWeight:'200',
       letterSpacing:1.25271,
     
    }}>
  Looking...
</Typography>

<Typography   style={{
           color:'#fff',
         
           paddingLeft:90,
           fontSize:60,
          fontWeight:'200',
          letterSpacing:1.25271,
         
    }}>
 for the right house for you !
</Typography>
<Divider style={{
            marginBottom:20,
            width:100,
         height:4,
         background:'#fff',
         marginLeft:90,
         marginTop:20
        }} />
<div className={classes.root}>
   
      <Grid container direction="row"
  justify="center"
  alignItems="start" style={{
     position:'absolute',
     top:460,
    
  }}>
    
        <Grid item md={3}>
        <Hidden only={['sm','xs']}>
          <Paper className={classes.paper}>
              <Typography style={{
                color:'#375674',
                fontWeight:'bold'
              }}>
               
              Search and Find
              </Typography>
              <Typography>
              Type Keyword Address
              </Typography>
             
          </Paper>
          </Hidden>
        </Grid>
        <Grid item md={3}>
        <Hidden only={['sm','xs']}>
          <Paper className={classes.paper}>
         
              <Typography style={{
                color:'#375674',
                fontWeight:'bold'
              }}>
              Location
          
              </Typography>
              <Typography>
              Singapure
              </Typography>
          </Paper>
          </Hidden>
        </Grid>
        <Grid item md={3}>
        <Hidden only={['sm','xs']}>
          <Paper className={classes.paper}>
       
              <Typography style={{
                color:'#375674',
                fontWeight:'bold'
              }}>
              Type
             
              </Typography>
              <Typography>
              Select
              </Typography>
          </Paper>
          </Hidden>
        </Grid>
        <Grid item xs={1}  justify="center" >
        <Hidden only={['sm','xs']}>
          <Paper className={classes.paper} style={{
            background:'#fb635c',
           
        }}>
          <IconButton color="#fff" aria-label="Search" style={{
              color:'#fff',
         marginLeft:10
          }} >
          <SeacrhIcon />
        </IconButton>
          </Paper>
          </Hidden>
        </Grid>
      </Grid>
     
    </div>

</Paper>
  );
}
