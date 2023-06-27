const Item = require('../../models/item');

module.exports = {
  index
};

async function index(req, res) {
  const items = await Item.find({});
  console.log(items);
  res.json(items);
}