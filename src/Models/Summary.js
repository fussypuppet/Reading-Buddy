let mongoose = require('mongoose');


let summarySchema = new mongoose.Schema({
    date_started: {
        type: Date,
        required: true,
    },
    date_finished: Date,
    rating: {
        type: Integer,
        minimum: 0,
        maximum: 5
    },
    review: Text,
    bookId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Book",
        required: true
    }
});

module.exports = mongoose.model('Summary', summarySchema);