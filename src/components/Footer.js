import Typography from "@material-ui/core/es/Typography/Typography";
import Reach from "../images/reach.png";
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const styles = theme => ({
  footer: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})

const Footer = props => {
  const {classes} = props;

  return <React.Fragment>
    <footer className={classes.footer}>
      <div style={{marginLeft: '1em'}}>
        <Typography variant="h6" gutterBottom>
          Alex Simons
        </Typography>
        <Typography variant="h6" gutterBottom>
          <a href="mailto:alexsimons9999@gmail.com">
            alexsimons9999@gmail.com
          </a>
        </Typography>
        <div onClick={() => window.open("https://github.com/cyclic-reference/acari-ui", '_blank')}>
          <Button variant={"contained"} size="small">
            Source Code
          </Button>
        </div>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          I apologise for nothing.
        </Typography>
      </div>
    </footer>
    <div style={{textAlign: 'center'}}>
      <img alt={"Reach"} src={Reach} className={classes.reach}></img>
    </div>
  </React.Fragment>;
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)
