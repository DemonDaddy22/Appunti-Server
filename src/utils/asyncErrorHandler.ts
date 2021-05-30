import express from 'express';

// eslint-disable-next-line @typescript-eslint/ban-types
const asyncErrorHandler = (cb: Function) =>
    (req: express.Request, res: express.Response, next: express.NextFunction): void =>
        cb(req, res, next).catch(next);

export default asyncErrorHandler;