module.exports = app => {
  app.get('/api/test', (req, res) => {
    res.sendStatus(200);
  });
};
