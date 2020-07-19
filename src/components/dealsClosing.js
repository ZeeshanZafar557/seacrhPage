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
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme)=>({
cardRoot:{
    maxWidth: 345,
},
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
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
         background:'#375674'
        }} />
    <Grid container className={classes.root} direction="row"
    justify="center"
    alignItems="center">
          <Grid item xs={4}>
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
  alignItems="center"
  spacing={1}
>
        <Grid item xs={10}>
         <Typography>Year Of completetion</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>2019</Typography>
        </Grid>
        <Grid item xs={9}>
         <Typography>Land Tenure</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>99 years</Typography>
        </Grid>
        <Grid item xs={10}>
         <Typography>Site Area</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>27281</Typography>
        </Grid>
        <Grid item xs={10}>
         <Typography>NLA 9(Sqft)</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>3333</Typography>
        </Grid>
        <Divider style={{
            marginBottom:20,
            width:'100%',
         height:1,
         background:'silver',
         margin:5
        }} />
        <Grid item xs={10}>
         <Typography>Carpark Lots</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>900</Typography>
        </Grid>
        <Grid item xs={6}>
         <Typography>Component</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Office, Retail,Hotel</Typography>
        </Grid>
        <Grid item xs={7}>
         <Typography>Majar Tenants</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>Citi bank Allian</Typography>
        </Grid>
        </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
        display:'flex',justifyContent:'center',
        margin:20
      }}>
      <Button variant="contained" color="secondary" >
  Register To Bid
</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
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
  alignItems="center"
  spacing={1}
>
        <Grid item xs={10}>
         <Typography>Year Of completetion</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>2019</Typography>
        </Grid>
        <Grid item xs={9}>
         <Typography>Land Tenure</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>99 years</Typography>
        </Grid>
        <Grid item xs={10}>
         <Typography>Site Area</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>27281</Typography>
        </Grid>
        <Grid item xs={10}>
         <Typography>NLA 9(Sqft)</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>3333</Typography>
        </Grid>
        <Divider style={{
            marginBottom:20,
            width:'100%',
         height:1,
         background:'silver',
         margin:5
        }} />
        <Grid item xs={10}>
         <Typography>Carpark Lots</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>900</Typography>
        </Grid>
        <Grid item xs={6}>
         <Typography>Component</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Office, Retail,Hotel</Typography>
        </Grid>
        <Grid item xs={7}>
         <Typography>Majar Tenants</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>Citi bank Allian</Typography>
        </Grid>
        </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
        display:'flex',justifyContent:'center',
        margin:20
      }}>
      <Button variant="contained" color="secondary" >
  Register To Bid
</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
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
  alignItems="center"
  spacing={1}
>
        <Grid item xs={10}>
         <Typography>Year Of completetion</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>2019</Typography>
        </Grid>
        <Grid item xs={9}>
         <Typography>Land Tenure</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>99 years</Typography>
        </Grid>
        <Grid item xs={10}>
         <Typography>Site Area</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>27281</Typography>
        </Grid>
        <Grid item xs={10}>
         <Typography>NLA 9(Sqft)</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>3333</Typography>
        </Grid>
        <Divider style={{
            marginBottom:20,
            width:'100%',
         height:1,
         background:'silver',
         margin:5
        }} />
        <Grid item xs={10}>
         <Typography>Carpark Lots</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>900</Typography>
        </Grid>
        <Grid item xs={6}>
         <Typography>Component</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Office, Retail,Hotel</Typography>
        </Grid>
        <Grid item xs={7}>
         <Typography>Majar Tenants</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>Citi bank Allian</Typography>
        </Grid>
        </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
        display:'flex',justifyContent:'center',
        margin:20
      }}>
      <Button variant="contained" color="secondary" >
  Register To Bid
</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </Container>
  );
}
