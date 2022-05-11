const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    id : {
        type: Number,
        required : true,
        trim: true
    },
    path : {
        type: String,
        required: true,
        trim:true
    },
    description : {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Cats = mongoose.model('Cats', catSchema);

module.exports = Cats;