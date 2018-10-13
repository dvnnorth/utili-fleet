import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// Import API
import API from "../../utils/API";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      username: "",
      password: "",
      errorMessage: ""
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }
  logIn = event => {
    event.preventDefault();
    API.login({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        console.log(res);
        this.props.setAuth();
      })
      .catch(err => this.setState({ errorMessage: "Login Failed" }));
  };
  handleChange = event => {
    this.setState({ [event.target.getAttribute("id")]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[this.state.cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="rose"
                >
                  <h4 className={classes.cardTitle}>Log in</h4>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="User Name"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PermIdentity
                            className={classes.inputAdornmentIcon}
                          />
                        </InputAdornment>
                      ),
                      onChange: this.handleChange
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      onChange: this.handleChange,
                      type: "Password"
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  {this.state.errorMessage === "" || (
                    <Typography color="error">
                      {this.state.errorMessage}
                    </Typography>
                  )}
                  <Button
                    onClick={event => this.logIn(event)}
                    color="rose"
                    simple
                    size="lg"
                    block
                  >
                    Let's Go
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginPageStyle)(LoginPage);
