import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        difficulty: {
            type: String
        },
        estimatedHours: {
            type: Number
        }
    },
    { timestamps: true }
)

export const Skill = mongoose.model("Skill", skillSchema)