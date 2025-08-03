import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { User } from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        // Save the refresh token in the user document
        user.refreshToken = refreshToken
        // Save in the database
        // validateBeforeSave: false -> this skips the validation for the user model
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, bio, location, timezone } = req.body

    if ([name, email, password, bio, location, timezone].some((field) => field?.trim() === '')) {
        throw new ApiError(400, 'All fields are required');
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        throw new ApiError(400, 'User already exists')
    }

    const profilePhotoLocalPath = req.file?.path

    if (!profilePhotoLocalPath) {
        throw new ApiError(400, 'Profile photo is required')
    }

    const profilePhoto = await uploadOnCloudinary(profilePhotoLocalPath)

    if (!profilePhoto) {
        throw new ApiError(400, 'Profile photo upload failed')
    }

    const user = await User.create({
        name,
        email,
        password,
        bio,
        profilePhoto: profilePhoto.url,
        location,
        timezone
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(400, 'Something went wrong while registering user')
    }

    res.status(200).json(
        new ApiResponse(200, createdUser, 'User created successfully')
    )
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!(email || password)) {
        throw new ApiError(400, 'All fields are required')
    }

    const user = await User.findOne({ email })

    if (!user) {
        throw new ApiError(400, 'User not found')
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(400, 'Invalid user credentials')
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged In Successfully"
            )
        )


})

export { registerUser, loginUser }