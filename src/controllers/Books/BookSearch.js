export const bookSearch = async (req, res) => {
    const { q } = req.params;
    return res.send(q);
};