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
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat:'no-repeat',
        width:'100%',
        backgroundSize:'cover',
        height:400
    }
};
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
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
        paddingLeft:70,
        fontSize:50,
       
    }}>
  Looking...
</Typography>

<Typography   style={{
        color:'#fff',
    
        paddingLeft:70,
        fontSize:50,
    }}>
 for the right house for you !
</Typography>
<div className={classes.root}>
   
      <Grid container direction="row"
  justify="center"
  alignItems="center" style={{
     position:'absolute',
     top:460-50
  }}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Typography>
              Search and Find<br/>
             Titile Keyword Address
              </Typography>
             
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
         
              <Typography>
              Location<br/>
              Singapure
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
       
              <Typography>
              Type<br/>
              Select
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1}  justify="center" >
          <Paper className={classes.paper} style={{
            background:'#fb635c',
           
        }}>
          <IconButton color="#fff" aria-label="Search" style={{
              color:'#fff'
          }} >
          <SeacrhIcon />
        </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <Grid container direction="row"
  justify="center"
  alignItems="center">

      </Grid>
    </div>

</Paper>
  );
}
