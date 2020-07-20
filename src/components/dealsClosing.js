import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme)=>({
cardRoot:{
    maxWidth: 360,
    height:668

},
  media: {
    height: 230,
    width:360
  },
  root: {
    flexGrow: 1,
  },

  control: {
    padding: theme.spacing(2),
  },
  containerMargin:{
      marginTop:70
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);


  return (
    <Container maxWidth="lg" className={classes.containerMargin}>
        <Typography variant="h3" component="h2" style={{
            marginTop:20,
           color:'#375674'
        }}>
            {props.name}
        </Typography>
        <Divider  style={{
            marginBottom:20,
            width:50,
         height:5,
         background:'#375674',
         marginTop:20,
         marginBottom:40
        }} />
    <Grid container className={classes.root} direction="row"
    justify="center"
    alignItems="center">
          <Grid item xs={12} md={4}>
    <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../assets/building1.jpg')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Robinson 77
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Robinson 77s are a widespread group
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Robinson 77s ar
          </Typography>
          <Divider style={{
            marginBottom:20,
            width:'100%',
         height:1,
         background:'silver',
         margin:5,
        }} />
        
     <Grid
  container
  direction="row"
  justify="center"

  spacing={1}
>
 
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
        <Typography>Year Of completetion</Typography>
        <Typography >2019</Typography>
        </div>
        </Grid>
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
            <Typography>Land Tenure</Typography>
            <Typography >99 year</Typography>
          </div>
       
        </Grid>
       
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>Site Area</Typography>
          <Typography>27281</Typography>
          </div>
         
        </Grid>
        
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>NLA 9(Sqft)</Typography>
          <Typography>3333</Typography>
          </div>
         
        </Grid>
       
        <Divider style={{
            marginBottom:20,
            width:'100%',
         height:1,
         background:'silver',
         margin:5
        }} />
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>Carpark Lots</Typography>
          <Typography>900</Typography>
        </div>
         
        </Grid>
        
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
             <Typography>Component</Typography>
             <Typography >Office, Retail,Hotel</Typography>
          </div>
      
        </Grid>
       
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>Majar Tenants</Typography>
          <Typography>Citi bank Allian</Typography>
          </div>
         
        </Grid>
        
        </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
        display:'flex',justifyContent:'center',
        margin:5
      }}>
      <Button variant="contained" style={{
        background:'#FD615A',
        color:'#fff',
        width:167,
        height:50,
        fontSize:14
      }} >
  Register To Bid
</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../assets/building1.jpg')}
          title="Contemplative Reptile"
        />
               <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Robinson 77
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Robinson 77s are a widespread group
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Robinson 77s ar
          </Typography>
          <Divider style={{
            marginBottom:20,
            width:'100%',
         height:1,
         background:'silver',
         margin:5
        }} />
        
     <Grid
  container
  direction="row"
  justify="center"

  spacing={1}
>
 
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
        <Typography>Year Of completetion</Typography>
        <Typography >2019</Typography>
        </div>
        </Grid>
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
            <Typography>Land Tenure</Typography>
            <Typography >99 year</Typography>
          </div>
       
        </Grid>
       
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>Site Area</Typography>
          <Typography>27281</Typography>
          </div>
         
        </Grid>
        
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>NLA 9(Sqft)</Typography>
          <Typography>3333</Typography>
          </div>
         
        </Grid>
       
        <Divider style={{
            marginBottom:20,
            width:'100%',
         height:1,
         background:'silver',
         margin:5
        }} />
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>Carpark Lots</Typography>
          <Typography>900</Typography>
        </div>
         
        </Grid>
        
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
             <Typography>Component</Typography>
             <Typography >Office, Retail,Hotel</Typography>
          </div>
      
        </Grid>
       
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>Majar Tenants</Typography>
          <Typography>Citi bank Allian</Typography>
          </div>
         
        </Grid>
        
        </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
        display:'flex',justifyContent:'center',
        margin:5
      }}>
      <Button variant="contained" style={{
        background:'#FD615A',
        color:'#fff',
        width:167,
        height:50,
        fontSize:14
      }} >
  Register To Bid
</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../assets/building1.jpg')}
          title="Contemplative Reptile"
        />
               <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Robinson 77
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Robinson 77s are a widespread group
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Robinson 77s ar
          </Typography>
          <Divider style={{
            marginBottom:20,
            width:'100%',
         height:1,
         background:'silver',
         margin:5
        }} />
        
     <Grid
  container
  direction="row"
  justify="center"

  spacing={1}
>
 
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
        <Typography>Year Of completetion</Typography>
        <Typography >2019</Typography>
        </div>
        </Grid>
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
            <Typography>Land Tenure</Typography>
            <Typography >99 year</Typography>
          </div>
       
        </Grid>
       
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>Site Area</Typography>
          <Typography>27281</Typography>
          </div>
         
        </Grid>
        
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>NLA 9(Sqft)</Typography>
          <Typography>3333</Typography>
          </div>
         
        </Grid>
       
        <Divider style={{
            marginBottom:20,
            width:'100%',
         height:1,
         background:'silver',
         margin:5
        }} />
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>Carpark Lots</Typography>
          <Typography>900</Typography>
        </div>
         
        </Grid>
        
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
             <Typography>Component</Typography>
             <Typography >Office, Retail,Hotel</Typography>
          </div>
      
        </Grid>
       
        <Grid item xs={12}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography>Majar Tenants</Typography>
          <Typography>Citi bank Allian</Typography>
          </div>
         
        </Grid>
        
        </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
        display:'flex',justifyContent:'center',
        margin:5
      }}>
   <Button variant="contained" style={{
        background:'#FD615A',
        color:'#fff',
        width:167,
        height:50,
        fontSize:14
      }} >
  Register To Bid
</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    <Divider style={{
            marginTop:150,
            marginBottom:150,
            width:'100%',
         height:1,
         background:'silver'
        }} />
    </Container>
  );
}
