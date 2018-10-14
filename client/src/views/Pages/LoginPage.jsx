import React from "react";

// Import API
import API from "utils/API";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons
// import Face from "@material-ui/icons/Face";
import PermIdentity from "@material-ui/icons/PermIdentity";
// import LockOutline from "@material-ui/icons/LockOutline";

import { Redirect } from "react-router-dom";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import CardHeader from ;"components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

import loginLogo from "assets/img/logoWithText.svg";
// import CardIcon from "../../components/Card/CardIcon";

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
      .catch(err => this.setState({ errorMessage: "Login Failed" + err.toString()}));
  };
  handleChange = event => {
    this.setState({ [event.target.getAttribute("id")]: event.target.value });
  };
  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[this.state.cardAnimaton]}>
                {/* <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="rose"
                >
                  <h4 className={classes.cardTitle}>Log in</h4>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="User Name"
                    id="username"
                  <div className={classes.socialLine}>
                    {[
                      "fab fa-facebook-square",
                      "fab fa-twitter",
                      "fab fa-google-plus"
                    ].map((prop, key) => {
                      return (
                        <Button
                          color="transparent"
                          justIcon
                          key={key}
                          className={classes.customButtonClass}
                          click={this.submitHandler}
                        >
                          <i className={prop} />
                        </Button>
                      );
                    })}
                  </div>
                </CardHeader> */}
                <CardBody className={classes.cardBodyImg}>
                  <img
                    src={loginLogo}
                    alt="UtiliFleet Logo"
                    width="80%"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      display: "block"
                    }}
                  />
                  {/* <CustomInput
                    labelText="First Name.."
                    id="firstname"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Face className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  /> */}
                  <CustomInput
                    labelText="Username..."
                    name="username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={this.loginHandler}
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
                    name="password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={this.loginHandler}
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

export default withStyles(loginPageStyle)(LoginPage);
