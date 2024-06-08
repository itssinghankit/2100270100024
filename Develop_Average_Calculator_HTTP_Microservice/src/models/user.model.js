import mongoose, { Schema } from "mongoose";

const calculatorSchema = new Schema({
    numbers: {
        type: [Number],
        required: true
    },
    windowPrevState: {
        type: [Number],
        required: true
    },
    windowCurrState: {
        type: [Number],
        required: true
    }
    ,
    avg: {
        type: Number,
    }
}
)


export const calculatorModel = mongoose.model("Calculator", calculatorSchema);
