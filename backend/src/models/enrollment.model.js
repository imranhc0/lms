import mongoose, {Schema} from "mongoose";


const enrollmentSchema = new Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    courseID: {
        type: mongoose.Types.ObjectId,
        ref: "Course",
    },
    paymentStatus: {
        type: Boolean
    }
});

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);