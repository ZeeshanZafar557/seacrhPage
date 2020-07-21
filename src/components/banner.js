import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Image from '../assets/banner1.png'; // Import using relative path
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'fontsource-roboto';
import IconButton from '@material-ui/core/IconButton';
import SeacrhIcon from '@material-ui/icons/SearchOutlined';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat:'no-repeat',
        width:'100%',
        backgroundSize:'cover',
        height:470,
      paddingBottom: 48,
   
    },
   
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
    <Typography variant="h1" style={{
        color:'#fff',
        paddingTop:138,
        paddingLeft:120,
        fontSize:68,
     
       letterSpacing:1.25271,
       textTransform:'initial'
     
    }} >
  Looking...
</Typography>

<Typography variant="h1"  style={{
           color:'#fff',
         
           paddingLeft:120,
           fontSize:60,
        
          letterSpacing:1.25271,
         
    }}>
 for the right house for you !
</Typography>
<Divider style={{
            marginBottom:20,
            width:100,
         height:4,
         background:'#fff',
         marginLeft:120,
         marginTop:20
        }} />


      <Grid container direction="row"
  justify="center"
  alignItems="start" style={{
     position:'absolute',
     top:530,
    
  
  }}>
    
        <Grid item md={3} style={{
           boxShadow:'5px 10px 8px #e8e8e8'
        }}>
        <Hidden only={['sm','xs']}>
          <Paper className={classes.paper}>
              <Typography style={{
                color:'#1C4050',
                fontWeight:'bold'
              }}>
               
              Search and Find
              </Typography>
              <input type="text"  placeholder={'Title, keyword, address, zip or property id ...'}
            
              style={{
                width:270,
                border: 'transparent',
              
                padding: '10px 0px',
                margin: 0
              }}/>
             
          </Paper>
          </Hidden>
        </Grid>
        <Grid item md={3} style={{
           boxShadow:'5px 10px 8px #e8e8e8'
        }}>
        <Hidden only={['sm','xs']}>
          <Paper className={classes.paper}>
         
              <Typography style={{
                color:'#1C4050',
                fontWeight:'bold'
              }}>
              Location
          
              </Typography>
             
              <input type="text"  placeholder={' Singapore, Singapore '}
            
            style={{
              width:270,
              border: 'transparent',
            
              padding: '10px 0px',
              margin: 0
            }}/>
          </Paper>
          </Hidden>
        </Grid>
        <Grid item md={2} style={{
           boxShadow:'5px 10px 8px #e8e8e8'
        }}>
        <Hidden only={['sm','xs']}>
          <Paper className={classes.paper}>
       
              <Typography style={{
                color:'#1C4050',
                fontWeight:'bold'
              }}>
              Type
             
              </Typography>
              <select style={{
width:'100%',
border:'transparent',
color:'gray'
              }}>
    <option value="0">Select</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    
  </select>
          </Paper>
          </Hidden>
        </Grid>
        <Grid item xs={1}  justify="center" >
        <Hidden only={['sm','xs']}>
          <Paper  style={{
            background:'#fb635c',
           width:100,height:'100%',
           display:'flex',
justifyContent:'center'
        }}>
          <IconButton color="#fff" aria-label="Search" style={{
              color:'#fff',
       display:'flex',
         
          }} >
          <SeacrhIcon />
        </IconButton>
          </Paper>
          </Hidden>
        </Grid>
      </Grid>
     


</Paper>
  );
}
