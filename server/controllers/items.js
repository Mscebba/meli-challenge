const { searchByName, itemById } = require('../utils/helpers');

exports.searchItem = async (req, res) => {
  const { q } = req.query;

  try {
    const response = await searchByName(q);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
  }
};

exports.itemId = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await itemById(id);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
  }
};
