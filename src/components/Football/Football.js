import React from 'react'
import classes from './Football.css'
import FootballImage from '../../assets/football.jpg'


const footballImage = (props) => (
    <div className={classes.FootballImage}>
        <img src={FootballImage} className={classes.FootballImg} />
    </div>
);

export default footballImage;