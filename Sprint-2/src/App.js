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
       <Route path="/UploadPage" component={UploadPage} />
       <Route path="/:id" component = {HomePage} />
        </Switch>
            </BrowserRouter>
            
            </div>
        );
}
    
}

export default App;