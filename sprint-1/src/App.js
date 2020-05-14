import React from 'react';

import Header from './components/Header/Header';
class App extends React.Component{
    state = {
        header:Header
    }
render(){
    return ( 
        <>
            <Header/>
                
            
            </>
        );
}
    
}

export default App;