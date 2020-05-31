import React from 'react';
import Header from '../src/components/Header/Header.js';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <div>
       <BrowserRouter>
        <Header/>
        <Switch>
       <Route path ="/" exact component = {HomePage}/>
       <Route path="/UploadPage" component={UploadPage} />
       <Route path="/:id" component = {HomePage} />
        </Switch>
            </BrowserRouter>
            
            </div>
        );
}
    
}

export default App;