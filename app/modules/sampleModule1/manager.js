import { httpConstants } from '../../common/constants';
import SampleModel from '../../models/smapleModel';
import Utils from '../../utils';

export default class Manager {
    createsample = async (reqData) =>{
        const sampleObject = new SampleModel(reqData);
        await sampleObject.save();
        if(!sampleObject) return Utils.error({},'unable To Create SampleObject',httpConstants.RESPONSE_CODES.BAD_REQUEST)
        return sampleObject;
    }
}