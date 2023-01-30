import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";



 
const paramSchema = new mongoose.Schema({
    temp: {type: String},
    humidity: {type: String},
    pressure: {type: String},
    extraParam: {type: Number, required: false, default: 0},
    date: {type: String}
}, {
    collection: 'params'
});
paramSchema.plugin(uniqueValidator);


async function getLast() {
    return await ParamModel.findOne().sort({'_id':-1}).limit(1).then(function(result) {
        if (result) {
            return mongoConverter(result);
        }
    })
 }
 

async function query() {
    const result = await ParamModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
 }

 async function get(id) {
    return ParamModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
 }
  

const ParamModel = mongoose.model('params', paramSchema);



export default {

    query : query,
    get : get,
    getLast : getLast,

    model: ParamModel
};
