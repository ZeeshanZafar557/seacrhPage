import React from 'react';
import TopNav from './components/topNav';
import Banner from './components/banner';
import DealsClosing from './components/dealsClosing';
import Explore from './components/exploreCountry';
import MoreProperty from './components/moreproperties'
export default class App extends React.Component {
render()
{
  return(
    <>
    
<TopNav/>
<Banner/>
<br/>
<br/>
<DealsClosing name={'Deals Closing'} buttonText={'REGISTER TO BID'} array={[1,2,3]}/>
<Explore/>
<MoreProperty/>
<DealsClosing name={'Invest Around The World'} buttonText={'Execute NDA'} array={[1,2,3,4,5,6]}/>
    </>
  )
}
}