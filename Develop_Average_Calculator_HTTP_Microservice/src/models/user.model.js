import mongoose, { Schema } from "mongoose";

const calculatorSchema = new Schema({
    numbers: {
        type: Array,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        index: true
    },
    windowPrevState: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        index: true
    },
    windowCurrState: {
        type: String,
        required: true
    }
    ,
    avg: {
        type: String,
        trim: true
    }
}
)


export const calculatorModel = mongoose.model("Calculator", calculatorSchema);
