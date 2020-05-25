import React from 'react';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';




class App extends React.Component {
    render() {
      return (
        <div>
          
        <BrowserRouter>
        <Switch>


       <Route path ="/" exact component = {HomePage}/>
       <Route path="/HomePage" component={HomePage} />
       <Route path="/UploadPage" component={UploadPage} />
       <Route path="/videos/:id" component = {HomePage} />
      <Route path="/videos" component = {HomePage} /> 
        </Switch>
            </BrowserRouter>
            
            </div>
        );
}
    
}

export default App;