import mongoose from "mongoose"

export const bookingSchema = new mongoose.Schema({
    bookinToken: { type:String, required:true , unique:true },
    eventId: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
    userInfo: {
        name: String,
        email: String
    },
    bookedAt: {type:Date, default: Date.now}
})

