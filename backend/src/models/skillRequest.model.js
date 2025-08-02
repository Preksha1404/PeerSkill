import mongoose from "mongoose";

const skillRequestSchema = new mongoose.Schema(
    {
        fromUser: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        toUser: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        skillId: {
            type: Schema.Types.ObjectId,
            ref: "Skill"
        },
        status: {
            type: String,
            required: true
        },
        message: {
            type: String
        },
        proposedSchedule: {
            type: String,
            required: true
        },
        acceptedSchedule: {
            type: String,
            required: true
        },
        completedAt: {
            type: Date
        }

    },
    { timestamps: true }
)

export const SkillRequest = mongoose.model("SkillRequest", skillRequestSchema)