import { Document, model, Schema, } from "mongoose";
import { userDocument } from "./user.model";


export interface sessionDocument extends Document {
    user: userDocument['_id'],
    valid: boolean,
    userAgent: string,
    createdAt: Date,
    updatedAt: Date,
}

const sessionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
    },
    valid: {
        type: Boolean,
        default: true
    },
    userAgent: {
        type: String
    }
}, {timestamps: true});

const Session = model('Session', sessionSchema);

export default Session;
