import { calculatorModel } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import createError from "http-errors";
import axios from "axios";

const requestTestServer=async(numberid)=>{
    const url = `${process.env.URL}/${numberid}`;
    const token = process.env.ACCESS_TOKEN;
    var res={};
    await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
           res=response.data;})
        .catch((error) => {

            console.error(error);
        
        });
        return res;
}

const calculator = asyncHandler(async (req, res) => {
    const numberid = req.params.numberid.toString();
    let response={};
    if(numberid=="p"){
        response=await requestTestServer("primes")
    }else if(numberid=="f"){
        response=await requestTestServer("fibo")
    }else if(numberid=="r"){
        response=await requestTestServer("rand")
    }else if(numberid=="e"){
        response=await requestTestServer("even")
    }else{
        throw createError.BadRequest("Invalid numberid");
    }
    let sum=0;
    for(let i=0;i<response.numbers.length;i++){
        sum=sum+parseInt(response.numbers[i]);
    }
    const avg=sum/response.numbers.length;

    //saving to mongodb
    const isExist = await calculatorModel.findOne();
    if(!isExist){
        const calculator = new calculatorModel({
            numbers: response.numbers,
            windowPrevState: [],
            windowCurrState: response.numbers,
            avg: parseInt(avg)
        });
        await calculator.save();
        return res.status(200).json(calculator);
    }else{
        const prevState=isExist.windowCurrState;
        const updated=await calculatorModel.findOneAndUpdate({},{ numbers: response.numbers, windowPrevState: prevState, windowCurrState: response.numbers, avg: parseInt(avg)});
        return res.status(200).json(updated);
    }

});

export { calculator };

