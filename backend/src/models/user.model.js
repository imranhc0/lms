import mongoose, {Schema} from "mongoose";
import { ADMIN, INSTRUCTOR , USER } from "../constants.js";

const userSchema = new Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        min: [8, "password should be minimum 8 character"],
        max: [15, "password should be maximum 15 character"],
        lowercase: true, 
        required: true,
    },
    role: {
        type: String,
        enum: [ADMIN, INSTRUCTOR, USER],
        required: true
    },
    avatar: {
        type: String
    },
    refreshToken: {
        type: String
    }
});



export const User = mongoose.model("User", userSchema);