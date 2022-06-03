import { stringConstants } from "../app/common/constants";
import sampleModule from '../app/modules/sampleModule';


module.exports = (app) => {

    app.get('/', (req, res) => res.send("spa2z Working Fine....!!!!!!!!!!!"));

    app.post('/create-sample', new sampleModule().createSample);

};