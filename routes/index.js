import { stringConstants } from "../app/common/constants";
import sampleModule from '../app/modules/sampleModule';


module.exports = (app) => {

    app.get('/', (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));

    app.post('/create-sample', new sampleModule().createSample);

};