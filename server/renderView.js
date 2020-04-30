module.exports = (param) => (req,res) => {
    res.render('index', {view: param});
  };