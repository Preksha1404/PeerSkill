// Use this asyncHandler function as wrapper for async methods in controllers --> to handle errors
// asyncHandler --> take a function as an argument

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }