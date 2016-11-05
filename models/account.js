/**
 * Created by peter on 2016-11-04.
 */

var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');


var accountSchema = new mongoose.Schema({
    // empty schema is ok as passport defines username / password automatically
    username: {
        type: String,
        required: 'Please enter a name'
    },
    _id: {
        type: String,
        required: 'Please choose a type'
    },




});

accountSchema.plugin(plm);

// make this public
module.exports = mongoose.model('account', accountSchema);