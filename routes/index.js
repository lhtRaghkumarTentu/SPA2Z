const constants = require("../app/common/constants");
const sampleModule = require('../app/modules/sampleModule');


module.exports = (app) => {

    app.get('/', (req, res) => res.send("spa2z Working Fine....!!!!!!!!!!!"));

    app.post('/create-sample', new sampleModule().createSample);

};