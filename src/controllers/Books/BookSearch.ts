import express from 'express';

export const bookSearch = async (
    req: express.Request, res: express.Response
): Promise<express.Response> => {
    const { q } = req.params;
    return res.send(q);
};