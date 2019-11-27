import React, { Component } from 'react'
import FootballImage from '../components/Football/Football'

class Football extends Component{
    render(){
        return(
            <div>
                <h1>Football Match</h1>
                <FootballImage />
            </div>            
        );
    }
}

export default Football;