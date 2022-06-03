const SampleModel = require('../../models/smapleModel');
const Utils = require('../../utils');

module.exports = class Manager {
    createsample = async (reqData) =>{
        const sampleObject = new SampleModel(reqData);
        await sampleObject.save();
        if(!sampleObject) return Utils.error({},'unable To Create SampleObject',httpConstants.RESPONSE_CODES.BAD_REQUEST)
        return sampleObject;
    }
}