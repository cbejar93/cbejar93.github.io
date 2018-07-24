const mongoose = require("mongoose");
const { Schema } = mongoose;

const RangeModel = new Schema ({
    range: {
        type: Number,
        required: true
    }
})

mongoose.model("Range", RangeModel);

// module.exports = Range;

