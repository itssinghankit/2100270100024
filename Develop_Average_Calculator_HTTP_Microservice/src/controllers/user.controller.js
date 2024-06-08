import { calculatorModel } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import createError from "http-errors";
import { ApiResponse } from "../utils/ApiResponse.js";

const calculator = asyncHandler(async (req, res) => {
    
    
console.log(req.params.numberid);

   

});



export { calculator};

