const asyncErrorHandler = cb => (req, res, next) =>
    cb(req, res, next).catch(next);

export default asyncErrorHandler;