import { model, Schema, Document } from "mongoose";

export interface IModCase extends Document {
    guildId: string,
    caseId: string,
    staffMember: string,
    user: string,
    reason: string,
    punishment: string,
    date: any,
}

const ModCaseSchema = new Schema({
    guildId: {
        type: String,
        required: true,
    },
    caseId: {
        type: Number,
        required: true,
    },
    staffMember: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    punishment: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

export default model<IModCase>("ModCase", ModCaseSchema);
