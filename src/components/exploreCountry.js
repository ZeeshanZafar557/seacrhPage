import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ArrowRight from '@material-ui/icons/ArrowRightSharp';
import ArrowLeft from '@material-ui/icons/ArrowLeftSharp'
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
    background: "#F2F5F5",
    margin:"0 10px",
    
    borderRadius: "4px",
    height: 530,
};

let imgStyle = {
  width:290,
    height: 441,
    
};

let textBoxStyle = {
  
    width: "70%", 
    color: "#1C4050",
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

let rBtnCpnt = (
<ArrowRight style={{
  backgroundColor:'black',
  padding:10,
  borderRadius:50,
  position:'absolute',
  right:120,
color:'#fff'
}}/>
);

let lBtnCpnt = (<ArrowLeft style={{
  backgroundColor:'black',
  padding:10,
  borderRadius:50,
  position:'absolute',
  left:120,
color:'#fff'
}} />);


        

let scientistsCard = (<CarouselSlider 
    sliderBoxStyle = {{height: "650px", width: "85%", background: "transparent"}} 
    accEle = {{dots: false}}
    slideCpnts = {scientists} 
    itemsStyle = {itemsStyle} 
    buttonSetting = {{placeOn: 'middle-outside'}}
    rBtnCpnt = {rBtnCpnt}
    lBtnCpnt = {lBtnCpnt}
   
/>);
  return (
    <Container maxWidth="xl" className={classes.containerMargin}>
        <Typography variant="h1" component="h1" style={{
            marginTop:20,
           color:'#1E495B',
           marginLeft:90,
           fontSize:40
        }}>
            Explore Country Opportunities
        </Typography>
        <Divider style={{
            marginBottom:20,
            width:50,
         height:3,
         background:'#1E495B',
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
