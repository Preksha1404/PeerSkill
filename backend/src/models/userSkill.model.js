import mongoose, { Schema } from "mongoose";

const userSkillSchema = new mongoose.Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        skillId: {
            type: Schema.Types.ObjectId,
            ref: "Skill"
        },
        proficiency: {
            type: String,
            required: true
        },
        yearsExperience: {
            type: Number,
            required: true
        },
        availability: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
)

export const UserSkill = mongoose.model("UserSkill", userSkillSchema)