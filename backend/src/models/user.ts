import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    addressLine1: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    }
})

const User = mongoose.model("User", useSchema)

export default User;