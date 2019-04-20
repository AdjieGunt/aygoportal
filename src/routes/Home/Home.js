import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ContactForm from '../../components/ContactForm';
import teamSvg from './team.svg';
import teamworkSvg from './hero-02.png';


import HeroHome from './Hero';

const styles = {
  heroTitle: {
    marginLeft: '30px',
    marginBottom: '24px',
    fontSize: '42px',
    fontWeight: 600, 
  },
  heroText: {
    marginTop: '50px',
    marginLeft: '140px',
    fontSize: '20px',
  },
  heroImage: {
    width: '600px',
    padding: '16px',
  },
  textField: {
    width: '100%',
  },
  submitButton: {
    marginTop: '20px',
    backgroundColor: '#292a61',
    color: '#fff',
  }
}

class Home extends Component {
  
  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <HeroHome />

        <section id="about-us" className="container">
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography variant="h6" className={classes.heroTitle}>About Us</Typography>
              <Typography variant="body1" gutterBottom className={classes.heroText}>
                PT. Prima Komunitas Media also known as Aygo is media agency, a place where strategy, creativity
                and technology converge. <br />
                We love finding simple solutions for complex challenges and aim to deliver beautifully work.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img className={classes.heroImage} src={teamSvg} alt="team-aygo" />
            </Grid>
          </Grid>
        </section>

        <section id="what-we-do" className="container">
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <img className={classes.heroImage} src={teamworkSvg} alt="team-aygo" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" className={classes.heroTitle}>What we do</Typography>
              <Typography variant="body1" gutterBottom className={classes.heroText}>
                We embrace a culture of exponential growth for our clients by turning data into knowledge and insights and fuels smarter marketing that relevant, personal and engaging. 
              </Typography>
            </Grid>
          </Grid>
        </section>

        <ContactForm />
        
      </div>
    );
  }
}

export default withStyles(styles)(Home);
