module.exports = {
  ////////////// Testing //////////////////
  successTest: (req, res) => {
    console.log("REDIRECTED TO CONTROLLER SUCCESS TEST----------------------------------------3!")
    res.statusCode = 200;
    console.log("this is what I need to be reading and looking for///////////////////// " + res);
    res.send(`You did it! What a success! Great moves, proud of you.`);
  },
  ////////////// End Testing ///////////////
};