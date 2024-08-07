import mongoose, {Schema} from "mongoose";


const reviewSchema = new Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    courseID: {
        type: mongoose.Types.ObjectId,
        ref: "Course",
    },
    rating: {
        type: Number
    },
    comment: {
        type: String
    }
});

export const Review = mongoose.model("Review", reviewSchema);