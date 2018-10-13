import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardImageStyle from "assets/jss/material-dashboard-pro-react/components/cardImageStyle.jsx";

function CardImage({ ...props }) {
  const { classes, className, children, color, ...rest } = props;
  const cardImageClasses = classNames({
    [classes.cardImage]: true,
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardImageClasses} {...rest}>
      {children}
    </div>
  );
}

CardImage.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ])
};

export default withStyles(cardImageStyle)(CardImage);
