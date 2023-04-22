module.exports = asyncfuncerror => (req,res,next) => {
    Promise.resolve(asyncfuncerror(req,res,next)).catch(next)
}