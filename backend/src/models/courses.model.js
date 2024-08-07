import mongoose, {Schema} from "mongoose";

const moduleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: [
            {
                url: {
                    type: String,
                },
                fileType: {
                    type: String
                }
            }
        ], 

    }
})
const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    instructorID: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    module: {
        type: [moduleSchema]
    }
});

export const Course = mongoose.model("Course", courseSchema);