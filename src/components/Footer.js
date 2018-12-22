import Typography from "@material-ui/core/es/Typography/Typography";
import Reach from "../images/reach.png";
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Fab from "@material-ui/core/es/Fab/Fab";
import GitHub from "./Github";
import LinkedIn from "./LinkedIn";
import {Code} from "@material-ui/icons";
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import red from "@material-ui/core/es/colors/red";

const styles = theme => ({
  footer: {
    borderRadius: theme.spacing.unit ,
    marginTop: theme.spacing.unit * 8,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  social: {
    justifyContent: 'space-evenly',
    marginBottom: theme.spacing.unit * 3,
  },
  socialLink: {
    marginRight: '0.5em',
    backgroundColor: red[500],
    color: theme.palette.grey[100],
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.45)',
  },
  aboutCard: {
    maxWidth: 400,
    padding: `${theme.spacing.unit * 3}px 0`
  },
})

const Footer = props => {
  const {classes} = props;

  return <React.Fragment>
    <footer className={classes.footer}>
      <div align="center" style={{marginLeft: '1em',}}>
        <div className={classes.aboutCard} xs={12} md={6}>
            <Card className={classes.card} elevation={0} >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </CardContent>
              <div align="center" className={classes.social}>
                <Fab className={classes.socialLink}
                     href={'https://github.com/cyclic-reference/acari-ui'}
                     target={'_blank'}>
                  <Code/>
                </Fab>
                <Fab className={classes.socialLink}
                     href={'https://github.com/cyclic-reference'}
                     target={'_blank'}>
                  <GitHub/>
                </Fab>
                <Fab className={classes.socialLink}
                     href={'https://www.linkedin.com/in/alex-simons-1a459610a/'}
                     target={'_blank'}>
                  <LinkedIn/>
                </Fab>
              </div>
            </Card>
        </div>
      </div>
    </footer>
    <div style={{textAlign: 'center'}}>
      <img alt={"Reach"}
           src={Reach}
           className={classes.reach}></img>
    </div>
  </React.Fragment>;
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)
