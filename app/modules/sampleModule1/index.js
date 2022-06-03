import sampleManager from './manager';
import Utils from '../../utils';
import { apiSuccessMessage, httpConstants } from '../../common/constants';

export default class controller {
    async createSample(req,res){
        lhtWebLog('Inside createSample', req.body, 'createSample', 0, '');
        const [error, createSample] = await Utils.parseResponse(new sampleManager().createsample(req.body));
        if (!createSample) return Utils.handleError(error, req, res)
        return Utils.response(res, createSample, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }
}