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
<DealsClosing name={'Deals Closing'}/>
<Explore/>
<MoreProperty/>
<DealsClosing name={'Invest Around The World'}/>
    </>
  )
}
}