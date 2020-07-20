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
    maxWidth: 336,
  
},
  media: {
    height: 441,
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
    background: "#f7f7f7",
    margin:"0 10px",
    
    borderRadius: "4px",
    height: 530,
};

let imgStyle = {
  width:336,
    height: 441,
    
};

let textBoxStyle = {
  
    width: "70%", 
    color: "#1E495B",
    background:'transparent',
    fontSize: "20px",
    fontWeight:'600',
    textAlign:'left',
    top:470
};

let textBoxStyle2 = {
    width: "70%",
    top: "500px",
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
    sliderBoxStyle = {{height: "650px", width: "80%", background: "transparent"}} 
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
           color:'#375674',
           marginLeft:90
        }}>
            Explore Country Opportunities
        </Typography>
        <Divider style={{
            marginBottom:20,
            width:50,
         height:5,
         background:'#375674',
         marginLeft:90,
         marginTop:20
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
