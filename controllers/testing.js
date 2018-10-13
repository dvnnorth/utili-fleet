module.exports = {
  ////////////// Testing //////////////////
  loggedOut: (req, res) => {
    res.statusCode = 200;
    res.send(`Hey guy, you're logged out`);
  },
  ////////////// End Testing ///////////////
};