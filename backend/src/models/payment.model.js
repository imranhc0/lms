import mongoose, {Schema} from "mongoose";


const paymentSchema = new Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    courseID: {
        type: mongoose.Types.ObjectId,
        ref: "Course",
    },
    amount: {
        type: Number
    },
    currency: {
        type: String,
        enum: ["BDT", "USD"],
        default: "BDT"
    },
    paymentMethod: {
        type: String
    }
});

export const Payment = mongoose.model("Payment", paymentSchema);