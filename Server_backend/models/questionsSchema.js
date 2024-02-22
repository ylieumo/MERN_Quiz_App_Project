import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    questions: { type :Array}, 
    answers : { type : Array},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', questionModel);