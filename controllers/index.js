displayData = (req, res) => {
    const data_string = "Rylan Ulrich, this is temporary data until we create data in a database like mongo.";
    res.status(200).send(data_string);
}

module.exports = { displayData };
