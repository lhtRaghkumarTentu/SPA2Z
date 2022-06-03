const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema({
    samplename: { type: String, default: '', required: true },
    email: { type: String, default: '', required: true },
    dateOfBirth: { type: Number, default: 0, required: true },
});

sampleSchema.method({
    saveData: async function() {
        return this.save();
    },
});
sampleSchema.static({
    findData: function(findObj) {
        return this.find(findObj);
    },
    findOneData: function(findObj) {
        return this.findOne(findObj);
    },
    findOneAndUpdateData: function(findObj, updateObj) {
        return this.findOneAndUpdate(findObj, updateObj, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true,
        });
    },
    findDataWithAggregate: function(findObj) {
        return this.aggregate(findObj);
    },
    getDocuments: function(requestData, selectionKeys, offset, limit, sortingKey) {
        return this.find(requestData, selectionKeys).sort(sortingKey).skip(parseInt(offset)).limit(parseInt(limit)).exec();
    },
    countData: function(findObj) {
        return this.count(findObj);
    },

});

export default mongoose.model("sample-table", sampleSchema);