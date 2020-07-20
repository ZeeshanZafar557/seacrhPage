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

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import CarouselSlider from "react-carousel-slider";
import jsonData from './data'
const useStyles = makeStyles((theme)=>({
cardRoot:{
    maxWidth: 250,
  
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
let data = [
    {
        des: "1",
        imgSrc: "https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/line-principles-of-photography.jpg"
    },
    {
        des: "2",
        imgSrc: "https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/line-principles-of-photography.jpg"
    }
];
export default function Explore() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  let itemsStyle = {
    padding: "0px",
    background: "#e6e1e2",
    margin:"0 10px",
    boxShadow: "1px 1px 1px 1px #9E9E9E",
    borderRadius: "4px"
};

let imgStyle = {
    height: "70%",
    borderBottom: "1px solid #9E9E9E"
};

let textBoxStyle = {
    width: "70%",
    
    color: "#375674",
    background:'transparent',
    fontSize: "20px",
    
    fontWeight:'bold',
    textAlign:'left'
};

let textBoxStyle2 = {
    width: "70%",
    top: "280px",
    color: "black",
    background:'transparent',
    fontSize: "12px",
   textAlign:'left'
  
};

let scientists = jsonData.Scientists.items.map((item, index) => 
    <div key = {index} >
        <img style = {imgStyle} src = {item.imgSrc} ></img>
        <p style = {textBoxStyle} >{item.name}</p>
      
        <p style = {textBoxStyle2} >{item.des}</p>
    </div>
);

let rBtnCpnt = (<div >
    
</div>);

let lBtnCpnt = (<div >
   
</div>);


        

let scientistsCard = (<CarouselSlider 
    sliderBoxStyle = {{height: "400px", width: "80%", background: "transparent"}} 
    accEle = {{dots: false}}
    slideCpnts = {scientists} 
    itemsStyle = {itemsStyle} 
    buttonSetting = {{placeOn: 'middle-outside'}}
    rBtnCpnt = {rBtnCpnt}
    lBtnCpnt = {lBtnCpnt}
   
/>);
  return (
    <Container maxWidth="xl" className={classes.containerMargin}>
        <Typography variant="h3" component="h2" style={{
            marginTop:20,
           color:'#375674'
        }}>
            Explore Country Opportunities
        </Typography>
        <Divider  component="li" style={{
            marginBottom:20,
            width:50,
         height:5,
         background:'#375674'
        }} />
    <Grid container className={classes.root} 
 
 >
         
      
         <div style = {{position:"relative", margin: "0 auto", width: "100%"}} >
                                {scientistsCard}
                            </div>
    
  
    </Grid>
    </Container>
  );
}
