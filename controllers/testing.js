module.exports = {
  ////////////// Testing //////////////////
  successTest: (req, res) => {
    res.statusCode = 200;
    res.send(`You did it! What a success! Great moves, proud of you.`);
  },
  ////////////// End Testing ///////////////
};