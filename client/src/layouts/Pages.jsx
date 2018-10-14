import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
// import PagesHeader from "components/Header/PagesHeader.jsx";
// import Footer from "components/Footer/Footer.jsx";

import pagesRoutes from "routes/pages.jsx";

import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";

// import bgImage from "assets/img/register.jpeg";
import bgVideo from "assets/img/bgvideoSuperHQ.mp4";

class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <PagesHeader {...rest} /> */}
        <div
          className={classes.wrapper}
          ref="wrapper"
          style={{ marginTop: "5rem" }}
        >
          {/* <div
            className={classes.fullPage}
            style={{ backgroundImage: "url(" + bgImage + ")" }}
          > */}
          <video
            playsInline
            autoPlay
            muted
            loop
            poster=""
            id="bgvid"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              minWidth: "100%",
              minHeight: "100%",
              width: "auto",
              height: "auto",
              zIndex: "-100",
              msTransform: "translateX(-50%) translateY(-50%)",
              MozTranform: "translateX(-50%) translateY(-50%)",
              WebkitTransform: "translateX(-50%) translateY(-50%)",
              transform: "translateX(-50%) translateY(-50%)",
              background: "url() no-repeat",
              backgroundSize: "cover"
            }}
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <Switch>
            {pagesRoutes.map((prop, key) => {
              if (prop.collapse) {
                return null;
              }
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              }
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
          {/* <Footer white /> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(Pages);
