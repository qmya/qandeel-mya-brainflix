import React from 'react';
import Header from './components/Header/Header';
import VideoDetail from './components/VideoDetail/VideoDetail';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends React.Component {
    render() {
      return (
        <div>
        {/* <BrowserRouter>
        <Switch>

        <Route path='/' component={Header} />
        <Route path='/VideoDetail' component={VideoDetail} /> */}

            <Header/>
         



            <VideoDetail/>
            {/* </Switch>
            </BrowserRouter> */}
            
            </div>
        );
}
    
}

export default App;