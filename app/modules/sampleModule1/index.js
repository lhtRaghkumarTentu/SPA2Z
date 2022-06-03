const sampleManager = require("./manager");
const Utils = require( '../../utils');
const constants =  require('../../common/constants');

module.exports = class controller {
    async createSample(req,res){
        lhtWebLog('Inside createSample', req.body, 'createSample', 0, '');
        const [error, createSample] = await Utils.parseResponse(new sampleManager().createsample(req.body));
        if (!createSample) return Utils.handleError(error, req, res)
        return Utils.response(res, createSample, constants.apiSuccessMessage.FETCH_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }
}