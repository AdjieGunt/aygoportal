import React, { Component } from 'react';
import { compose } from 'recompose';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withFirebase } from '../Firebase';

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

class ContactForm extends Component {
  
  state = {
    name: '',
    email:  '',
    phone: '',
    company: '',
    messages: '',
    openDialog: false,
  }

  handleChangeName = e => {
    const value = e.target.value;

    this.setState({
      name: value,
    });
  }

  handleChangeEmail = e => {
    const value = e.target.value;

    this.setState({
      email: value,
    });
  }

  handleChangePhone = e => {
    const value = e.target.value;

    this.setState({
      phone: value,
    });
  }

  handleChangeCompany = e => {
    const value = e.target.value;


    this.setState({
      company:value,
    });
  }

  handleChangeMessages = e => {
    const value = e.target.value;


    this.setState({
      messages:value,
    });
  }

  validateName = () => {
    const { name } = this.state;

    if (name.length === 0) {
      this.setState({
        nameError: 'Let us know your name! :D',
      });

      return false;
    }

    return true;
  }

  validateEmail = () => {
    const { email } = this.state;

    if (email.length === 0) {
      this.setState({
        emailError: 'Let us know your email! :D',
      });

      return false;
    }

    return true;
  }

  handleSubmitForm = () => {
    const { firebase } = this.props;
    const { name, phone, email, company, messages } = this.state;
    const userId = Math.floor(Date.now()/1000);

    firebase.inbox(userId).set({
      name, phone, email, company, messages
    }, error => {
      if (error) {
        console.log(error);
      } else {
        console.log('Berahsil mengirim inbox ', userId);
        this.setState({
          name: '',
          email:  '',
          phone: '',
          company: '',
          messages: '',
          openDialog: true,
        })
      }
    })
  }

  handleToogleDialog = () => {
    this.setState(prevSate => ({ openDialog: !prevSate.openDialog }));
  }

  renderDialog = () => {
    const { openDialog } = this.state;

    return (
      <Dialog
          open={openDialog}
          onClose={this.handleToogleDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Terima kasih telah menghubungi Aygo."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Terima kasih telah menghubungi Aygo, kami akan memproses masukan atau pertanyaan Anda segera.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToogleDialog} color="primary">
              Ya, sama-sama.
            </Button>
          </DialogActions>
        </Dialog>
    )
  }

  render(){
    const { name, phone, email, company, messages } = this.state;    
    const { classes } = this.props;

    return (
      <section id="about-us" className="container">
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.heroTitle}>Contact Us</Typography>
            </Grid>
            <Grid item xs={8}>
              <form className="container" noValidate autoComplete="off">
                <TextField
                  id="outlined-email-input"
                  label="Name"
                  className={classes.textField}
                  type="text"
                  name="name"
                  autoComplete="name"
                  margin="normal"
                  variant="outlined"
                  value={name}
                  onChange={this.handleChangeName}
                />
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleChangeEmail}
                  value={email}
                />
                <TextField
                  id="outlined-email-input"
                  label="Phone"
                  className={classes.textField}
                  type="text"
                  name="phone"
                  autoComplete="phone"
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleChangePhone}
                  value={phone}
                />
                <TextField
                  id="outlined-email-input"
                  label="Company"
                  className={classes.textField}
                  type="text"
                  name="company"
                  autoComplete="company"
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleChangeCompany}
                  value={company}
                />
                <TextField
                  id="outlined-email-input"
                  label="Messages"
                  className={classes.textField}
                  type="text"
                  name="phone"
                  autoComplete="phone"
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={5}
                  onChange={this.handleChangeMessages}
                  value={messages}
                />
                <Button size="large" className={classes.submitButton} color="primary" onClick={this.handleSubmitForm} >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
          {this.renderDialog()}
        </section>
    )
  }
}

export default compose(
  withFirebase,
  withStyles(styles),  
)(ContactForm);
