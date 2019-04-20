import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Hero.css';
import HeroImages from './hero-images-01.png';

function HeroHome() {
  return (
    <div className="container hero">
      <Typography variant="h4" gutterBottom className="hero-title">
        Experience through creative <br/> and technology
      </Typography>
      <div className="hero-images">
        <img src={HeroImages} alt="images-hero" />
      </div>
    </div>
  )
}

export default HeroHome;
