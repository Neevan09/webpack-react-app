import React, { Component } from 'react' 
import { Link, Route } from 'react-router-dom'
import Players from './containers/Players';
import Football from './containers/Football';
import asyncComponent from './hoc/asyncComponent';

const AsyncFootball = asyncComponent(() => {
    return import('./containers/Football.js');
});

class App extends Component{
    render(){
        return(
            <div>
                <div>
                <Link to="/">Players</Link>
                <Link to="/football">Football</Link>
                </div>
                <div>
                <Route path="/" exact component={Players} />
                <Route path="/football" component={AsyncFootball} />
                </div>
            </div>   
        );
    }
}

export default App;